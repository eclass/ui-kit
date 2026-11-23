import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Verifica que el catálogo para agentes (ai/) esté al día con la API pública
const root = resolve(__dirname, '..')
const indexSource = readFileSync(resolve(root, 'src/index.ts'), 'utf8')
const catalog = readFileSync(resolve(root, 'ai/README.md'), 'utf8')

/**
 * Obtiene los nombres de valores exportados por `src/index.ts` (sin los `export type`).
 * @returns Nombres exportados, p. ej. `['Label', 'Icons', 'Modal', ...]`.
 */
const getPublicExports = (): string[] => {
  const names: string[] = []
  for (const [, body] of indexSource.matchAll(/export\s*\{([^}]*)\}/g)) {
    body
      .split(',')
      .map((name) => name.trim())
      .filter(Boolean)
      .forEach((name) => names.push(name.split(/\s+as\s+/).pop() as string))
  }
  for (const [, name] of indexSource.matchAll(/export\s*\*\s*as\s+(\w+)/g)) {
    names.push(name)
  }
  return names
}

describe('Catálogo para agentes (ai/)', () => {
  test('detecta los exports de src/index.ts', () => {
    const exports = getPublicExports()
    expect(exports).toContain('Modal')
    expect(exports).toContain('Icons')
    expect(exports).not.toContain('IconProps')
  })

  test.each(getPublicExports())('el índice ai/README.md incluye `%s`', (name) => {
    // Prettier alinea la tabla con espacios, por eso se permite relleno alrededor del nombre
    expect(catalog).toMatch(new RegExp(`\\|\\s*\`${name}\`\\s*\\|`))
  })

  test('cada ficha enlazada en el índice existe', () => {
    const links = Array.from(
      catalog.matchAll(/\]\((components\/[\w-]+\.md)\)/g),
      ([, path]) => path
    )
    expect(links.length).toBeGreaterThan(0)
    const missing = links.filter((path) => !existsSync(resolve(root, 'ai', path)))
    expect(missing).toEqual([])
  })

  test('la skill tiene frontmatter con name y description', () => {
    const skill = readFileSync(resolve(root, 'ai/SKILL.md'), 'utf8')
    expect(skill).toMatch(/^---\nname: ui-kit\ndescription: .+\n---/)
  })
})
