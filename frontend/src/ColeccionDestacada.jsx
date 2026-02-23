import React, { useState } from 'react';
import TarjetaZapato from './TarjetaZapato';
import './ColeccionDestacada.css';

// Estos datos simulan lo que Django nos enviará en el futuro
const zapatosMock = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", // Imagen de ejemplo
    categoria: "Running",
    titulo: "Air Wave Runner",
    descripcion: "Diseñadas con amortiguación reactiva y malla transpirable para un rendimiento óptimo.",
    colores: ["#ffffff", "#000000", "#3b82f6"], // Blanco, Negro, Azul
    materiales: "Parte superior de malla, Suela de goma"
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    categoria: "Lifestyle",
    titulo: "Urban Elite Pro",
    descripcion: "Construcción de cuero premium que se encuentra con la estética urbana contemporánea.",
    colores: ["#d97706", "#1f2937", "#6b7280"], // Naranja, Gris oscuro, Gris claro
    materiales: "Cuero de grano completo, Entresuela EVA"
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    categoria: "Casual",
    titulo: "Minimal Force",
    descripcion: "Líneas limpias y elegancia discreta definen este esencial para el día a día.",
    colores: ["#ec4899", "#f3f4f6", "#4b5563"], // Rosa, Blanco, Gris
    materiales: "Lona, Goma reciclada"
  }
];

function ColeccionDestacada() {
  // Estado para saber qué filtro está activo (por defecto "Todos")
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  // Categorías para los botones
  const categorias = ['Todos', 'Running', 'Lifestyle', 'Casual'];

  return (
    <section className="coleccion-contenedor">
      {/* Encabezado y Filtros */}
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

      {/* Cuadrícula de Tarjetas */}
      <div className="coleccion-grid">
        {zapatosMock.map(zapato => (
          <TarjetaZapato
            key={zapato.id}
            imagen={zapato.imagen}
            categoria={zapato.categoria}
            titulo={zapato.titulo}
            descripcion={zapato.descripcion}
            colores={zapato.colores}
            materiales={zapato.materiales}
          />
        ))}
      </div>
    </section>
  );
}

export default ColeccionDestacada;