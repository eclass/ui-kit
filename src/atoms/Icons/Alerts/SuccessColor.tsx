import { Base, BaseProps } from '../Base'

export function SuccessColor(props: BaseProps): JSX.Element {
  return (
    <Base {...props} w="57" h="45" viewBox="0 0 57 45">
      <svg fill="none">
        <path
          d="M21.642 44.0469C33.5945 44.0469 43.284 34.3575 43.284 22.4049C43.284 10.4524 33.5945 0.762939 21.642 0.762939C9.68945 0.762939 0 10.4524 0 22.4049C0 34.3575 9.68945 44.0469 21.642 44.0469Z"
          fill="#E9F6EC"
        />
        <path
          d="M43.678 13.783C40.657 8.534 34.991 5 28.5 5C18.835 5 11 12.835 11 22.5C11 32.165 18.835 40 28.5 40C34.608 40 39.984 36.871 43.115 32.129"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.0248 12.7762C57.0011 13.7525 57.0011 15.3354 56.0248 16.3117L44.3118 28.0247C43.8429 28.4936 43.207 28.7569 42.544 28.7569C41.881 28.7569 41.2451 28.4936 40.7762 28.0247L34.2322 21.4807C33.2559 20.5044 33.2559 18.9215 34.2322 17.9452C35.2085 16.9689 36.7915 16.9689 37.7678 17.9452L42.544 22.7214L52.4892 12.7762C53.4655 11.7999 55.0485 11.7999 56.0248 12.7762Z"
          fill="#28A745"
        />
        <path
          d="M18.5 24C19.3284 24 20 23.3284 20 22.5C20 21.6716 19.3284 21 18.5 21C17.6716 21 17 21.6716 17 22.5C17 23.3284 17.6716 24 18.5 24Z"
          fill="#28A745"
        />
        <path
          d="M23.5 24C24.3284 24 25 23.3284 25 22.5C25 21.6716 24.3284 21 23.5 21C22.6716 21 22 21.6716 22 22.5C22 23.3284 22.6716 24 23.5 24Z"
          fill="#28A745"
        />
        <path
          d="M28.5 24C29.3284 24 30 23.3284 30 22.5C30 21.6716 29.3284 21 28.5 21C27.6716 21 27 21.6716 27 22.5C27 23.3284 27.6716 24 28.5 24Z"
          fill="#28A745"
        />
      </svg>
    </Base>
  )
}

SuccessColor.displayName = 'SuccessColor'
