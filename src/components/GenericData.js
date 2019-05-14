import React from 'react'

export const GenericData = (props) => {
  console.log(props)
  return (
    <dl>
      <dt>name:</dt>
      <dd>{props.name || props.title}</dd>
    </dl>
  )
}