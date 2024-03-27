<<<<<<< HEAD
// App.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchSalesOrders, fetchAssets, fetchLiabilities } from './api/api'; // Make sure this path matches where your API functions are defined.
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './components/NavBar';
import Home from './components/motorcycle-store/Home';
import ProductCatalog from './components/ProductPage/ProductCatalog';
import ProductPage from './components/ProductPage/ProductPage';
import SalesOrders from './components/Sales/SalesOrders';
import Accounting from './components/Accounting/Accounting';
import BalanceSheet from './components/Accounting/BalanceSheet';
import ChartOfAccounts from './components/Accounting/ChartOfAccounts';
import TransactionList from './components/Accounting/TransactionList';
import InteractiveBanner1 from './components/InteractiveBanner1';
import InteractiveBanner2 from './components/InteractiveBanner2';
import ExampleComponent from './components/ExampleComponent';

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

const App = () => {
  const [data, setData] = useState({
    salesOrders: {},
    assets: {},
    liabilities: {},
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesOrdersResponse = await fetchSalesOrders();
        const assetsResponse = await fetchAssets();
        const liabilitiesResponse = await fetchLiabilities();
        setData({
          salesOrders: salesOrdersResponse,
          assets: assetsResponse,
          liabilities: liabilitiesResponse,
        });
      } catch (fetchError) {
        setError('Failed to fetch data: ' + fetchError.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Router>
        <NavBar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<><Home /><ExampleComponent /></>} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/product-page/:id" element={<ProductPage />} />
            <Route path="/sales-orders" element={<SalesOrders />} />
            <Route path="/accounting" element={<Accounting />}>
              <Route index element={<div>Select an accounting option</div>} />
              <Route path="balance-sheet" element={<BalanceSheet assetData={data.assets} liabilityData={data.liabilities} />} />
              <Route path="chart-of-accounts" element={<ChartOfAccounts />} />
              <Route path="transaction-list" element={<TransactionList />} />
            </Route>
            <Route path="/interactive-banner-1" element={<InteractiveBanner1 />} />
            <Route path="/interactive-banner-2" element={<InteractiveBanner2 />} />
          </Routes>
        </ErrorBoundary>
        {isLoading && <div>Loading data...</div>}
        {error && <div>Error: {error}</div>}
      </Router>
    </DataContext.Provider>
  );
};

=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import DashboardPage from './components/DashboardPage/DashboardPage'; 
import Accounting from './components/Accounting/Accounting';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Automobile Store App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Home should be a valid component */}
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/accounting">Accounting</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/dashboard" element={<DashboardPage />}/> 
                <Route path="/accounting" element={<Accounting />}/> 
                {/* Add route for Home if applicable <Route path="/" element={<Home />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

>>>>>>> 4d45f02 (Add controllers and middleware directories)
export default App;
