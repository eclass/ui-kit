import * as React from 'react'
import { CoursesIcon } from '../Icons/CoursesIcon'
import { AcademicHistorialIcon } from '../Icons/AcademicHistorialIcon'
import { ProfileIcon } from '../Icons/ProfileIcon'
import { CalendarIcon } from '../Icons/CalendarIcon'

export type ProfileMenuItemType = 'courses' | 'calendar' | 'academic-history' | 'profile' | 'logout'

export const getMenuItemIcon = (type?: ProfileMenuItemType): React.ReactNode => {
  switch (type) {
    case 'courses':
      return <CoursesIcon />
    case 'calendar':
      return <CalendarIcon />
    case 'academic-history':
      return <AcademicHistorialIcon />
    case 'profile':
      return <ProfileIcon />
    case 'logout':
      return null
    default:
      return null
  }
}
