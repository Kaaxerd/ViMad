import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Bernabeu from './pages/landmarks/Bernabeu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bernabeu" element={<Bernabeu />} />

          <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirige a Home en todo momento */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;