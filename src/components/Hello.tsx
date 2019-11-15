import * as React from 'react'
import './style.css'
import src from './头像.jpg'

export const Hello = (props: { compiler: string; framework: string }) => (
  <h1 className="hello">
    Hello from {props.compiler} and {props.framework}!\
    <img src={src}/>
  </h1>
)
