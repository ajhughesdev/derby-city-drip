import React from 'react'

function Newsletter() {
  return (
    <>
      <h2>Join the DCD Coffee Club!</h2>
      <p>
        Steamed roast white saucer aroma decaffeinated. Caramelization skinny
        brewed, foam extra eu latte cream grounds to go plunger pot.
      </p>
      <form>
        <label>
          Name: <input type='name' placeholder='John Doe' name='name' />
        </label>
        <label>
          Email:{' '}
          <input type='email' placeholder='johndoe@gmail.com' name='email' />
        </label>
        <button type='submit'>Join now</button>
      </form>
    </>
  )
}

export default Newsletter
