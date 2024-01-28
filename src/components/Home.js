import React from 'react';
import './styles.css';
import accountingImage from './images/accounting_image.jpg';

const Home = () => {
  const announcements = ['Special Sale on Motorcycles'];
  const [currentAnnouncement, setCurrentAnnouncement] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <h1 className="app-title">Welcome to the GAGMA-SEUS Accounting and Sale System</h1>
      </header>

      <nav className="navigation">
        <ul className="navbar">
          <li>
            <a className="navbar-link" href="#">Home</a>
          </li>
          <li>
            <a className="navbar-link" href="#">Dashboard</a>
          </li>
          <li>
            <a className="navbar-link" href="#">Accounting</a>
          </li>
        </ul>
      </nav>

      <div className="announcement-widget">
        <h2 className="announcement">{announcements[currentAnnouncement]}</h2>
      </div>

      <div className="card-group">
        <div className="card">
          <h2 className="card-title">Motorcycle</h2>
          <ul className="menu-items">
            <li>MotosDo</li>
            <li>Yamaha</li>
            <li>Tauro Turbo</li>
            <li>Santana Motors</li>
            <li>Nipponnia</li>
            <li>Bajaj</li>
            <li>Suzuki</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">Catalog</h2>
          <ul className="menu-items">
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="card-title">Sales</h2>
          <ul className="menu-items">
            <li>Financial</li>
            <li>Cash</li>
          </ul>
        </div>
      </div>

      <div className="sale-widget-container">
        <div className="sale-widget">
          {/* Add your sale widget content here */}
          <h2>Motorcycle Sales Widget</h2>
          <p>This is the content of the motorcycle sales widget.</p>
        </div>
      </div>

      <div className="accounting-image-container">
        <img className="accounting-image" src={accountingImage} alt="Accounting" />
      </div>

      <footer className="footer">
        <nav className="footer-menu">
          <ul className="footer-menu-links">
            <li><a className="footer-link" href="#">About</a></li>
            <li><a className="footer-link" href="#">Contact</a></li>
            <li><a className="footer-link" href="#">Terms of Service</a></li>
            <li><a className="footer-link" href="#">Privacy Policy</a></li>
          </ul>
        </nav>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
