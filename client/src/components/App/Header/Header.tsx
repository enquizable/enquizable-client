import React from 'react';
import Login from './Login/Login';
import Nav from './Nav/Nav';

const Header: React.FC = () => (
  <div className="header-comp">
    <div className="header-comp-title">
      Enquizable
    </div>
    <div className="header-comp-option-container">
      <Nav />
    </div>
    <div className="header-comp-login">
      <Login />
    </div>
  </div>
);

export default Header;
