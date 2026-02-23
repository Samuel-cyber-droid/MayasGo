import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-texto">
        <span className="etiqueta-coleccion">COLECCIÓN PRIMAVERA 2026</span>
        <h1>Pisa Hacia<br/>El Futuro</h1>
        <p>
          Explora nuestra colección curada de calzado urbano.
          Cada pieza cuenta una historia de innovación, artesanía
          y diseño atemporal.
        </p>
        <button className="btn-galeria">Ver Galería</button>
      </div>

      <div className="hero-imagen">
        {/* Reemplaza esta URL con la ruta real de tu imagen */}
        <img src="/ruta-a-tu-imagen-zapatilla-verde.jpg" alt="Zapatilla MayasGo" />
      </div>
    </section>
  );
}

export default Hero;