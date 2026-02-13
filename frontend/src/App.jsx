import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Card Components
import CTASection from './components/CTASection';
import FacilityCard from './components/FacilityCard';
import FacultyCard from './components/FacultyCard';
import ReviewCard from './components/ReviewCard';
import StreamCard from './components/StreamCard';
import HeroSection from './components/HeroSection';
import SectionTitle from './components/SectionTitle';
import StatsSection from './components/StatsSection';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Hostel from './pages/Hostel';
import Results from './pages/Results';
import Admission from './pages/Admission';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/results" element={<Results />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}