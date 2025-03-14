import React, { useState } from "react";
import "./navigation.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MeinLogo</div>

      {/* Hamburger-Menü Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigationslinks */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Über uns</a></li>
        <li><a href="/services">Leistungen</a></li>
        <li><a href="/contact">Kontakt</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
