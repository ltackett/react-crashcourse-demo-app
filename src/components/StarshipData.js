import React from 'react'

export const StarshipData = (props) => {
  return (
    <dl>
      <dt>manufacturer:</dt>
      <dd>{props.manufacturer}</dd>

      <dt>cost:</dt>
      <dd>{props.cost_in_credits}</dd>
    </dl>
  )
}