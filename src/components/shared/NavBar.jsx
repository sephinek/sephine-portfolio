import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="flex gap-5">
      <Link
        to="projects"
        className="transition-all duration-100 ease-in hover:text-primary"
      >
        Projects
      </Link>
      <Link
        to="about"
        className="transition-all duration-100 ease-in hover:text-primary"
      >
        Playground
      </Link>
      <Link
        to="resume"
        className="transition-all duration-100 ease-in hover:text-primary"
      >
        Resume
      </Link>
      <Link
        to="contact"
        className="rounded-full px-3 py-[1px] bg-secondary border-2 border-transparent text-white font-mono font-bold text-xs flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-secondary-opacity"
      >
        Hello
      </Link>
    </nav>
  );
}
