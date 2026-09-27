import React from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }


  return (
    <div>
      <header>
        <nav>
          <Link className="site-logo" to="/">
            #VanLife
          </Link>
          <NavLink
            to="/host"
            style={({ isActive }) =>  isActive ? activeStyles : null}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>  isActive ? activeStyles : null}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) =>  isActive ? activeStyles : null}
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
