import React from 'react';
import './App.css';

const menuItems = [
  {
    name: 'Cappuccino',
    description: 'Rich espresso, perfectly balanced with steamed milk.',
  },
  {
    name: 'Latte',
    description: 'Creamy, smooth latte with a strong espresso base.',
  },
  {
    name: 'Mocha',
    description: 'Espresso meets chocolate in this sweet delight.',
  },
  {
    name: 'Americano',
    description: 'Espresso with hot water, simple and strong.',
  },
  {
    name: 'Flat White',
    description: 'Espresso combined with velvety steamed milk for a smooth texture.',
  },
  {
    name: 'Macchiato',
    description: 'Espresso topped with a dollop of steamed milk foam.',
  },
  {
    name: 'Espresso',
    description: 'A rich and intense shot of espresso, perfect for a quick pick-me-up.',
  },
  {
    name: 'Affogato',
    description: 'A shot of espresso poured over a scoop of vanilla ice cream.',
  },
];

export default function CafeHomepage() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>Cozy Corner Café</h1>
        <p>Find comfort in every cup.</p>
        <nav>
          <ul className="nav-links">
            <li>
              <a 
                href="#menu" 
                onClick={() => handleScroll('menu')} 
                aria-label="Go to Menu"
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => handleScroll('about')} 
                aria-label="Learn About Us"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => handleScroll('contact')} 
                aria-label="Contact Us"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="menu" className="menu-section">
          <h2>Our Menu</h2>
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <div className="menu-item" key={index}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
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
      </main>

      <footer className="footer">
        <p>&copy; 2025 Cozy Corner Café. All rights reserved.</p>
      </footer>
    </div>
  );
}
