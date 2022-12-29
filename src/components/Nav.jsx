import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
  return (
    <ul className='nav'> 
        <li><Link to={'/secondpage'}>Discover</Link></li>
        <li>Join</li>
    </ul>
  )
}

export default Nav