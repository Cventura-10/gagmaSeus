import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

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
import ModelsPage from './components/ModelsPage/ModelsPage.js'; // Adjust the case sensitivity
import AccessoriesPage from './components/PurchasesPage/AccessoriesPage';
import ContactPage from './components/ContactPage/ContactPage';
import NotFound from './components/NotFound/NotFound';
import './styles/App.css';
import './styles.css';

function App() {
  const [isAccountingDropdownOpen, setAccountingDropdownOpen] = useState(false);

  const location = useLocation();

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

  useEffect(() => {
    setAccountingDropdownOpen(false);
  }, [location]);

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
            <li className="Accounting-Section">
              <button onClick={toggleAccountingDropdown}>
                Accounting
              </button>
              {isAccountingDropdownOpen && (
                <ul className="Accounting-List">
                  <li><Link to="/balance-sheet">Balance Sheet</Link></li>
                  <li><Link to="/income-statement">Income Statement</Link></li>
                  <li><Link to="/transaction-list">Transaction List</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/history" element={<History
              Page />} />
              <Route path="/payables" element={<PayablesPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/receipts" element={<ReceiptPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/sales-orders" element={<SalesOrders />} />
              <Route path="/suppliers" element={<SupplierPage />} />
              <Route path="/billing" element={<BillingPage />} />
              <Route path="/customers" element={<CustomerPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/balance-sheet" element={<BalanceSheet />} />
              <Route path="/income-statement" element={<IncomeStatement />} />
              <Route path="/transaction-list" element={<TransactionList />} />
              <Route path="/models" element={<ModelsPage />} />
              <Route path="/purchases/accessories" element={<AccessoriesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
          </div>
          </Router>
          );
          }
               
              export default App;
