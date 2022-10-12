import React from 'react'

function Footer() {
  return (
    <>
      <h2>Location</h2>
      <div>
        <span>1234 W. Main St.</span>
        <span>Louisville, KY 40213</span>
      </div>
      <div>
        <span>P: 502-555-5555</span>
        <span>E: hello@derbycitydrip.com</span>
      </div>
      <nav>
        <h2>Sitemap</h2>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Location</a>
          </li>
          <li>
            <a href=''>Menu</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
      <h2>Socials</h2>
      <p>
        Please join us for all the latest announcements via our social network.
      </p>
      <ul>
        <li>
          <img src='../img/svgs/facebook-circle.svg' alt='' />
        </li>
        <li>
          <img src='../img/svgs/twitter-circle.svg' alt='' />
        </li>
        <li>
          <img src='../img/svgs/linkedin-circle.svg' alt='' />
        </li>
        <li>
          <img src='../img/svgs/google-plus-circle.svg' alt='' />
        </li>
      </ul>
    </>
  )
}

export default Footer
