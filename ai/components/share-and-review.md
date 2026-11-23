# ShareAndReviewModal

Exports: `ShareAndReviewModal`.
Tipos: `dist/organisms/LinkedinAndReview/ShareAndReviewModal.d.ts` (`ShareAndReviewProps`, no
exportado desde el paquete).

## Cuándo usarlo

Modal que se muestra al aprobar un curso para invitar a compartir el logro en LinkedIn y a
dejar una opinión del curso. Tiene dos pasos internos: primero invita a LinkedIn; después de
hacer clic en "Continuar a LinkedIn" cambia (a los 400 ms) a "¿Ya lo compartiste en LinkedIn?"
con el botón para opinar. Vuelve al primer paso cada vez que se cierra.

## Ejemplo

```tsx
import { useDisclosure } from '@chakra-ui/react'
import { ShareAndReviewModal, BtnPrimary } from '@eclass/ui-kit'

interface CompartirProps {
  linkedinUrl: string
  abrirEncuesta: () => void
}

export function Compartir({ linkedinUrl, abrirEncuesta }: CompartirProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <BtnPrimary onClick={onOpen}>Compartir</BtnPrimary>
      <ShareAndReviewModal
        isOpen={isOpen}
        onClose={onClose}
        onContinue={() => window.open(linkedinUrl, '_blank', 'noopener')}
        onLeaveReview={() => {
          onClose()
          abrirEncuesta()
        }}
      />
    </>
  )
}
```

## Props

- `isOpen`, `onClose` (obligatorios): control del modal. `onClose` lo llaman la X, el clic
  fuera, Esc y "Quizás más tarde".
- `onContinue`: botón "Continuar a LinkedIn". El modal no abre LinkedIn por sí mismo: hazlo
  aquí.
- `onLeaveReview`: "Dejar mi opinión" (enlace en el primer paso, botón primario en el segundo).
  No cierra el modal: llama a `onClose` si corresponde.

Textos: fijos en español, no se pueden cambiar por props ('¡Qué bueno que quieras
compartirlo!', 'Aprobaste tu curso. Vamos a mostrarlo en tu LinkedIn.', 'Continuar a
LinkedIn', 'Ya que estás aquí', '¿Qué tal fue aprender con nosotros?', 'Dejar mi opinión',
'¿Ya lo compartiste en LinkedIn?', 'Quizás más tarde').

## Cómo se ve (para reconocerlo en un diseño)

- Modal blanco centrado de hasta 471px de ancho (16px de margen a los lados en mobile), radio
  de 8px, padding de 32px 16px, X gris azulada arriba a la derecha y sin cabecera de color.
- Todo centrado en columna con 16px de separación: ilustración de cotillón de 70x70px, título
  en negrita (`fontSize` xl) gris oscuro (`neutral-darkCharcoal`) y texto en `md`.
- Primer paso: botón primario azul "Continuar a LinkedIn"; separador con líneas grises a ambos
  lados del texto chico "Ya que estás aquí"; pregunta en negrita y enlace gris subrayado "Dejar
  mi opinión" con estrella amarilla (`icon-ripeMango`).
- Segundo paso: botón primario con estrella blanca "Dejar mi opinión" y debajo el botón de
  texto "Quizás más tarde".
