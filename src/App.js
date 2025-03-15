import React from 'react';
import './App.css';

export default function CafeHomepage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Cozy Corner Café</h1>
        <p>Find comfort in every cup.</p>
        <nav>
          <ul className="nav-links">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="menu" className="menu-section">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Cappuccino</h3>
            <p>Rich espresso, perfectly balanced with steamed milk.</p>
          </div>
          <div className="menu-item">
            <h3>Latte</h3>
            <p>Creamy, smooth latte with a strong espresso base.</p>
          </div>
          <div className="menu-item">
            <h3>Mocha</h3>
            <p>Espresso meets chocolate in this sweet delight.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Cozy Corner Café is your go-to place for a cozy ambiance and delicious coffee. Whether you're working on a project or catching up with friends, our café provides the perfect atmosphere.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@cozycornercafe.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Coffee St, Java City</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Cozy Corner Café. All rights reserved.</p>
      </footer>
    </div>
  );
}
