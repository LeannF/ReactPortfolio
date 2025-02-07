import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Modal from "./components/Modal";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Legal from "./pages/Legal";
import Projects from "./pages/Projects";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/services" element={<Services />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
