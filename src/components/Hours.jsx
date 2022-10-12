import React from 'react'

function Hours() {
  return (
    <>
      <h2>Hours</h2>
      <p>
        These are our current hours, unforeseen circumstances may cause these to
        change.
      </p>
      <table class='hours'>
        <tr>
          <td class='days'>sun:</td>
          <td class='times'>closed</td>
        </tr>
        <tr>
          <td class='days'>mon:</td>
          <td class='times'>6am - 10pm</td>
        </tr>
        <tr id='menu-link'>
          <td class='days'>tue:</td>
          <td class='times'>6am - 10pm</td>
        </tr>
        <tr>
          <td class='days'>wed:</td>
          <td class='times'>6am - 10pm</td>
        </tr>
        <tr>
          <td class='days'>thu:</td>
          <td class='times'>6am - 10pm</td>
        </tr>
        <tr>
          <td class='days'>fri:</td>
          <td class='times'>6am - 12pm</td>
        </tr>
        <tr>
          <td class='days'>sat:</td>
          <td class='times'>6am - 12pm</td>
        </tr>
      </table>
    </>
  )
}

export default Hours
