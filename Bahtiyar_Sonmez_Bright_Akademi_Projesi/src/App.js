import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OgretmenlerProvider } from './Context/OgretmenlerContext';
import Header from './Pages/Header/Header';
import HomePage from './Component/HomePage.js';
import Contact from './Component/Contact.js';
import About from './Pages/About/About.js';
import Footer from './Pages/Footer/Footer.js';
import OgretmenlerListesi from './Pages/OgretmenlerListesi.js';
import OgretmenDetay from './Pages/OgretmenDetay.js';

function App() {
  return (
    <>
      <OgretmenlerProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trainings" element={<OgretmenlerListesi />} />
            <Route path="/ogretmen/:id" element={<OgretmenDetay />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </OgretmenlerProvider>
    </>
  );
}

export default App;
