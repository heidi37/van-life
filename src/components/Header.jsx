import React from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
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
            style={({ isActive }) => isActive ? activeStyle : null }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => isActive ? activeStyle : null }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => isActive ? activeStyle : null }
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
