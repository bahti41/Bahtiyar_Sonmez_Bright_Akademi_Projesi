import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import About from './Pages/About/About.js';
import Footer from './Components/Footer.js';
import { BauContext } from './Contexts/BauContext.js';
import Trainings from './Pages/Trainings/Trainings.js';


function App() {

  return (
    <>
      <BauContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainings" element={<Trainings />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BauContext.Provider>
    </>
  );
}

export default App;