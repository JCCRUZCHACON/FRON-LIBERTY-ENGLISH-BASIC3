import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import HomeHouseSection from './components/HomeHouseSection';
import FatherSection from './components/FatherSection';
import MotherSection from './components/MotherSection';
import BrotherSection from './components/BrotherSection';
import GrandfatherSection from './components/GrandfatherSection';

function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white relative selection:bg-indigo-500 selection:text-white">
        
        {/* Barra de navegación modular */}
        <Navbar />

        {/* Sistema de Rutas */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/house" element={<HomeHouseSection />} />
          <Route path="/father" element={<FatherSection />} />
          <Route path="/mother" element={<MotherSection />} />
          <Route path="/brother" element={<BrotherSection />} />
          <Route path="/grandfather" element={<GrandfatherSection />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;