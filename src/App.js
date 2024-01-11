// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Component imports
import Home from './components/Home';
import MyComponent from './components/MyComponent';
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
import SomeComponent from './components/SomeComponent/SomeComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              {/* More navigation items... */}
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-component" component={MyComponent} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/payables" component={PayablesPage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/receipts" component={ReceiptPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route path="/sales-orders" component={SalesOrders} />
          <Route path="/supplier" component={SupplierPage} />
          <Route path="/billing" component={BillingPage} />
          <Route path="/customer" component={CustomerPage} />
          <Route path="/security" component={SecurityPage} />
          <Route path="/some-component" component={SomeComponent} />
          {/* Define more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
