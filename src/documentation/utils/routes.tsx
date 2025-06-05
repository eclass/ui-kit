import * as React from 'react'

const Home = React.lazy(async () => await import('../pages/Home'))
const Instalation = React.lazy(async () => await import('../pages/Instalation'))

/** UTILS */
// const Layout = React.lazy(async () => await import('../pages/Utils/Layout'))
const Borders = React.lazy(async () => await import('../pages/Utils/Borders'))
const Colors = React.lazy(async () => await import('../pages/Utils/Colors'))
const ShadowsElevation = React.lazy(async () => await import('../pages/Utils/ShadowsElevation'))
const SpacialUnits = React.lazy(async () => await import('../pages/Utils/SpacialUnits'))

/** ATOMS */
// const Icons = React.lazy(async () => await import('../pages/Atoms/Icons'))
const Label = React.lazy(async () => await import('../pages/Atoms/Label'))
const Progress = React.lazy(async () => await import('../pages/Atoms/Progress'))
const Ripples = React.lazy(async () => await import('../pages/Atoms/Ripples'))
const TinyAlert = React.lazy(async () => await import('../pages/Atoms/TinyAlert'))

/** MOLECULES */
const Buttons = React.lazy(async () => await import('../pages/Molecules/Buttons'))
const Tooltip = React.lazy(async () => await import('../pages/Molecules/Tooltip'))
const UserWay = React.lazy(async () => await import('../pages/Molecules/UserWay'))

/** ORGANISMS */
const Alerts = React.lazy(async () => await import('../pages/Organisms/Alerts'))
const FlashNotification = React.lazy(
  async () => await import('../pages/Organisms/FlashNotification')
)
const CalendarDropdown = React.lazy(async () => await import('../pages/Organisms/CalendarDropdown'))
const CourseList = React.lazy(async () => await import('../pages/Organisms/CourseList'))
const Events = React.lazy(async () => await import('../pages/Organisms/Events'))
const EventsList = React.lazy(async () => await import('../pages/Organisms/EventsList'))
const ModalAlert = React.lazy(async () => await import('../pages/Organisms/ModalAlert'))
const Resources = React.lazy(async () => await import('../pages/Organisms/Resources'))

/**
 * Rutas que tiene el proyecto con el respectivo link en la navegación.
 *
 * El orden en el que estan es el que se muestra
 */

export interface IRoute {
  path?: string
  label: string
  component?: JSX.Element
}

export const routes: IRoute[] = [
  {
    path: '/',
    label: 'Home',
    component: <Home />,
  },
  {
    path: '/instalation',
    label: 'Instalación',
    component: <Instalation />,
  },
  /** ****************************** */
  {
    label: 'Utils',
  },
  /** ****************************** */
  {
    path: '/utils/borders',
    label: 'Borders',
    component: <Borders />,
  },
  {
    path: '/utils/colors',
    label: 'Colores',
    component: <Colors />,
  },
  // {
  //   path: '/utils/layout',
  //   label: 'Layout',
  //   component: <Layout />,
  // },
  {
    path: '/utils/spacial-units',
    label: 'Spacial units',
    component: <SpacialUnits />,
  },
  {
    path: '/utils/shadows-elevation',
    label: 'Shadows § levation',
    component: <ShadowsElevation />,
  },
  /** ****************************** */
  {
    label: 'Atoms',
  },
  /** ****************************** */

  // {
  //   path: '/atoms/icons',
  //   label: 'Icons',
  //   component: <Icons />,
  // },
  {
    path: '/atoms/label',
    label: 'Label',
    component: <Label />,
  },
  {
    path: '/atoms/progress',
    label: 'Progress',
    component: <Progress />,
  },
  {
    path: '/atoms/ripples',
    label: 'Ripples',
    component: <Ripples />,
  },
  {
    path: '/atoms/tiny-alert',
    label: 'TinyAlert',
    component: <TinyAlert />,
  },

  /** ****************************** */
  {
    label: 'Molecules',
  },
  /** ****************************** */
  {
    path: '/molecules/buttons',
    label: 'Buttons',
    component: <Buttons />,
  },
  {
    path: '/molecules/tooltip',
    label: 'Tooltip',
    component: <Tooltip />,
  },
  {
    path: '/molecules/userway',
    label: 'UserWay',
    component: <UserWay />,
  },
  /** ****************************** */
  {
    label: 'Organisms',
  },
  /** ****************************** */
  {
    path: '/organisms/alerts',
    label: 'Alerts',
    component: <Alerts />,
  },
  {
    path: '/organisms/calendardropdown',
    label: 'Calendar Dropdown',
    component: <CalendarDropdown />,
  },
  {
    path: '/organisms/courselist',
    label: 'Course List',
    component: <CourseList />,
  },
  {
    path: '/organisms/events',
    label: 'Events',
    component: <Events />,
  },
  {
    path: '/organisms/eventslist',
    label: 'Events List',
    component: <EventsList />,
  },
  {
    path: '/organisms/flash-notification',
    label: 'Flash Notification',
    component: <FlashNotification />,
  },
  {
    path: '/organisms/modalalert',
    label: 'Modal Alert',
    component: <ModalAlert />,
  },
  {
    path: '/organisms/resource',
    label: 'Resources',
    component: <Resources />,
  },
]
