import React from 'react';
import NavBtn from './NavBtn/NavBtn';

const Nav: React.FC = () => (
  <div className="nav-container">
    <NavBtn title="Home" />
    <NavBtn title="Create" />
  </div>
);

export default Nav;
