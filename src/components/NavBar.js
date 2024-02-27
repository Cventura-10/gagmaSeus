// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product-catalog">Product Catalog</NavLink>
      <NavLink to="/sales-orders">Sales Orders</NavLink>
      <NavLink to="/accounting">Accounting</NavLink>
      <NavLink to="/accounting/balance-sheet">Balance Sheet</NavLink>
      <NavLink to="/accounting/chart-of-accounts">Chart Of Accounts</NavLink>
      <NavLink to="/accounting/transaction-list">Transaction List</NavLink>
      {/* Include other navigation links as necessary */}
    </Nav>
  );
};

export default NavBar;
