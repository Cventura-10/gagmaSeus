import React from 'react';
import { Link } from 'react-router-dom';

const BottomMenus = () => {
  return (
    <div className="bottom-menus">
      <Link to="/dashboard">Dashboard Menu</Link>
      <Link to="/accounting">Accounting Menu</Link>
    </div>
  );
};

export default BottomMenus;
