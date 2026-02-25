import React, { useState, useEffect } from 'react';
import TarjetaZapato from './TarjetaZapato';
import './ColeccionDestacada.css';

function ColeccionDestacada() {
  // 1. Ahora tenemos un estado para guardar los zapatos que lleguen de Django
  const [zapatos, setZapatos] = useState([]);
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const categorias = ['Todos', 'Running', 'Lifestyle', 'Casual'];

  // 2. Usamos useEffect para ir a buscar los datos a Django al cargar la página
  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(respuesta => respuesta.json())
      .then(data => {
        setZapatos(data); // Guardamos la info real en nuestro estado
      })
      .catch(error => console.error("Error conectando con Django:", error));
  }, []);

  // 3. El filtro ahora trabaja sobre la variable 'zapatos' (la que viene de Django)
  const zapatosFiltrados = zapatos.filter(zapato => {
    if (filtroActivo === 'Todos') return true;
    return zapato.categoria === filtroActivo;
  });

  return (
    <section className="coleccion-contenedor">
      <div className="coleccion-header">
        <div className="coleccion-titulos">
          <h2>Colección Destacada</h2>
          <p>Descubre nuestros últimos diseños</p>
        </div>
        
        <div className="coleccion-filtros">
          {categorias.map(categoria => (
            <button 
              key={categoria}
              className={`btn-filtro ${filtroActivo === categoria ? 'activo' : ''}`}
              onClick={() => setFiltroActivo(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      <div className="coleccion-grid">
        {zapatosFiltrados.map(zapato => {
          // TRUCO: Convertimos el texto "color1,color2" de Django a una lista para React
          // Y nos aseguramos de que empiece con '#' para que el CSS funcione
          const coloresArray = zapato.colores 
            ? zapato.colores.split(',').map(c => c.trim().startsWith('#') ? c.trim() : `#${c.trim()}`)
            : [];

          return (
            <TarjetaZapato 
              key={zapato.id}
              imagen={zapato.imagen_url} // <- Mapeamos al nombre correcto de Django
              categoria={zapato.categoria}
              titulo={zapato.titulo}
              descripcion={zapato.descripcion}
              colores={coloresArray}     // <- Pasamos nuestra lista convertida
              materiales={zapato.materiales}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ColeccionDestacada;