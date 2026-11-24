#!/usr/bin/env node
/**
 * Hook PostToolUse (Edit|Write|MultiEdit): revisa lo básico de accesibilidad del `.tsx` que
 * Claude acaba de editar, con `eslint-a11y.json` (solo ese archivo, sin tocar el eslint del repo).
 * Si hay hallazgos termina con código 2 y los escribe en stderr para que Claude los corrija.
 * Nunca bloquea por fallos propios (eslint ausente, timeout): en ese caso sale con 0.
 *
 * Está escrito en CommonJS y sin sintaxis moderna (`?.`, `??`, `node:`) porque el `node` del PATH
 * del hook puede ser antiguo; eslint se ejecuta con el Node del `.nvmrc` si está en nvm.
 */
const { execFileSync } = require('child_process')
const { existsSync, readFileSync, readdirSync } = require('fs')
const { join, relative, resolve } = require('path')
const os = require('os')

const raiz = process.env.CLAUDE_PROJECT_DIR || process.cwd()

/** Ejecuta eslint con el Node del `.nvmrc` si existe en nvm; si no, con el Node actual. */
function nodeParaEslint() {
  try {
    const version = readFileSync(join(raiz, '.nvmrc'), 'utf8').trim().replace(/^v/, '')
    const base = join(process.env.NVM_DIR || join(os.homedir(), '.nvm'), 'versions/node')
    const carpeta = readdirSync(base).filter((n) => n.replace(/^v/, '').indexOf(version) === 0)[0]
    const bin = carpeta ? join(base, carpeta, 'bin/node') : ''
    return bin && existsSync(bin) ? bin : process.execPath
  } catch (e) {
    return process.execPath
  }
}

function salir(codigo) {
  process.exit(codigo)
}

let entrada = {}
try {
  entrada = JSON.parse(readFileSync(0, 'utf8'))
} catch (e) {
  salir(0)
}

const archivo = entrada && entrada.tool_input && entrada.tool_input.file_path
if (typeof archivo !== 'string') salir(0)

const ruta = relative(raiz, resolve(archivo))
const aplica =
  ruta.indexOf('src/') === 0 &&
  /\.tsx$/.test(ruta) &&
  !/\.test\.tsx$/.test(ruta) &&
  ruta.indexOf('src/documentation/') !== 0 &&
  ruta !== 'src/Playground.local.tsx' &&
  existsSync(resolve(raiz, ruta))
if (!aplica) salir(0)

const eslint = resolve(raiz, 'node_modules/eslint/bin/eslint.js')
if (!existsSync(eslint)) salir(0)

let salida = ''
try {
  salida = execFileSync(
    nodeParaEslint(),
    [eslint, '--no-eslintrc', '-c', '.claude/hooks/eslint-a11y.json', '-f', 'json', ruta],
    { cwd: raiz, encoding: 'utf8', timeout: 20000, stdio: ['ignore', 'pipe', 'ignore'] }
  )
} catch (error) {
  // eslint sale con 1 cuando hay hallazgos: el JSON viene en stdout
  salida = (error && error.stdout) || ''
}

let mensajes = []
try {
  const resultado = JSON.parse(salida)
  // Solo las reglas de este hook: los `eslint-disable` de otras reglas del archivo generan avisos
  // de "regla no encontrada" que no importan aquí
  mensajes = ((resultado[0] && resultado[0].messages) || []).filter(
    (m) => m.ruleId && (m.ruleId.indexOf('jsx-a11y/') === 0 || m.ruleId === 'no-restricted-syntax')
  )
} catch (e) {
  salir(0)
}

/**
 * Rangos de líneas modificadas respecto a HEAD (staged y sin stage). `null` significa "todo el
 * archivo": archivo nuevo sin seguimiento o git no disponible.
 */
function lineasEditadas() {
  try {
    execFileSync('git', ['ls-files', '--error-unmatch', ruta], {
      cwd: raiz,
      stdio: ['ignore', 'ignore', 'ignore'],
    })
    const diff = execFileSync('git', ['diff', '-U0', 'HEAD', '--', ruta], {
      cwd: raiz,
      encoding: 'utf8',
      timeout: 10000,
    })
    const rangos = []
    diff.split('\n').forEach((linea) => {
      const h = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/.exec(linea)
      if (!h) return
      const inicio = Number(h[1])
      const cantidad = h[2] === undefined ? 1 : Number(h[2])
      if (cantidad > 0) rangos.push([inicio, inicio + cantidad - 1])
    })
    return rangos
  } catch (e) {
    return null
  }
}

// Solo hallazgos cuyo elemento (de `line` a `endLine`) se cruza con las líneas editadas: la deuda
// anterior del archivo no se reporta
const rangos = lineasEditadas()
if (rangos !== null) {
  mensajes = mensajes.filter((m) => {
    const fin = m.endLine || m.line
    return rangos.some((r) => m.line <= r[1] && fin >= r[0])
  })
}
if (mensajes.length === 0) salir(0)

const lineas = mensajes.map(
  (m) => '- ' + ruta + ':' + m.line + ' ' + m.message + ' [' + m.ruleId + ']'
)
process.stderr.write(
  [
    'Accesibilidad básica: ' + mensajes.length + ' hallazgo(s) en lo que acabas de editar.',
  ]
    .concat(lineas)
    .concat([
      'Corrige los mecánicos según la skill accesibilidad-teclado-lector (informando cada cambio);',
      'los que impliquen decisión (Box→MenuItem, aria-label, API pública) repórtalos al usuario.',
      '',
    ])
    .join('\n')
)
salir(2)
