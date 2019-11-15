import * as React from 'react'
import './style.css'

export const Hello = (props: { compiler: string; framework: string }) => (
  <h1 className="hello">
    Hello from {props.compiler} and {props.framework}!
  </h1>
)
