import { footerLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: <span>Find an Apple Store</span> or{" "}
          <span>other retailer</span> near you. Or call 000800 040 1966.
        </p>
        <a href="#" className="logo-link max-sm:hidden">
          <img src="/logo.svg" alt="Apple logo" />
        </a>
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
