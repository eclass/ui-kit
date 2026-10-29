import { useState } from 'react'
import { Box, Input, useClipboard } from '@chakra-ui/react'

// Icon no está en el barrel @atoms: así los componentes que lo usan no cargan los íconos
import { Icon } from '@/atoms/Icon'
import { icons, IconName } from '@/atoms/Icon/registry'
import { vars } from '@/theme'
import { MyHeading, MyText, MyTitle, Code } from '@/documentation/components'

const iconNames = Object.keys(icons) as IconName[]

interface IconGroup {
  title: string
  names: IconName[]
}

/**
 * Tarjeta de un ícono en la galería: al hacer clic copia su código de uso.
 */
function IconCard({ name }: { name: IconName }): JSX.Element {
  const { hasCopied, onCopy } = useClipboard(`<Icon name="${name}" />`)

  return (
    <Box
      as="button"
      type="button"
      onClick={onCopy}
      aria-label={`Copiar código del ícono ${name}`}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      gap="8px"
      p="16px 8px"
      border="1px solid"
      borderColor={vars('colors-neutral-platinum')}
      borderRadius="8px"
      bg={vars('colors-neutral-white')}
      _hover={{ borderColor: vars('colors-main-deepSkyBlue') }}
    >
      <Box
        display="grid"
        placeItems="center"
        minH="48px"
        maxW="100%"
        sx={{ svg: { maxW: '100%', maxH: '80px' } }}
      >
        <Icon name={name} />
      </Box>
      <Box as="span" fontSize="12px" wordBreak="break-all">
        {hasCopied ? 'copiado' : name}
      </Box>
    </Box>
  )
}

export const ViewIcons = (): JSX.Element => {
  const [search, setSearch] = useState('')
  const matches = (name: IconName): boolean => name.toLowerCase().includes(search.toLowerCase())
  const groups = iconGroups
    .concat({ title: 'Otros', names: iconNames.filter((name) => !groupedNames.has(name)) })
    .map((group) => ({ ...group, names: group.names.filter(matches) }))
    .filter((group) => group.names.length > 0)

  return (
    <>
      <MyHeading>Icons</MyHeading>
      <MyText>
        Centro de íconos de eClass. Se usan con un solo componente, indicando el nombre del ícono.
        Cada ícono trae su viewBox, color y tamaño por defecto, que se pueden cambiar por props.
      </MyText>
      <Code text="import { Icon } from '@eclass/ui-kit'" />
      <Icon name="calendar" />
      <Code text='<Icon name="calendar" />' />

      <MyTitle>Props</MyTitle>
      <MyText>
        fill cambia el color principal del ícono; w y h, el tamaño; viewBox, el área visible del
        svg; m, el margen. Los íconos multicolor (alertas) mantienen sus colores propios.
      </MyText>
      <Icon name="calendar" fill={vars('colors-main-deepSkyBlue')} w="32px" h="32px" />
      <Code
        text={`<Icon name="calendar" fill={vars('colors-main-deepSkyBlue')} w="32px" h="32px" />`}
      />

      <MyTitle>Galería</MyTitle>
      <MyText>
        Íconos agrupados por similitud para validarlos con diseño. Haz clic en un ícono para copiar
        su código.
      </MyText>
      <Input
        aria-label="Buscar ícono por nombre"
        placeholder="Buscar ícono"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        maxW="320px"
        mb="16px"
      />
      {groups.map((group) => (
        <Box key={group.title} mb="32px">
          <Box as="h3" fontSize="18px" fontWeight="bold" mb="12px">
            {group.title} ({group.names.length})
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(120px, 1fr))"
            gap="16px"
          >
            {group.names.map((name) => (
              <IconCard key={name} name={name} />
            ))}
          </Box>
        </Box>
      ))}
      {groups.length === 0 ? <MyText>No hay íconos con ese nombre.</MyText> : null}
    </>
  )
}

export default ViewIcons

