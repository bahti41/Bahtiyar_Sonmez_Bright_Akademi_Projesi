import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import About from './Pages/About/About.js';
import Footer from './Components/Footer.js';
import { BauContext } from './Contexts/BauContext.js';
import Trainings from './Pages/Trainings/Trainings.js';
import UserDetail from './Pages/UserDetails/UserDetail.js';

const users = [
  { id: 1, name: 'Engin Niyazi', occupation: 'Bilgisayar Mühendisi', bio: 'Merhaba! Ben Engin Niyazi, bir yazılımcıyım ve teknolojiye olan tutkum beni her zaman yeni şeyler öğrenmeye yönlendiriyor. Yazılım dünyasındaki yenilikleri takip etmek ve projeler geliştirmek beni heyecanlandırıyor.', photo: 'Img/Egıtmenler/EngınNıyazı.png' },
  { id: 2, name: 'Talut Sönmez', occupation: 'Back-End Developer', bio: 'Selam! Ben Talut Sönmez, bir yazılımcıyım ve kod yazmayı seviyorum. En sevdiğim teknolojiler arasında JavaScript, React ve Node.js bulunuyor. Sizlere daha fazla yazılım dünyasından paylaşımlar yapmak için buradayım!', photo: 'Img/Egıtmenler/Talutsonmez.png' },
  { id: 3, name: 'Bilal Tunca', occupation: 'Siber Güvenlik', bio: 'Merhabalar! Ben Bilal Tunca, yazılım dünyasına yeni adım atan bir yazılımcıyım. Özellikle frontend teknolojilere ilgi duyuyorum ve sürekli öğrenmeye açığım.', photo: 'Img/Egıtmenler/BılalTunca.png' },
  { id: 4, name: 'Numan Demirhan', occupation: 'Front end Developer', bio: 'Selam! Numan Demirhan burada. Yazılım dünyası benim için sadece bir iş değil, aynı zamanda bir tutku. Her gün yeni bir şey öğrenmek ve bu öğrendiklerimi uygulamak benim için heyecan verici.', photo: 'Img/Egıtmenler/NumanDemirhan.png' },
  { id: 5, name: 'Enes Tunca', occupation: 'Full Stack Developer', bio: 'Merhaba dostlar! Ben User 5 ve yazılım dünyası benim için bir sanat. Her proje benim için bir tablo, her satır kod bir fırça darbesi. Kodlamayı seviyorum ve her geçen gün daha iyi olmaya çalışıyorum.', photo: 'Img/Egıtmenler/EnesTunca.png' },

];


function App() {

  return (
    <>
      <BauContext.Provider value={{ users, userId }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainings" element={<Trainings users={users} />} />
            <Route path="/userdetail" element={<UserDetail users={users} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BauContext.Provider>
    </>
  );
}

export default App;