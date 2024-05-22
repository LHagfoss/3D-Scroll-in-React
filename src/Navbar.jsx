import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LHagfoss</div>
      <div className="links">
        <a href="./App.jsx" className='active'>Home</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </div>

      <div className="message">
        <button>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
