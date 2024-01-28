import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DashboardPage from './components/DashboardPage/DashboardPage';
import HistoryPage from './components/HistoryPage/HistoryPage';
import PayablesPage from './components/PayablesPage/PayablesPage';
import ProductPage from './components/ProductPage/ProductPage';
import ReceiptPage from './components/ReceiptPage/ReceiptPage';
import ReportsPage from './components/ReportsPage/ReportsPage';
import SalesOrders from './components/Sales/SalesOrders';
import SupplierPage from './components/SupplierPage/SupplierPage';
import BillingPage from './components/Billing/BillingPage';
import CustomerPage from './components/Customer/CustomerPage';
import SecurityPage from './components/SecurityPage/SecurityPage';
import BalanceSheet from './components/Accounting/BalanceSheet';
import IncomeStatement from './components/Accounting/IncomeStatement';
import TransactionList from './components/Accounting/TransactionList';
import ModelsPage from './components/ModelsPage/ModelsPage';
import AccessoriesPage from './components/AccessoriesPage/AccessoriesPage';
import ContactPage from './components/ContactPage/ContactPage';
import NotFound from './components/NotFound/NotFound';
import AccountingDropdown from './components/AccountingDropdown/AccountingDropdown'; // Replace with the correct file path

function App() {
  const [isAccountingDropdownOpen, setAccountingDropdownOpen] = useState(false);

  const toggleAccountingDropdown = () => {
    setAccountingDropdownOpen(!isAccountingDropdownOpen);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!event.target.closest('.Accounting-Section')) {
        setAccountingDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the GAGMA-SEUS Accounting and Sale System</h1>
        </header>

        <nav className="App-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <AccountingDropdown
              isOpen={isAccountingDropdownOpen}
              toggleDropdown={toggleAccountingDropdown}
            />
          </ul>
        </nav>

        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/payables" element={<PayablesPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/receipts" element={<ReceiptPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/sales-orders" element={<SalesOrders />} />
            <Route path="/supplier" element={<SupplierPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/balance-sheet" element={<BalanceSheet />} />
            <Route path="/income-statement" element={<IncomeStatement />} />
            <Route path="/transaction-list" element={<TransactionList />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
