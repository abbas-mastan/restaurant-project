import './Navbar.css';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

const Navbar = () => {
  const menus = [
    {
      title: 'Home',
      link: '#home',
    },
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Menu',
      link: '#menu',
    },
    {
      title: 'Awards',
      link: '#awards',
    },
    {
      title: 'Contact',
      link: '#contact',
    }
  ];
  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        {menus.map((menu) => (
          <li key={menu.title} className="p__opensans"><a href={menu.link}>{menu.title}</a></li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Login In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              {menus.map((menu) => (
                <li key={menu.title} className="p__opensans"><a href={menu.link}>{menu.title}</a></li>
              ))}</ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
