import React from 'react'
import { getCoffees } from '../../api/coffee.js'

function Coffees() {
  const coffees = getCoffees()

  const coffeesList = coffees.map((coffee) => (
    <li key={coffee.id}>
      <h3>
        <span>{coffee.name}</span>
        <span>{coffee.price}</span>
      </h3>
      <p>{coffee.description}</p>
    </li>
  ))

  return (
    <>
      <h3>Coffees</h3>
      <ul>{coffeesList}</ul>
    </>
  )
}

export default Coffees
