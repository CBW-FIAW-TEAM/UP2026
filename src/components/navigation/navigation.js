import React from "react";
import "./navigation.css"; // Optional: Falls du später eine CSS-Datei hinzufügen möchtest

function navigation() {
  return (
    <footer className="navigation">
      <p>&copy; 2025 das ist was neues ATDI. Alle Rechte vorbehalten.</p>
      <p>
        <a href="#">Impressum</a> | <a href="#">Datenschutz</a>
      </p>
    </footer>
  );
}

export default navigation;