import React from 'react'
import { getFoods } from '../../api/foods.js'

function Foods() {
  const foods = getFoods()

  const foodsList = foods.map((food) => (
    <li key={food.id}>
      <h3>
        <span>{food.name}</span>
        <span>{food.price}</span>
      </h3>
      <p>{food.description}</p>
    </li>
  ))

  return (
    <>
      <h3>Foods</h3>
      <ul>{foodsList}</ul>
    </>
  )
}

export default Foods
