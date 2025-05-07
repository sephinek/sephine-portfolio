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
    <nav className="flex items-center gap-5 text-sm">
      <Link
        to="/about"
        className={`${
          currentPathname === '/about'
            ? 'text-primary font-medium hover:text-primary-variant'
            : ''
        } transition-all duration-100 ease-in hover:text-primary`}
      >
        About
      </Link>
      <Link
        to="/projects"
        className={`${
          currentPathname === '/projects'
            ? 'text-primary font-medium hover:text-primary-variant'
            : ''
        } transition-all duration-100 ease-in hover:text-primary`}
      >
        Projects
      </Link>
      {/* <Link
        to="/playground"
        className={`${
          currentPathname === '/playground' ? 'text-primary' : ''
        } transition-all duration-100 ease-in hover:text-primary`}
      >
        Playground
      </Link> */}
      <a
        download
        href="/Soohyun_Kang_Resume.pdf"
        target="_blank"
        alt="Download resume"
        title="Resume"
        className="transition-all duration-100 ease-in hover:text-primary"
      >
        Resume
      </a>

      <Button to="/contact" label="Contact" currentPathname={currentPathname} />
    </nav>
  );
}
