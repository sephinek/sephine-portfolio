// import { Link, useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';

export default function Header() {
  const { pathname } = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  // const location = useLocation();

  // const handleClick = (e) => {
  //   if (location.pathname === '/') {
  //     e.preventDefault();
  //     window.lenis?.scrollTo(0);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 backdrop-blur-md h-14 w-full border-b-[1px] ${
        pathname === '/contact' ||
        pathname === '/projects/lucid' ||
        pathname === '/projects/hyundai-card'
          ? 'border-b-lightgrey text-darkestgrey'
          : 'border-b-darkestgrey text-white'
      }  z-50 transition-transform duration-400 ease-in ${
        isLoaded ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center h-full max-w-7xl w-[97%] mx-auto relative tracking-wide ">
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}
