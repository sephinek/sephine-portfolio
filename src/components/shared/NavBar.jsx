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

      <Button to="/contact" label="Contact" />
    </nav>
  );
}
