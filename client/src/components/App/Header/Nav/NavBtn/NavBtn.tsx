import React from 'react';

type Props = {
  title: string;
}
const NavBtn: React.FC<Props> = ({ title }) => (
  <div className="nav-btn">
    <a>
      { title }
    </a>
  </div>
);

export default NavBtn;
