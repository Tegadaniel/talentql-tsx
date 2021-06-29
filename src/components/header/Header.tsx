import React from 'react'
import './Header.css'

function Header() {
    return (
       <header>
           <div id = "header" className="header">
    <div className="container">
      <span className="logo"><a href="#header">Shapes</a></span>
      <nav className="navbar">
      <ul className="menu">
          <li><a id="menu-icon" href="#header">Logout</a></li>
        </ul>
        </nav>

      <nav className="navbar">
        <ul className="menu">
          <li><a href="#header">Logout</a></li>
        </ul>
      </nav>
        
    </div>
  </div>
       </header>
    )
}

export default Header
