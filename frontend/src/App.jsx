import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // <-- Corregido el punto faltante
import ColeccionDestacada from './components/ColeccionDestacada';
import './App.css';

function App() {
  // Aquí guardaremos la información que llegue de Django
  const [datosDjango, setDatosDjango] = useState(null);

  useEffect(() => {
    // Hacemos la petición a la URL de tu API
    fetch('http://127.0.0.1:8000/')
      .then(respuesta => respuesta.json())
      .then(data => {
        setDatosDjango(data);
      })
      .catch(error => console.error("Error de conexión:", error));
  }, []);

  return (
    <div className="contenedor-principal">
      <Navbar />
      <Hero />
      <ColeccionDestacada />

      {/* Opcional: Si quieres ver que Django sigue conectado,
          puedes dejar esto temporalmente aquí abajo */}
      {datosDjango && (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
          <p>Mensaje desde el backend: {datosDjango.mensaje}</p>
        </div>
      )}
    </div>
  );
}

export default App;
