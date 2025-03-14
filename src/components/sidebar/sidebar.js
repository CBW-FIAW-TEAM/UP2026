import React from "react";
import "./sidebar.css"; // Import der CSS-Datei für das Styling

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Schnelle Links */}
      <div className="quick-links">
        <h3>Schnelle Links</h3>
        <ul>
          <li><a href="/">Umfragen</a></li>
          <li><a href="/news">Neuigkeiten</a></li>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/about">Über uns</a></li>
        </ul>
      </div>

      {/* Werbung oder andere Komponenten */}
      <div className="ad-section">
        <h3>Anzeige</h3>
        <p>Hier könnte Ihre Werbung stehen.</p>
      </div>

      {/* Zusätzlicher Inhalt */}
      <div className="extra-content">
        <h3>Weitere Informationen</h3>
        <p>Hier kannst du z. B. wichtige Ankündigungen anzeigen.</p>
      </div>
    </div>
  );
}

export default Sidebar;
