import React from 'react'

export default function Total(props) {
  return (
    <div>
        <h2>Total number of excersices are {props.exe.parts[0].exercises} + {props.exe.parts[1].exercises} + {props.exe.parts[2].exercises}</h2>
    </div>
  )
}
