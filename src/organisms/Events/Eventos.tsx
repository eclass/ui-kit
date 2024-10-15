import { FC } from 'react'
import { EventosProps } from './EventsTypes'
import { SmallBox, LargeBox } from './TypeBox'

export const Eventos: FC<EventosProps> = ({ typeEvent, itemsEvent }) => {
  // Retornamos tipo de caja evento
  if (typeEvent === 'LARGE_EVENTS') {
    return <LargeBox {...itemsEvent} />
  } else {
    return <SmallBox {...itemsEvent} />
  }
}
