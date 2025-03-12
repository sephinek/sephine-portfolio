import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contact from './pages/Contact';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":pid" element={<Project />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
