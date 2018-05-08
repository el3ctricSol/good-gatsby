import React from 'react'
import Link from 'gatsby-link'
// necessary for links to work

const Navbar = () => {
  return (
    <nav>
      <li><Link to="/">Zatnin</Link></li>
      <li><Link to="/about">Zabout</Link></li>
      <li><Link to="/contact">Zontact</Link></li>
    </nav>
  )
}

export default Navbar

// Line 8: 'a' tags changed to 'Link', 'href' changed to 'to'
