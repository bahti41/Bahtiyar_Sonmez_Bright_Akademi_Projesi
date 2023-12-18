import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import Education from './Pages/Instructional/Instructional.js';
import Contact from './Pages/Contact/Contact.js';
import Instructional from './Pages/Instructional/Instructional.js';
import Training from './Pages/Training/Training.js';
import About from './Pages/About/About.js';
import Footer from './Components/Footer.js';
import { BauContext } from './Contexts/BauContext.js';


function App() {

  return (
    <>
      <BauContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ınstructional" element={<Instructional />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BauContext.Provider>
    </>
  );
}

export default App;