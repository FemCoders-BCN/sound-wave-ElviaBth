import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
  return (
    <ul className='nav'> 
        <li><Link to={'/discover'}>Discover</Link></li>
        <li><Link to={'/join'}>Join</Link></li>
    </ul>
  )
}

export default Nav