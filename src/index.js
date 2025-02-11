import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Bucket from './pages/Bucket';
import Contact from './pages/Contact';
import Sauces from './pages/Sauces';
import Burgerwrap from './pages/Burgerwrap';
import Fries from './pages/Fries';
import './pages/Home.css';
import './pages/Menu.css';
import './pages/Contact.css';
import './pages/Bucket.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bucket" element={<Bucket />} />
        <Route path="sauces" element={<Sauces />} />
        <Route path="burgerwrap" element={<Burgerwrap />} />
        <Route path="fries" element={<Fries />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
