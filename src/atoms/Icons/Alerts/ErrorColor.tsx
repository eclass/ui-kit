import { Base, BaseProps } from '../Base'

export function ErrorColor(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="53" h="45" viewBox="0 0 53 45">
      <svg fill="none">
        <path
          d="M22.142 44.1878C34.0945 44.1878 43.784 34.4984 43.784 22.5458C43.784 10.5933 34.0945 0.903809 22.142 0.903809C10.1895 0.903809 0.5 10.5933 0.5 22.5458C0.5 34.4984 10.1895 44.1878 22.142 44.1878Z"
          fill="#F9DFDF"
        />
        <path
          d="M19 24.1409C19.8284 24.1409 20.5 23.4693 20.5 22.6409C20.5 21.8124 19.8284 21.1409 19 21.1409C18.1716 21.1409 17.5 21.8124 17.5 22.6409C17.5 23.4693 18.1716 24.1409 19 24.1409Z"
          fill="#CC0000"
        />
        <path
          d="M24 24.1409C24.8284 24.1409 25.5 23.4693 25.5 22.6409C25.5 21.8124 24.8284 21.1409 24 21.1409C23.1716 21.1409 22.5 21.8124 22.5 22.6409C22.5 23.4693 23.1716 24.1409 24 24.1409Z"
          fill="#CC0000"
        />
        <path
          d="M29 24.1409C29.8284 24.1409 30.5 23.4693 30.5 22.6409C30.5 21.8124 29.8284 21.1409 29 21.1409C28.1716 21.1409 27.5 21.8124 27.5 22.6409C27.5 23.4693 28.1716 24.1409 29 24.1409Z"
          fill="#CC0000"
        />
        <path
          d="M44.178 13.9239C41.157 8.67487 35.491 5.14087 29 5.14087C19.335 5.14087 11.5 12.9759 11.5 22.6409C11.5 32.3059 19.335 40.1409 29 40.1409C35.108 40.1409 40.484 37.0119 43.615 32.2699"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.0862 15.7271C37.0625 14.7508 38.6455 14.7508 39.6218 15.7271L43.7105 19.8158L47.7992 15.7271C48.7755 14.7508 50.3585 14.7508 51.3348 15.7271C52.3111 16.7034 52.3111 18.2863 51.3348 19.2626L47.246 23.3514L51.3348 27.4401C52.3111 28.4164 52.3111 29.9993 51.3348 30.9756C50.3585 31.952 48.7755 31.952 47.7992 30.9756L43.7105 26.8869L39.6218 30.9756C38.6455 31.952 37.0625 31.952 36.0862 30.9756C35.1099 29.9993 35.1099 28.4164 36.0862 27.4401L40.175 23.3514L36.0862 19.2626C35.1099 18.2863 35.1099 16.7034 36.0862 15.7271Z"
          fill="#CC0000"
        />
      </svg>
    </Base>
  )
}

ErrorColor.displayName = 'ErrorColor'
