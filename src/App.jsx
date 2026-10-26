import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import NuestrasTiendas from './pages/NuestrasTiendas'
import ComoComprar from './pages/ComoComprar'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/nuestras-tiendas" element={<NuestrasTiendas />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/como-comprar" element={<ComoComprar />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
