import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo2 from '../../Assets/my_assets/Screenshot_20240505_014331_WhatsApp~2.jpg'
import { Link } from 'react-scroll';
import menu_icon from '../../Assets/my_assets/menu-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Dropdown from '../Dropdown/Dropdown'

export const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo2} alt="logo" className='logo'></img>
      <ul className={mobileMenu ? '' : "hide-mobile-menu"}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={10} duration={500}>Services</Link></li>
        <li><Dropdown /></li>
        <li><Link to='digital' smooth={true} offset={30}>Digital Commerce</Link></li>
        <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button class="tryBtn"><span className='text-white'>FREE CONSULTATION</span></button></Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button class="contactusBtn"><span className='contact_us_text'>Contact Us</span></button></Link></li>
        <li className="linkedin-icon-container">
          <a href='https://www.linkedin.com/in/rahul-choudhary-8a5321288/'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="linkedin-icon" />
          </a>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu} />
    </nav>
  )
}
