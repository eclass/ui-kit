import { useEffect, useState } from 'react'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { useLocation, Outlet } from 'react-router-dom'

import { CloseIcon } from './CloseIcon'
import { HamburgerIcon } from './HamburgerIcon'
import { type IRoute, routes } from '../utils/routes'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { vars } from '@/theme'

export const Layout = (): JSX.Element => {
  const [showNav, setShowNav] = useState(false)
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const isMobile = !isDesktop ? 'menu-mobile' : ''
  const isOpen = showNav ? 'menu-open' : ''
  const { pathname } = useLocation()

  /** Cierra el menu al cambiar de ruta */
  useEffect(() => {
    if (pathname) {
      setShowNav(false)
    }
  }, [pathname])

  /** Bloquea scroll de body al levantar el menu */
  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      if (!isDesktop && showNav) {
        body.style.overflowY = 'hidden'
        body.style.overscrollBehavior = 'contain'
      } else {
        body.style.overflowY = 'scroll'
        body.style.overscrollBehavior = 'initial'
      }
    }
  }, [isDesktop, showNav])

  return (
    <Box
      className={`ContainerLayout ${isMobile} ${isOpen}`}
      margin="0 auto"
      maxW="90rem"
      minH="100vh"
      position="relative"
      w="100%"
      sx={{
        '&.menu-mobile': {
          '.layout-menu': {
            bg: vars('colors-neutral-white'),
            borderWidth: '0',
            display: 'none',
            h: '100vh',
            opacity: 0,
            position: 'absolute',
            right: '-100vw',
            top: '0',
            transition: 'opacity .1s ease-in-out',
            w: '100vw',
            zIndex: 2,
          },

          '&.menu-open': {
            '.layout-menu': {
              display: 'block',
              opacity: 1,
              position: 'fixed',
              right: 0,
            },
          },
        },

        '@media screen and (min-width: 900px)': {
          pl: '17.5rem',
        },
      }}
    >
      {!isDesktop && (
        <Box
          display="flex"
          justifyContent="flex-end"
          padding="1rem"
          position="fixed"
          w="100%"
          zIndex={3}
        >
          <Box
            bg={vars('colors-main-deepSkyBlue')}
            borderRadius={vars('radii-small')}
            cursor="pointer"
            display="grid"
            h="2.5rem"
            onClick={() => {
              setShowNav(!showNav)
            }}
            padding=".5rem"
            placeContent="center"
            shadow={vars('shadows-sm')}
            w="2.5rem"
          >
            {showNav ? (
              <CloseIcon color={vars('colors-neutral-white')} />
            ) : (
              <HamburgerIcon w="1.5rem" h="1.5rem" color={vars('colors-neutral-white')} />
            )}
          </Box>
        </Box>
      )}

      <Box
        as="nav"
        borderRight={vars('borders-light')}
        className="layout-menu"
        left={0}
        position="absolute"
        top={0}
      >
        <Box
          as="ul"
          height="100vh"
          listStyleType="none"
          overflowX="hidden"
          w="100%"
          sx={{
            pb: '3rem',
            '@media screen and (min-width: 900px)': {
              maxWidth: '17.5rem',
              position: 'fixed',
            },
          }}
        >
          <Logo />
          {routes.map((route: IRoute) => {
            return <Nav key={route.label} route={route} />
          })}
        </Box>
      </Box>
      <Box
        as="section"
        className="layout-page"
        m="0 auto"
        maxW="800px"
        p="1rem"
        w="100%"
        sx={{
          '&>*': {
            mb: '1rem',
          },
          '@media screen and (min-width: 900px)': {
            p: '2rem',
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
