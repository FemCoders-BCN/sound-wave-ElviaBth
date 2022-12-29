import React from 'react'
import Button from 'react-bootstrap/Button';
import '../styles/Main.css'


function Main() {
  return (
    <div className='main-container'>
        <h3>Feel The Music</h3>
        <p>Stream over 20 thousand songs with one click</p>
        <Button variant="primary" className='join-btn'>Join Now</Button>{' '}
        <div className='background-balls'>
          <div class="ball1"></div>
          <div class="ball2"></div>
          <div class="ball3"></div>
      </div>
    </div>
  )
}

export default Main