import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const location = useLocation();
  const [currentPathname, setCurrentPathname] = useState(location.pathname);

  useEffect(() => {
    setCurrentPathname(location.pathname);
  }, [location]);

  return (
    <nav className="flex items-center gap-5 text-base tracking-normal">
      <Link
        to="/about"
        className={`${
          currentPathname === '/about' ? 'text-hover-btn' : ''
        } transition-all duration-100 ease-in hover:text-hover-btn`}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`${
          currentPathname === '/projects' ? 'text-hover-btn' : ''
        } transition-all duration-100 ease-in hover:text-hover-btn`}
      >
        Projects
      </Link>
      <Link
        to="/playground"
        className={`${
          currentPathname === '/playground' ? 'text-hover-btn' : ''
        } transition-all duration-100 ease-in hover:text-hover-btn`}
      >
        Playground
      </Link>
      <a
        download
        href="/resume_soohyun_kang.pdf"
        target="_blank"
        alt="Download resume"
        title="Resume"
        className="transition-all duration-100 ease-in hover:text-hover-btn"
      >
        Resume
      </a>

      <Button to="/contact" label="Contact" currentPathname={currentPathname} />
    </nav>
  );
}
