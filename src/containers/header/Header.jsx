import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>

          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Adress" />
            <button type="button">Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default Header