import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import girl from '../assets/images/landing-page-girl.png'
import '../styles/Main.css'


function Main() {
  return (
    <div className='main-container'>
        <picture>
          <img src={girl} alt="Black girl with afrohair" />
        </picture>
        <section>
          <h3>Feel The Music</h3>
          <p>Stream over 20 thousand songs with one click</p>
          <Button variant="primary" className='join-btn'><Link to={'/join'}>Join Now</Link></Button>{' '}
          <div className='background-balls'>
            <div class="ball1"></div>
            <div class="ball2"></div>
            <div class="ball3"></div>
          </div>
        </section>
    </div>
  )
}

export default Main