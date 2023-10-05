import { Base, BaseProps } from './Base'

export function ArrowRight(props: BaseProps): JSX.Element {
  return (
    <Base {...props}>
      <g clipPath="url(#clip0)">
        <mask
          id="mask0"
          style={{ maskType: 'alpha' }}
          width="16"
          height="16"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M16 16H32V32H16z" transform="rotate(180 16 16)" />
        </mask>
        <g mask="url(#mask0)">
          <path fill="currentColor" d="M6.074 14L12 8 6.074 2 4 4.1 7.852 8 4 11.9 6.074 14z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </Base>
  )
}

ArrowRight.displayName = 'ArrowRight'
