import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomMenus.css'; // Ensure you create this CSS file

const BottomMenus = () => {
  return (
    <div className="bottom-menus">
      <NavLink to="/dashboard" activeClassName="active-menu">Dashboard</NavLink>
      <NavLink to="/accounting" activeClassName="active-menu">Accounting</NavLink>
    </div>
  );
};

export default BottomMenus;
