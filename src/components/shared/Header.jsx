import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.lenis?.scrollTo(0);
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 backdrop-blur-md h-24 w-full border-b-[1px] border-b-gray-50 z-50 transition-transform duration-400 ease-in ${
        isLoaded ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center h-full max-w-7xl w-[97%] mx-auto relative">
        <Logo />
        <Link
          to="/"
          onClick={handleClick}
          className="text-2xl absolute left-[50%] -translate-x-[50%] transition-all duration-200 ease-in-out hover:scale-110"
        >
          🌳
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
