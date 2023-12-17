import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import Footer from './Pages/Footer/Footer.js';
import { BauContext } from './Contexts/BauContext.js';


function App() {

  return (
    <>
      <BauContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BauContext.Provider>
    </>
  );
}

export default App;