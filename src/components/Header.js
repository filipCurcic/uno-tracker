import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header ">
      <div className="container center">
        <div className="logo">
          <img src={logo} alt="uno logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
