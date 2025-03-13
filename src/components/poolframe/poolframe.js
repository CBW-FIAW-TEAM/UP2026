import React from "react";
import "./poolframe.css"; // Optional: Falls du später eine CSS-Datei hinzufügen möchtest

function poolframe() {
  return (
    <footer className="poolframe">
      <p>&copy; 2025 ATDI. Alle Rechte vorbehalten.</p>
      <p>
        <a href="#">Impressum</a> | <a href="#">Datenschutz</a>
      </p>
    </footer>
  );
}

export default poolframe;