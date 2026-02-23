import React from 'react';
import './TarjetaZapato.css';

function TarjetaZapato({ imagen, categoria, titulo, descripcion, colores, materiales }) {
  return (
    <div className="tarjeta-zapato">
      {/* Contenedor de la imagen y la etiqueta */}
      <div className="tarjeta-imagen-contenedor">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <span className="tarjeta-categoria-badge">{categoria}</span>
      </div>

      {/* Contenedor de la información */}
      <div className="tarjeta-info">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>

        {/* Sección de colores dinámicos */}
        <div className="tarjeta-colores">
          <span className="colores-texto">Disponible en:</span>
          <div className="colores-lista">
            {colores.map((color, index) => (
              <span
                key={index}
                className="color-circulo"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </div>

        <p className="tarjeta-materiales">{materiales}</p>
      </div>
    </div>
  );
}

export default TarjetaZapato;