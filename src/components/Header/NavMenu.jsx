import { useState } from 'react'

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <img src='src/img/svgs/hamburger.svg' alt='' onClick={toggleMenu} />
      {isOpen && (
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#location'>Location</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      )}
    </>
  )
}

export default NavMenu
