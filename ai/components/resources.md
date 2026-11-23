# Resources

Exports: `Resources`.
Tipos: `dist/organisms/Resources/Resources.d.ts` (`ResourcesProps`, no exportado).

## Cuándo usarlo

Tarjeta de un recurso descargable (pdf, Excel, Word, PowerPoint, imagen, video, audio) o de un
enlace externo, con ícono del formato, título, detalle y acción. Cada `Resources` es **una**
tarjeta: para un listado, mapear el arreglo y acomodarlas con `Flex`/`Grid` de Chakra.

## Ejemplo

```tsx
import { Flex } from '@chakra-ui/react'
import { Resources } from '@eclass/ui-kit'

export function Recursos({ items }: { items: any[] }): JSX.Element {
  return (
    <Flex gap="16px" wrap="wrap">
      {items.map((item) => (
        <Resources
          key={item.id}
          id={item.id}
          resourceType="pdf"
          resourceTitle="Calendario semestral"
          resourceDetail="Fechas importantes de tus cursos"
          resourceTextDownload="Descargar"
          resourceLink={item.url}
          targetBlank
        />
      ))}
    </Flex>
  )
}
```

## Props clave

- `resourceType` (obligatorio): formato en minúsculas. Define el ícono y el color del fondo:
  `jpeg`, `jpg`, `png`, `gif` (amarillo), `ppt`, `pptx` (naranjo), `doc`, `docx` (azul), `csv`,
  `xls`, `xlsx` (verde), `pdf` (rojo), `mp4`, `avi`, `mkv` (celeste), `mp3`, `wav` (morado) y
  `url` (azul intenso, con flecha diagonal en vez del ícono de descarga). Un formato
  desconocido queda sin ícono y con fondo amarillo.
- `resourceTitle`, `resourceDetail` y `resourceTextDownload` (obligatorios): textos de la
  tarjeta (`resourceTextDownload` es el texto de la acción, por ejemplo 'Descargar' o 'Ir al
  recurso'). No hay textos por defecto.
- `resourceLink` (obligatorio): `href` de toda la tarjeta.
- `targetBlank`: abre el enlace en otra pestaña (por defecto en la misma).
- `id` (obligatorio, `string | number`): no se usa para renderizar.

Sin callbacks: toda la tarjeta es un enlace.

## Cómo se ve (para reconocerlo en un diseño)

- Tarjeta de 285px de ancho, borde gris claro (`borders-light`) y radio de 8px (`radii-big`);
  sombra suave al pasar el mouse.
- Arriba, franja de 139px de alto con el color del formato y formas decorativas blancas
  translúcidas (círculo, ondas, zigzag), con el ícono del formato centrado.
- Abajo, centrado y con padding de 16px: título en negrita 16px gris oscuro, detalle en 12px y
  la acción en 14px gris subrayada con ícono azul (`main-deepSkyBlue`) de descarga, o de flecha
  diagonal si es `url`.
