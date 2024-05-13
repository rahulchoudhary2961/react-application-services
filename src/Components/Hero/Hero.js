import React from 'react'
import './Hero.css';
import { Link } from 'react-scroll';
// import dark_arrow from '../../Assets/arrow-sign.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Boosting Sales and Expanding Revenue</h1>
        <h2 className='fadeInUp'>ACHIEVE YOUR GOALS</h2>
        <p className='fadeInUp'>
We assist B2B technology firms in coordinating integrated commercial operations to increase revenue, improve profit margins, and elevate long-term enterprise value.</p>
        <div class="text-white wow fadeInUp" data-wow-delay="900ms" data-wow-duration="2000ms">
          <span><Link to='contact' smooth={true} offset={-260} duration={500}><button class="tryBtn2">Tell Us About Your Growth Challenges</button></Link></span>
        </div>
      </div>
    </div>
  )
}

export default Hero