import React from 'react'
import '../styles/Footer.css'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'

function Footer() {
  return (
    <ul className='footer'>
      <li className='about-us contact'>About Us</li>
      <li className='contact'>Contact</li>
      <li className='twitter social-media'><img src={twitter} alt="Twitter logo" />Twitter</li>
      <li className='facebook social-media'><img src={facebook} alt="Facebook logo" />Facebook</li>
    </ul>
  )
}

export default Footer