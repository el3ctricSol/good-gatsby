import React from 'react'
import Link from 'gatsby-link'
// necessary for links to work

import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">ZATnin</Link>
      </li>
      <li>
        <Link to="/about">'ZAbout</Link>
      </li>
      <li>
        <Link to="/contact">'Zontact</Link>
      </li>
      <li>
        <Link to="/snaps">'Znaps</Link>
      </li>
      <li>
        <Link to="/flicks">Flick'Z</Link>
      </li>
    </nav>
  )
}

export default Navbar

// Line 8: 'a' tags changed to 'Link', 'href' changed to 'to'
