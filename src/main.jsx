import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Playground from './pages/Playground';
import Projects from './pages/Projects';
import Lucid from './pages/projects/Lucid';
import HyundaiCard from './pages/projects/HyundaiCard';
import SpartaCodingNBCamp from './pages/projects/SpartaCodingNBCamp';
import LocalFresh from './pages/projects/localFresh';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="playground" element={<Playground />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path="lucid" element={<Lucid />} />
            <Route path="hyundai-card" element={<HyundaiCard />} />
            <Route
              path="sparta-coding-nb-camp"
              element={<SpartaCodingNBCamp />}
            />
            <Route path="local-fresh" element={<LocalFresh />} />
          </Route>
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
