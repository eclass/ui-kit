# Íconos

Exports: `Icon`, `Icons` (namespace: `import { Icons } from '@eclass/ui-kit'` → `<Icons.Calendar />`)
y los tipos `IconProps` e `IconName`.
Tipos: `dist/atoms/Icon/Icon.d.ts` (`IconProps`), `dist/atoms/Icon/registry.d.ts` (`IconName`) y
`dist/atoms/Icons/Base.d.ts` (`BaseProps`, props de cada componente de `Icons`).

## Cuál usar

| Necesito                                                                                    | Usar                                                             |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Un ícono cualquiera del sistema de diseño                                                   | `<Icon name="..." />` (186 íconos, nombre tipado con `IconName`) |
| Uno de los íconos sueltos que ya existen como componente (p. ej. en `leftIcon` de un botón) | `Icons.X` (39 componentes)                                       |

Antes de dibujar un svg propio, buscar el ícono en la lista de abajo.

## Icon

```tsx
import { Icon, vars } from '@eclass/ui-kit'

<Icon name="calendar" />
<Icon name="calendar" fill={vars('colors-main-deepSkyBlue')} w="24px" h="24px" />
```

Props clave (`IconProps`):

- `name` (obligatoria): nombre del ícono (`IconName`). Con un nombre que no existe no muestra nada.
- `fill`: color de las partes del svg que usan `currentColor`. Por defecto, el del ícono o
  `main-ziggurat`. Los íconos multicolor (alertas, etc.) mantienen sus colores propios.
- `w`, `h` (por defecto, los del ícono o `'1rem'`), `viewBox` (por defecto, el del ícono o
  `'0 0 16 16'`), `m` (`'0'`).
- Es decorativo (`aria-hidden`): si el ícono es el único contenido de un botón, el botón
  necesita `aria-label`.

Nombres disponibles (`IconName`):

````text
absent academicData academicHistorial academicRecord accessibility add afternoon alarmDisable
alert alertError alertInfo alertInfoV2 alertSuccess alertWarning anchorComment answers arrow
arrowBack arrowBackV2 arrowBig arrowDown arrowIn arrowNavTest arrowNext arrowRight
arrowTopRight assitant attend audio back bag bell belongs bigStar bigWarning blocked
blockedIsTest blueSimpleCheck board bulletList cake calendar calendarTime calendarV2
certificate certificateV2 chevronNext chevronPrev circleArrowRight circleCheck circularCheck
circularCheckV2 circularError circularInformation circularNeutral classSvg clock clockV2 close
closeModal closeV2 comment comment2 completed contactMe coordinator courseIcon customCloseIcon
diagonalArrow download downloadV2 earlyMorning ellipse ellipseBlue errorColor errorWhite
excerciseSvg externalResource filterNewOld flag folio game goAhead goBack gobackCourses
greenCheck gridIcon group helpDropdown horizontalFlag ia info infoColor informationGmt
informationWelcome infoV2 infoWhite inProgress justCheck letter linkedin listIcon lock
lockWithHole mapIndicator mapIndicatorV2 materials materialSvg mediumStar menuListItems
microphone mobileChat morning multimedia multimediaV2 night objectives opened partialCheck
password pdf pen pendingInfo pendingResource personalDataIcon phone pin playVideo plusSign
portafolio presentation profile profileIcon questionnaire questions raisingHandsIcon
rankingStars reading redCross reeplace refresh remote remoteV2 schedule search settings
showWelcome star stars stopWatch successColor successWhite surveySvg testSvg textBubble
thumbsUp tiltedPen time timelineArrow tinyAlertError tinyAlertInfo tinyAlertSuccess
tinyAlertWarning transversalBlocked transversalCheck transversalCheckWhite transversalReleased
trash trashCan trashDelete trashNoX triangleWarning unitSvg unlocked video warning warningColor
warningWhite watch webcam webCamAlert webcamEffect whatsapp windowParagraph workIcon x```

## Icons

```tsx
import { BtnPrimary, Icons, vars } from '@eclass/ui-kit'

<BtnPrimary leftIcon={<Icons.Download />}>Descargar</BtnPrimary>
<Icons.GoAhead color={vars('colors-main-deepSkyBlue')} w="24px" h="24px" />
````

Props (`BaseProps`): `color` (por defecto `main-ziggurat`; algunos íconos tienen colores fijos en
el svg y no cambian), `w` y `h` (`'1rem'`), `viewBox` (`'0 0 16 16'`), `m` (`'0'`). También son
`aria-hidden`.

Componentes disponibles:

```text
AcademicRecord Accessibility AlertInfo ArrowRight Calendar Certificate CircularCheck
CircularInformation Clock Close DiagonalArrow Download GoAhead GoBack Loader MapIndicator
Multimedia Password Pen PlusSign Profile Remote Schedule Star TextBubble Time TrashCan
TinyAlertError TinyAlertInfo TinyAlertSuccess TinyAlertWarning
ErrorColor InfoColor SuccessColor WarningColor ErrorWhite InfoWhite SuccessWhite WarningWhite
```

## Cómo se ve (para reconocerlo en un diseño)

- La mayoría son íconos planos de un color de 16×16px, por defecto en celeste grisáceo
  `main-ziggurat`.
- Excepciones con tamaño o color propio, por ejemplo: `close` (12px, `main-blueGrey`),
  `alertError`/`alertInfoV2`/`alertSuccess`/`alertWarning` y `tinyAlert*` (círculos de 12px de
  color con símbolo blanco), `alertInfo`, `bigWarning`, `errorWhite`/`infoWhite`/`successWhite`/
  `warningWhite` y `*Color` (ilustraciones de alerta de unos 52–57×45px; las `*White` son las que usa `Alert`),
  `arrowBackV2`/`arrowNext`/`bigStar` (40px).
- Para identificar un ícono de Figma, comparar con la galería de la página Icons de la
  documentación de ui-kit, que los agrupa por similitud.
