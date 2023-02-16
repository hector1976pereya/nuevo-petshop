import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FloatingWhatsApp from './Components/FloatingWhatsapp';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Productos from './Components/pages/Productos';
import Servicios from './Components/pages/Servicios';
import Contacto from './Components/pages/Contacto';
import Carrito from './Components/pages/Carrito';
import Perros from './Components/pages/Productos-perros';
import Gatos from './Components/pages/Productos-gatos';
import Indumentaria from './Components/pages/Indumentaria';
import Accesorios from './Components/pages/Accesorios';

function App() {
  return (<>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />   
          <Route path="/Productos-perros" element={<Perros />} />
          <Route path="/Productos-gatos" element={<Gatos />} />   
          <Route path="/Indumentaria" element={<Indumentaria />} />  
          <Route path="/Accesorios" element={<Accesorios />} />          
        </Routes>
    </Router>
    <FloatingWhatsApp />
    <Footer />
    </>
  );
}

export default App;