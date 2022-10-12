import React from 'react'
import { getTeas } from '../../api/teas.js'

function Teas() {
  const teas = getTeas()

  const teasList = teas.map((tea) => (
    <li key={tea.id}>
      <h3>
        <span>{tea.name}</span>
        <span>{tea.price}</span>
      </h3>
      <p>{tea.description}</p>
    </li>
  ))

  return (
    <>
      <h3>Teas</h3>
      <ul>{teasList}</ul>
    </>
  )
}

export default Teas
