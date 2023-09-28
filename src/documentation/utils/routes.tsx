import * as React from 'react'

const Home = React.lazy(async () => await import('../pages/Home'))
const Instalation = React.lazy(async () => await import('../pages/Instalation'))

/** UTILS */
// const Layout = React.lazy(async () => await import('../pages/Utils/Layout'))
const Colors = React.lazy(async () => await import('../pages/Utils/Colors'))
const Borders = React.lazy(async () => await import('../pages/Utils/Borders'))
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

/** ORGANISMS */
const Alerts = React.lazy(async () => await import('../pages/Organisms/Alerts'))
const FlashNotification = React.lazy(
  async () => await import('../pages/Organisms/FlashNotification'),
)
const CourseList = React.lazy(async () => await import('../pages/Organisms/CourseList'))

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
    path: '/utils/borders',
    label: 'Borders',
    component: <Borders />,
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
    path: '/molecules/flash-notification',
    label: 'Flash Notification',
    component: <FlashNotification />,
  },
  {
    path: '/molecules/courselist',
    label: 'CourseList',
    component: <CourseList />,
  },
]
