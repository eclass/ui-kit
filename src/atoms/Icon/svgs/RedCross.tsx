export function RedCross(): JSX.Element {
  return (
    <g fill="none">
      <g>
        <circle cx="6" cy="6" r="6" fill="#C00" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M3.88 2.464L2.464 3.88 4.586 6l-2.12 2.121 1.413 1.415 2.122-2.122 2.12 2.122L9.537 8.12 7.415 6l2.121-2.121-1.414-1.415L6 4.586 3.879 2.464z"
          clipRule="evenodd"
        />
      </g>
    </g>
  )
}
