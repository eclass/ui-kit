import { Base, BaseProps } from './Base'

export function Close(props: BaseProps): JSX.Element {
  return (
    <Base {...props} title="close">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M10.7071 1.29303C10.5196 1.10556 10.2652 1.00024 10.0001 1.00024C9.73492 1.00024 9.48061 1.10556 9.29308 1.29303L6.00008 4.58603L2.70708 1.29303C2.51848 1.11087 2.26588 1.01008 2.00368 1.01236C1.74148 1.01464 1.49067 1.1198 1.30526 1.30521C1.11985 1.49062 1.01469 1.74143 1.01241 2.00363C1.01013 2.26583 1.11092 2.51843 1.29308 2.70703L4.58608 6.00003L1.29308 9.29303C1.19757 9.38528 1.12139 9.49562 1.06898 9.61763C1.01657 9.73963 0.988985 9.87085 0.987831 10.0036C0.986677 10.1364 1.01198 10.2681 1.06226 10.391C1.11254 10.5139 1.18679 10.6255 1.28069 10.7194C1.37458 10.8133 1.48623 10.8876 1.60913 10.9379C1.73202 10.9881 1.8637 11.0134 1.99648 11.0123C2.12926 11.0111 2.26048 10.9835 2.38249 10.9311C2.50449 10.8787 2.61483 10.8025 2.70708 10.707L6.00008 7.41403L9.29308 10.707C9.48168 10.8892 9.73429 10.99 9.99648 10.9877C10.2587 10.9854 10.5095 10.8803 10.6949 10.6948C10.8803 10.5094 10.9855 10.2586 10.9878 9.99643C10.99 9.73423 10.8892 9.48163 10.7071 9.29303L7.41408 6.00003L10.7071 2.70703C10.8946 2.5195 10.9999 2.26519 10.9999 2.00003C10.9999 1.73487 10.8946 1.48056 10.7071 1.29303Z"
          fill="#60798E"
        />
      </svg>
    </Base>
  )
}

Close.displayName = 'Close'
