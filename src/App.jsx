import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { useEffect, useRef } from 'react';

function App() {
  const lenis = useRef(
    new Lenis({
      autoRaf: true,
      smooth: true,
    })
  );

  useEffect(() => {
    function raf(time) {
      lenis.current.raf(time);
    }

    const animate = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animate);
      lenis.current.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
