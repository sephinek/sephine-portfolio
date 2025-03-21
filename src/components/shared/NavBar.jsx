import { Link } from 'react-router-dom';
import Button from '../Button';

export default function NavBar() {
  return (
    <nav className="flex items-center gap-5 text-base">
      <Link
        to="/about"
        className="transition-all duration-100 ease-in hover:text-hover-btn"
      >
        About
      </Link>
      <Link
        to="/projects"
        className="transition-all duration-100 ease-in hover:text-hover-btn"
      >
        Projects
      </Link>
      <Link
        to="/playground"
        className="transition-all duration-100 ease-in hover:text-hover-btn"
      >
        Playground
      </Link>
      <Link
        to="/resume"
        className="transition-all duration-100 ease-in hover:text-hover-btn"
      >
        Résumé
      </Link>

      <Button to="/contact" label="Contact" />
    </nav>
  );
}
