import * as React from 'react'

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Provides a text to the anchor */
  children?: React.ReactChild

  /** Decoration for the anchor */
  textDecoration?: string
}

/** This is a link */
export function Link({ textDecoration = 'none', children, ...props }: LinkProps): JSX.Element {
  return (
    <a {...props} style={{ textDecoration, cursor: 'pointer' }}>
      {children}
    </a>
  )
}

Link.displayName = 'Link'
