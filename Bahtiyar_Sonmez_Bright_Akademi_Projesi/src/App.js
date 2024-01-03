import React from 'react';
import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import About from './Pages/About/About.js';
import Footer from './Components/Footer.js';
import { BauProvider } from './Contexts/BauContext.js';
import Users from './Pages/Users/Users';
import Instructor from './Pages/Instructor/Instructor.js';
import UsersDetail from './Pages/UsersDetail/UsersDetail.js';






function App() {

  return (
    <>

      <BauProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/ınstructor" component={<Instructor />} /> */}

            {/* <Route path="/ınstructorDetail/:id" component={<InstructorDetail />} /> */}
            {/* Route for the main page (Instructor component) */}
            <Users />
            <Route path="/" element={<Instructor />} />
            <Route path="/users/:id" element={<UsersDetail />} />
          </Routes>
        </Router>
        <Footer />
      </BauProvider>


    </>
  );
}

export default App;