import React from 'react'
import Coffees from './Coffees'
import Foods from './Foods'
import Teas from './Teas'

function ProductMenu() {
  return (
    <section id='menu'>
      <Coffees />
      <Teas />
      <Foods />
    </section>
  )
}

export default ProductMenu
