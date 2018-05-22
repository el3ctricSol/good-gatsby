import React from 'react'
import Link from 'gatsby-link'
// necessary for links to work
import styled from 'styled-components'

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
      margin-left; 10px;
      a {
        text-decoration: none;
        color: #ffffff;
        &:hover {
          border-bottom: 3px solid red;
        }
      }
    }
  }
`

import './navbar.css'

const Navbar = () => {
  return (

    <MainNav>
      <ul>
        <li><Link to="/">Zatnin</Link></li>
        <li><Link to="/about">'Zabout</Link></li>
        <li><Link to="/contact">'Zontact</Link></li>
        <li><Link to="/snaps">'Znaps</Link></li>
        <li><Link to="/flicks">Flick'Z</Link></li>
      </ul>
    </MainNav>

  )
}

export default Navbar

// Line 8: 'a' tags changed to 'Link', 'href' changed to 'to'
