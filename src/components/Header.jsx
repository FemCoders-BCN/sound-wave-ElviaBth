import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
      <Logo/>
      <Nav/>
    </div>
  )
}

export default Header