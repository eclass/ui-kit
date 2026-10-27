# CLAUDE.md — ui-kit (librería de componentes eClass)

Librería `@eclass/ui-kit` en React + TypeScript + Chakra UI 1.8, publicada en npm y consumida
por los fronts de eClass (por ejemplo v8, en React 16.14). Incluye un sitio de documentación
en `src/documentation`. Todo en español: código comentado, JSDoc, títulos de pruebas y commits.
El detalle del proyecto está en `.claude/rules/` (algunas reglas se cargan solo al tocar ciertas
carpetas).

Antes de cualquier comando: Node 24.22.0 (`.nvmrc`) y npm 11.13.0. Ver `.claude/rules/commands.md`.

## 1. Piensa antes de codificar

**No asumas. No ocultes la confusión. Expón las compensaciones.**

- Declara tus suposiciones. Si tienes dudas, pregunta.
- Si hay varias interpretaciones, preséntalas; no elijas en silencio.
- Si existe un enfoque más simple, dilo.
- Lo que hoy se ve en el componente es la especificación: no "alinees" un componente con otro sin confirmar.

## 2. Simplicidad primero

**El código mínimo que resuelve el problema. Nada especulativo.**

- Sin características ni "flexibilidad" que no se pidieron.
- Sin abstracciones para código de un solo uso.
- Sin manejo de errores para escenarios imposibles.
- Pregúntate: "¿un ingeniero senior diría que esto está sobre-complicado?". Si es sí, simplifica.

## 3. Cambios quirúrgicos

**Toca solo lo que debes. Limpia solo tu propio desorden.**

- No "mejores" código, comentarios ni formato vecinos; respeta el estilo existente.
- No refactorices lo que no está roto. Si ves código muerto ajeno, menciónalo, no lo borres.
- Elimina solo los imports/variables/funciones que TUS cambios dejaron sin uso.
- Cada línea cambiada debe rastrearse a la solicitud del usuario.
- No cambies la API pública (exports de `src/index.ts`, props existentes) sin avisar: los
  consumidores se rompen. Ver `.claude/rules/conventions.md`.
- Mejoras grandes: de a una funcionalidad, sin commitear, para que el usuario revise cada paso.
- Nunca hagas squash ni amend de tus cambios sobre commits existentes del usuario.

## 4. Ejecución dirigida por objetivos

**Define criterios de éxito. Itera hasta verificar.**

- "Agregar validación" → escribir pruebas para entradas inválidas y hacerlas pasar.
- "Arreglar el bug" → escribir una prueba que lo reproduzca y hacerla pasar.
- "Refactorizar X" → las pruebas pasan antes y después.
- Para tareas de varios pasos, declara un plan breve: `1. [Paso] → verificar: [comprobación]`.

## 5. Auto-mejora continua

Cuando el usuario corrija un enfoque, un error o una suposición:
- Antes de cerrar el tema, pregunta: "¿Agrego esto a CLAUDE.md para no repetir el error?".
- Si acepta, agrega la regla en "Reglas añadidas" (o en el archivo de `.claude/rules/` que
  corresponda si es de una carpeta o tema).
- Si una regla quedó obsoleta, elimínala en vez de acumular.

## 6. Flujo de trabajo

Clasifica cada pedido antes de editar:

- **Tarea chica** (se entiende completa y se podría retomar solo mirando el diff): implementar
  directo.
- **Tarea grande** (varias partes, decisiones abiertas o no se podría retomar desde el diff):
  1. Entrar en modo plan: explorar, preguntar lo que no esté claro y proponer el plan.
  2. Con el plan aprobado, crear `odd/tasks/<feature>.md` (ignorado por git) con objetivo,
     alcance, checklist, criterios de aceptación y progreso. Mantenerlo al día en cada paso.
  3. Implementar de a un paso, deteniéndose para que el usuario revise.
- **Todo componente o funcionalidad nueva** lleva sus pruebas y la actualización de su página
  en `src/documentation` en el mismo cambio.
- **Al terminar y validar a mano**: el usuario corre `/revisar-desarrollo`, que ajusta la
  profundidad de la revisión según el riesgo.
- Al retomar una tarea grande, leer primero su `odd/tasks/<feature>.md`.

## 7. Reglas añadidas

- Pedir "juntar los commits" significa solo hacer squash de los commits del usuario; los cambios
  propios quedan aparte para revisión.
