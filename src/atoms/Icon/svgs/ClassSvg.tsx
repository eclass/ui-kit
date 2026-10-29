import { uniqueId } from '@/services'

export function ClassSvg(): JSX.Element {
  const id = uniqueId()
  return (
    <g fill="none">
      <path
        fill="currentColor"
        d="M5 5h22v14h2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v15h2V5ZM20 21v2h-8v-2H0v5a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-5H20Z"
      />
      <g fill="currentColor" clipPath={`url(#${id}-clip)`}>
        <path d="M18.108 13.385A3.959 3.959 0 0 1 16 14a3.959 3.959 0 0 1-2.108-.615 5.954 5.954 0 0 0-3.865 5.07.497.497 0 0 0 .498.545h10.95a.498.498 0 0 0 .498-.545 5.954 5.954 0 0 0-3.865-5.07ZM16 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </g>
      <defs>
        <clipPath id={`${id}-clip`}>
          <path fill="currentColor" d="M10 7h12v12H10z" />
        </clipPath>
      </defs>
    </g>
  )
}
