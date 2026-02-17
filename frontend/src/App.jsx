import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Aquí guardaremos la información que llegue de Django
  const [datosDjango, setDatosDjango] = useState(null)

  useEffect(() => {
    // Hacemos la petición a la URL de tu API
    fetch('http://127.0.0.1:8000/')
      .then(respuesta => respuesta.json())
      .then(data => {
        setDatosDjango(data)
      })
      .catch(error => console.error("Error de conexión:", error))
  }, []) // Los corchetes vacíos significan que esto se ejecuta solo una vez al cargar

  return (
    <div>
      <header>
        <h1>Catálogo Retro - Zapatillas</h1>
      </header>

      <main>
        {/* Si ya llegaron los datos, los mostramos. Si no, mostramos un texto de carga */}
        {datosDjango ? (
          <div className="info-box">
            <h2>{datosDjango.titulo}</h2>
            <p>{datosDjango.mensaje}</p>
          </div>
        ) : (
          <p>Cargando información desde el servidor...</p>
        )}
      </main>
    </div>
  )
}

export default App
