import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MayasGo</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#hombre">Hombre</a></li>
        <li><a href="#mujer">Mujer</a></li>
        <li><a href="#colecciones">Colecciones</a></li>
      </ul>
      <div className="navbar-search">
        {/* Aquí puedes poner un icono SVG de lupa */}
        <span>🔍</span>
      </div>
    </nav>
  );
}

export default Navbar;