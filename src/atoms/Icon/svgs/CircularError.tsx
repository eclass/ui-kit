export function CircularError(): JSX.Element {
  return (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle fill="#CC0000" cx="8" cy="8" r="8" />
      <g
        transform="translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) translate(3.000000, 3.000000)"
        fill="#FFFFFF"
      >
        <rect x="4" y="0" width="2" height="10" />
        <rect
          transform="translate(5.000000, 5.000000) rotate(90.000000) translate(-5.000000, -5.000000) "
          x="4"
          y="0"
          width="2"
          height="10"
        />
      </g>
    </g>
  )
}
