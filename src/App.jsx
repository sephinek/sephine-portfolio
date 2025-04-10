import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsContentVisible(true), 700);
  }, []);

  const lenisRef = useRef(
    new Lenis({
      autoRaf: true,
      smooth: true,
      smoothWheel: 0.8,
      smoothTouch: 0.1,
      lerp: 0.15,
    })
  );

  useEffect(() => {
    window.lenis = lenisRef.current;

    return () => {
      delete window.lenis;
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />
      <main
        className={`grow pt-24 transition-all duration-1000 ${
          isContentVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[0px] opacity-0'
        }`}
      >
        <Outlet />
      </main>
      <div id="footer-sentinel" className="w-full h-0" />
      <Footer />
    </div>
  );
}

export default App;
