import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Test git
      </Link>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/hooks">
              Hooks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/class">
              Class
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
