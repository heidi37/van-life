import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link className='site-logo' to="/">#VanLife</Link>
          <Link to ="/host">Host</Link>
          <Link to ="/about">About</Link>
          <Link to ="/vans">Vans</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
