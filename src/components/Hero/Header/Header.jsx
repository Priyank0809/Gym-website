import React from 'react'
import './Header.css';
import Logo from '../../../assests/logo.png'
const Header = () => {
  return (
    <div className='header'>
    <img src = {Logo} alt="alt1" className='logo' />
    <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonals</li>
    </ul>
    </div>
  )
}

export default Header