import React from 'react'

export default function Content(props) {
  return (
    <div>
        <h2>{props.cont.parts[0].name}  {props.cont.parts[0].exercises}</h2>
        <h2>{props.cont.parts[1].name}  {props.cont.parts[1].exercises}</h2>
        <h2>{props.cont.parts[2].name}  {props.cont.parts[2].exercises}</h2>
    </div>
  )
}
