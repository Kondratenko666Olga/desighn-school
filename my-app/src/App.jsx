import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Cookies from './pages/Cookies/Cookies';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);
  return (
    <Router>
      <Header openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
