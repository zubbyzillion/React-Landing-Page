import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';

// BEM - Block Element Modifier

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
    </div>
  )
}

export default Navbar