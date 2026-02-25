import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ColeccionDestacada from './components/ColeccionDestacada';
import './App.css';

function App() {
  return (
    <div className="contenedor-principal">
      <Navbar />
      <Hero />
      <ColeccionDestacada />
    </div>
  );
}

export default App;