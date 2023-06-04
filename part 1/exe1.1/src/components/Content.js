import React from 'react'

export default function Content(props) {
  return (
    <div>
        <h2>{props.part[0]}{props.excersice[0]}</h2>
        <h2>{props.part[1]}{props.excersice[1]}</h2>
        <h2>{props.part[2]}{props.excersice[2]}</h2>
    </div>
  )
}
