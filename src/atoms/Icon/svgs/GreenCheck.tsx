export function GreenCheck(): JSX.Element {
  return (
    <g fill="none">
      <g>
        <circle cx="6" cy="6" r="6" fill="#28A745" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M3.414 5.535L2 6.949l1.414 1.414 1.414 1.415 4.95-4.95-1.414-1.414-3.536 3.535-1.414-1.414z"
          clipRule="evenodd"
        />
      </g>
    </g>
  )
}
