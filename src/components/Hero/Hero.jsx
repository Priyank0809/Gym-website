import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import hero_image from '../../assests/hero_image.png'
import hero_image_back from '../../assests/hero_image_back.png'
import Heart from '../../assests/heart.png'
import Calories from '../../assests/calories.png'
const Hero = () => {
  return (
    <div className='hero'>
    <div className='blur hero-blur '></div>
      <div className='left-h'>
        <Header />
        {/* the best ad */}
        <div className='the-best-ad'>
          <div></div>
          <span>The best fitness club in the Town</span>
        </div>
        {/* hero heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>
              Ideal Body
            </span>
          </div>
          <div >
            <span>
              In Here We will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>+140 </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>

        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'> Get Started</button>
          <button className='btn'> Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now </button>
        <div className='heart-rate'>
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span> 116 BPM</span>
        </div>
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />
        {/* calories */}
        <div className='calories'>
          <img src={Calories} alt="alt"/>
          <div>
            <span>Calories Burned</span>
            <span>220 KCAL</span>
          </div>

        </div>
      </div>
    </div>


  )
}

export default Hero