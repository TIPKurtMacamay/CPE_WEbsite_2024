import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Research from './components/Research';
import StudentOA from './components/StudentOA';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/research" element={<Research />} />
        <Route path="/studentoa" element={<StudentOA />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
