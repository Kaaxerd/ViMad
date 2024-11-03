// CSS
import './App.css';

// Paquetes
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Header y Footer
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas clave
import Home from './pages/Home';
import About from './pages/About';

// Puntos de interés
import Bernabeu from './pages/landmarks/Bernabeu';
import Error from './pages/Error';

// App
function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />

        <main style={{ flex: '1' }}>
          <Routes>
            {/* Páginas clave */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />

            {/* Puntos de interés */}
            <Route path="/bernabeu" element={<Bernabeu />} />

            {/* Siempre redirecciona a Error cuando accede a una página no existente */}
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;