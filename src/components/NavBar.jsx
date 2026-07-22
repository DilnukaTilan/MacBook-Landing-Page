import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
          <button
            aria-label="Open navigation menu"
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src="/menu.svg" alt="" aria-hidden="true" />
          </button>
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
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label} onClick={() => setIsMenuOpen(false)}>
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
