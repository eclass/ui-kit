import { uniqueId } from '@/services'

interface props {
  fill?: string
}

export function Loader({ fill = '#fff' }: props): JSX.Element {
  return (
    <div className="loaderAsync" data-testid="loaderAsync">
      <svg
        id={uniqueId()}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 38 20"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        width={38}
        height={20}
      >
        <style
          dangerouslySetInnerHTML={{
            __html:
              '@keyframes eXySq0EBKm12_f_o{0%,33.333333%,to{fill-opacity:.4}66.666667%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm13_f_o{0%,66.666667%,to{fill-opacity:.4}33.333333%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm14_f_o{0%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}33.333333%,66.666667%{fill-opacity:.4}to{fill-opacity:1}}',
          }}
        />
        <circle
          r={2.502}
          transform="translate(29.526 10)"
          fill={fill}
          fillOpacity={0.4}
          style={{
            animation: 'eXySq0EBKm12_f_o 600ms linear infinite normal forwards',
          }}
        />
        <circle
          r={2.502}
          transform="translate(19 10)"
          fill={fill}
          fillOpacity={0.4}
          style={{
            animation: 'eXySq0EBKm13_f_o 600ms linear infinite normal forwards',
          }}
        />
        <circle
          r={2.053}
          transform="matrix(1.21764 0 0 1.21764 8.562 10.002)"
          fill={fill}
          style={{
            animation: 'eXySq0EBKm14_f_o 600ms linear infinite normal forwards',
          }}
        />
      </svg>
    </div>
  )
}
