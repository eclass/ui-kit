import * as React from 'react'

interface HelloWorldProps {
  name: string
}

export function HelloWorld({ name }: HelloWorldProps): JSX.Element {
  return <h1>Hello {name}</h1>
}

HelloWorld.displayName = 'HelloWorld'
