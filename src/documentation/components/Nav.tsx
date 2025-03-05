import { Link, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { vars } from 'theme'
import { ArrowRight } from '../../atoms/Icons/ArrowRight'
import { IRoute } from '../utils/routes'

export const Nav = ({ route }: { route: IRoute }): JSX.Element => {
  const { pathname } = useLocation()
  const { path, label } = route

  if (path === undefined && label.length === 0) {
    return <></>
  }

  const isActive = pathname === `${path ?? 'not'}` ? 'active' : ''

  const isRouteValid = label === 'Home' || path?.length

  const onClick = (): any => {
    if (isRouteValid && pathname !== path) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Box
      as="li"
      className={`${isActive}`}
      onClick={onClick}
      mt={isRouteValid ? 0 : '1rem'}
      sx={{
        borderBottom: vars('borders-light'),
        transition: 'background .2s ease-in-out',
        '&:hover': {
          bg: isRouteValid ? vars('colors-neutral-cultured2') : 'transparent',
          svg: {
            color: vars('colors-main-deepSkyBlue'),
          },
        },
        '&.active': {
          bg: vars('colors-neutral-platinum'),
          svg: {
            color: vars('colors-main-deepSkyBlue'),
          },
        },
        'a, span': {
          w: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: '.75rem 1rem',
        },
      }}
    >
      {isRouteValid ? (
        <Link to={`${path ?? ''}`}>
          {label}
          <ArrowRight color={vars('colors-neutral-silverSand')} w="0.75rem" />
        </Link>
      ) : (
        <Box as="span" fontWeight="bold" fontSize="1.125rem">
          {label}
        </Box>
      )}
    </Box>
  )
}
