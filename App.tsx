import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/Services';
import DigitalServices from './pages/DigitalServices';

function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#1A1F2E] to-[#0A0F1C] text-gray-100"
    >
      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#1A1F2E] to-[#0A0F1C] text-gray-100">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/digital-services" element={<DigitalServices />} />
          </Routes>
        </AnimatePresence>
        {/* Only show footer on pages other than HomePage since HomePage already includes it */}
        <Routes>
          <Route path="/services" element={<Footer />} />
          <Route path="/digital-services" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;