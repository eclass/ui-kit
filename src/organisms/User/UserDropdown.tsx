import * as React from 'react'
import { useRef, useState } from 'react'
import {
  Box,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuListProps,
  MenuItemProps,
  HeadingProps,
  MenuButtonProps,
  LinkProps,
} from '@chakra-ui/react'

import { Avatar, NewTooltip } from '@/molecules'
import { vars } from '@/theme'
import { profileStyle } from './menuProfileStyle'
import { focusMenuWithKeys } from './Dropdown/utils/focusMenuWithKeys'
import { useTooltipToggleDelay } from './Dropdown/hooks/useTooltipToggleDelay'
import { useHideBackgroundOnMobile } from './Dropdown/hooks/useHideBackgroundOnMobile'
import { getMenuItemIcon, ProfileMenuItemType } from './Dropdown/utils/getIconToRender'

export type { ProfileMenuItemType }

export interface ProfileMenuItem {
  label: string
  type: ProfileMenuItemType
  href?: string
  onClick?: () => void
}

export interface AccesibleProfileMenuProps {
  /** Nombre del usuario a mostrar en la cabecera del menú */
  userInfo: {
    name: string
    id: number
    picture: string
  }
  /** Items del menú de navegación */
  menuItems: ProfileMenuItem[]
  /** Control externo del menú (opcional, para coordinar con otros menús) */
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const StyledMenuButton = MenuButton as React.FC<MenuButtonProps>
const StyledMenuList = MenuList as React.ForwardRefExoticComponent<
  MenuListProps & React.RefAttributes<HTMLDivElement>
>
const StyledHeading = Heading as React.FC<HeadingProps>
const StyledMenuItem = MenuItem as React.FC<MenuItemProps & LinkProps>

export const UserDropdown = ({
  userInfo,
  menuItems,
  isOpen: controlledIsOpen,
  onOpen: controlledOnOpen,
  onClose: controlledOnClose,
}: AccesibleProfileMenuProps): React.ReactElement => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isOpen = controlledIsOpen ?? internalIsOpen
  const onOpen = controlledOnOpen ?? (() => setInternalIsOpen(true))
  const onClose = controlledOnClose ?? (() => setInternalIsOpen(false))

  const isMobile = useHideBackgroundOnMobile(isOpen)
  const [isTooltipDisabled, setTooltipDisabled] = useState(false)

  useTooltipToggleDelay(isOpen, setTooltipDisabled)
  const menuListRef = useRef<HTMLDivElement | null>(null)

  const handleArrowKeyFocus = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    focusMenuWithKeys(event, menuListRef)
  }

  return (
    <Box
      aria-label="Mi perfil"
      data-menu="profile"
      position="relative"
      sx={{
        '&::after': {
          borderColor: `transparent transparent ${
            vars('colors-neutral-davysGrey') ?? '#5C5C5C'
          } transparent`,
          borderStyle: 'solid',
          borderWidth: '0 11px 10px 11px',
          content: '""',
          display: isOpen ? 'block' : 'none',
          height: '0',
          right: '4px',
          position: 'absolute',
          top: '30px',
          width: '0',
        },
        '>div': {
          left: isMobile ? '0 !important' : 'auto',
          position: isMobile ? 'fixed !important' : 'absolute',
          top: isMobile ? '52px !important' : 'auto',
          bottom: isMobile ? '0 !important' : 'auto',
          transform: isMobile ? 'none !important' : 'auto',
          width: isMobile ? '100% !important' : 'auto',
        },
        '.chakra-menu__menu-list': {
          animation: 'none !important',
          background: vars('colors-neutral-davysGrey'),
          borderRadius: isMobile ? '0' : '10px',
          boxShadow: isMobile ? 'none' : 'rgba(47, 47, 47, 0.2) -1px 6px 40px 0px',
          display: isMobile ? 'flex' : 'block',
          flexDirection: isMobile ? 'column' : 'initial',
          height: isMobile ? '100%' : 'auto',
          maxHeight: isMobile ? '100%' : 'auto',
          opacity: '1 !important',
          overflowY: isMobile ? 'auto' : 'hidden',
          padding: '15px 0 0',
          position: 'absolute',
          right: isMobile ? 'auto' : '-8px',
          top: isMobile ? '0 !important' : 'auto',
          transform: 'none !important',
          transition: 'none !important',
          width: isMobile ? '100vw' : '290px',
        },

        '.content': {
          flex: isMobile ? '1' : 'auto',
          borderRadius: !isMobile ? '10px' : '0',
          bg: vars('colors-neutral-white'),
          '>button, >a': {
            borderBottom: isMobile ? `solid 1px ${vars('colors-neutral-platinum')}` : 'none',
          },
        },
        '.css-r6z5ec': {
          zIndex: '4',
        },
      }}
    >
      <Menu
        autoSelect={false}
        placement="bottom-end"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        {() => (
          <>
            <NewTooltip label="Mi perfil" isDisabled={isTooltipDisabled}>
              <StyledMenuButton
                background="transparent"
                border="transparent"
                height="30px"
                lineHeight="0"
                p="0"
                _focusVisible={{
                  boxShadow: `0 0 0 3px ${vars('colors-alert-deepSkyBlue')}`,
                  borderRadius: '50%',
                }}
              >
                <Avatar
                  fullName={userInfo.name}
                  userId={userInfo.id}
                  picture={userInfo.picture}
                  size={30}
                  fontSize={14}
                  id="CrossAvatar"
                />
              </StyledMenuButton>
            </NewTooltip>
            <StyledMenuList
              ref={menuListRef}
              tabIndex={-1}
              onKeyDown={handleArrowKeyFocus}
              borderWidth="0"
              aria-hidden
            >
              <StyledHeading sx={profileStyle.header} textAlign="start">
                {userInfo.name}
              </StyledHeading>

              <Box className="content">
                {menuItems.map((item) => {
                  const { label, type, href, onClick } = item
                  const view = getMenuItemIcon(type)
                  const isLogout = type === 'logout'

                  return (
                    <StyledMenuItem
                      aria-label={onClick ? 'Botón' : `Vínculo, ${label}`}
                      key={label}
                      as={onClick ? 'button' : Link}
                      href={onClick ? undefined : href}
                      onClick={onClick}
                      icon={view ? <>{view}</> : undefined}
                      padding={isMobile ? '15px 20px' : '10px 20px'}
                      sx={isLogout ? profileStyle.logout : profileStyle.items}
                      borderRadius={isLogout && !isMobile ? '0 0 10px 10px' : undefined}
                      height={isLogout && isMobile ? '60px' : 'auto'}
                    >
                      {label}
                    </StyledMenuItem>
                  )
                })}
              </Box>
            </StyledMenuList>
          </>
        )}
      </Menu>
    </Box>
  )
}
