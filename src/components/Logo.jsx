import React from 'react'
import theLogo from '../assets/images/logo.png'
import '../styles/Logo.css'

function Logo() {
  return (
    <div className='logo'>
        <img src={theLogo} alt="Sound Wave webpage Logo."  />
        <span>Soundwave</span>
    </div>
  )
}

export default Logo