/** Grupos de la galería. Los íconos que no estén en ninguno se muestran en "Otros". */
const iconGroups: IconGroup[] = [
  {
    title: 'Alertas grandes',
    names: [
      'alertInfo',
      'bigWarning',
      'errorColor',
      'errorWhite',
      'infoColor',
      'infoWhite',
      'successColor',
      'successWhite',
      'warningColor',
      'warningWhite',
    ],
  },
  {
    title: 'Estados e información',
    names: [
      'absent',
      'alert',
      'alertError',
      'alertInfoV2',
      'alertSuccess',
      'alertWarning',
      'attend',
      'circleCheck',
      'circularCheck',
      'circularCheckV2',
      'circularError',
      'circularInformation',
      'circularNeutral',
      'greenCheck',
      'info',
      'infoV2',
      'informationGmt',
      'informationWelcome',
      'partialCheck',
      'pendingInfo',
      'pendingResource',
      'redCross',
      'tinyAlertError',
      'tinyAlertInfo',
      'tinyAlertSuccess',
      'tinyAlertWarning',
      'transversalCheck',
      'transversalCheckWhite',
      'triangleWarning',
      'warning',
    ],
  },
  {
    title: 'Check',
    names: ['blueSimpleCheck', 'completed', 'justCheck'],
  },
  {
    title: 'Cerrar',
    names: ['close', 'closeModal', 'closeV2', 'customCloseIcon', 'x'],
  },
  {
    title: 'Agregar',
    names: ['add', 'plusSign', 'showWelcome'],
  },
  {
    title: 'Flechas',
    names: [
      'arrow',
      'arrowBack',
      'arrowBackV2',
      'arrowBig',
      'arrowDown',
      'arrowIn',
      'arrowNavTest',
      'arrowNext',
      'arrowRight',
      'arrowTopRight',
      'back',
      'chevronNext',
      'chevronPrev',
      'circleArrowRight',
      'diagonalArrow',
      'goAhead',
      'goBack',
      'gobackCourses',
      'timelineArrow',
    ],
  },
  {
    title: 'Descargar, subir y recargar',
    names: ['anchorComment', 'download', 'downloadV2', 'filterNewOld', 'reeplace', 'refresh'],
  },
  {
    title: 'Calendario y tiempo',
    names: [
      'afternoon',
      'alarmDisable',
      'calendar',
      'calendarTime',
      'calendarV2',
      'clock',
      'clockV2',
      'earlyMorning',
      'morning',
      'night',
      'schedule',
      'stopWatch',
      'time',
      'watch',
    ],
  },
  {
    title: 'Candados y bloqueos',
    names: [
      'blocked',
      'blockedIsTest',
      'lock',
      'lockWithHole',
      'opened',
      'password',
      'portafolio',
      'transversalBlocked',
      'transversalReleased',
      'unlocked',
    ],
  },
  {
    title: 'Personas',
    names: [
      'assitant',
      'coordinator',
      'group',
      'personalDataIcon',
      'presentation',
      'profile',
      'profileIcon',
      'raisingHandsIcon',
    ],
  },
  {
    title: 'Mensajes y contacto',
    names: [
      'answers',
      'bell',
      'comment',
      'comment2',
      'contactMe',
      'helpDropdown',
      'letter',
      'linkedin',
      'mobileChat',
      'phone',
      'textBubble',
      'whatsapp',
    ],
  },
  {
    title: 'Estrellas y valoración',
    names: ['bigStar', 'mediumStar', 'rankingStars', 'star', 'stars', 'thumbsUp'],
  },
  {
    title: 'Listas y vistas',
    names: [
      'academicHistorial',
      'bulletList',
      'gridIcon',
      'listIcon',
      'menuListItems',
      'reading',
      'windowParagraph',
    ],
  },
  {
    title: 'Multimedia',
    names: [
      'audio',
      'microphone',
      'multimedia',
      'multimediaV2',
      'playVideo',
      'remote',
      'remoteV2',
      'video',
      'webcam',
      'webCamAlert',
      'webcamEffect',
    ],
  },
  {
    title: 'Papelera y edición',
    names: ['pen', 'tiltedPen', 'trash', 'trashCan', 'trashDelete', 'trashNoX'],
  },
  {
    title: 'Ubicación',
    names: ['mapIndicator', 'mapIndicatorV2', 'pin'],
  },
  {
    title: 'Cursos y recursos',
    names: [
      'academicData',
      'academicRecord',
      'bag',
      'belongs',
      'board',
      'certificate',
      'certificateV2',
      'courseIcon',
      'flag',
      'folio',
      'game',
      'horizontalFlag',
      'inProgress',
      'materials',
      'objectives',
      'pdf',
      'questionnaire',
      'questions',
    ],
  },
  {
    title: 'Recursos en celeste claro',
    names: [
      'classSvg',
      'excerciseSvg',
      'externalResource',
      'materialSvg',
      'surveySvg',
      'testSvg',
      'unitSvg',
      'workIcon',
    ],
  },
]

const groupedNames = new Set(iconGroups.flatMap((group) => group.names))
