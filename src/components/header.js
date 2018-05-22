import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from './../images/logo.svg'

const HeaderWrapper = styled.div`
  { /* write regular CSS between the ticks */}
    background: greenyellow;
    margin-bottom: 1.45rem;
    padding: 20px;
  `

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: '0 auto';
  maxWidth: 960;
  ${'' /* padding: '1.45rem 1.0875rem'; */}
  `

const Header = ({ siteTitle }) => (


  <HeaderWrapper>

    <HeaderContainer

      style={{

      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'blue',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
    <img src={logo} alt="logo" />
  </HeaderWrapper>
)

export default Header
