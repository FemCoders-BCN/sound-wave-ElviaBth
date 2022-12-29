import React from 'react'
import '../styles/Footer.css'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'

function Footer() {
  return (
    <ul className='footer'>
      <li className='about-us'>About Us</li>
      <li>Contact</li>
      <li className='twitter'><img src={twitter} alt="Twitter logo" />Twitter</li>
      <li className='facebook'><img src={facebook} alt="Facebook logo" />Facebook</li>
    </ul>
  )
}

export default Footer