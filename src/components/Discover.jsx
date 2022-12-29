import React from 'react'
import albums from '../assets/images/albums.svg'
import microphone from '../assets/images/microphone.svg'
import more from '../assets/images/more.svg'
import covers from '../assets/images/covers.jpg'
import '../styles/Discover.css'

function Discover() {
  return (
    <div className='discover'>
        <h2>Discover new music</h2>
        <figure>
            <div><img src={microphone} alt="Microphone icon" /><span>Charts</span></div>
            <div><img src={albums} alt="Albums icon" /><span>Albums</span></div>
            <div><img src={more} alt="More information icon" /><span>More</span></div>   
        </figure>
        <p>By joining you can benefit by listening to the latest albums released.</p>
        <picture>
            <img src={covers} alt="covers image" />
        </picture>
    </div>
  )
}

export default Discover