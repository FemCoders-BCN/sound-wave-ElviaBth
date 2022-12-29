import React from 'react'
import '../styles/Footer.css'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'

function Footer() {
  return (
    <ul className='footer'>
      <li className='about-us li-alineation1'>About Us</li>
      <li className='li-alineation1'>Contact</li>
      <li className='twitter li-alineation2'><img src={twitter} alt="Twitter logo" />Twitter</li>
      <li className='facebook li-alineation2'><img src={facebook} alt="Facebook logo" />Facebook</li>
    </ul>
  )
}

export default Footer