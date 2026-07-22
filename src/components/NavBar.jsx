import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="global-nav">
        <div className="nav-container">
          <a href="#" className="logo-link">
            <img src="/logo.svg" alt="Apple logo" />
          </a>

          <ul className="nav-list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="actions">
            <button aria-label="Search">
              <img src="/search.svg" alt="Search" />
            </button>
            <button aria-label="Cart">
              <img src="/cart.svg" alt="Cart" />
            </button>
            <button
              aria-label="Open navigation menu"
              className="menu-btn"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src="/menu.svg" alt="Menu" />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          aria-label="Close navigation menu"
          className="menu-close"
          type="button"
          onClick={() => setIsMenuOpen(false)}
        >
          <span />
          <span />
        </button>

        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setIsMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
