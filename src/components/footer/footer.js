import React from "react";
import "./Footer.css"; // Optional: Falls du später eine CSS-Datei hinzufügen möchtest

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 ATDI. Alle Rechte vorbehalten.</p>
      <p>
        <a href="#">Impressum</a> | <a href="#">Datenschutz</a>
      </p>
    </footer>
  );
}

export default Footer;
