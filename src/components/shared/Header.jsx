import { Link } from 'react-router-dom';
import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="fixed backdrop-blur-md h-18 w-full border-b-[1px] border-b-gray-50 z-50">
      <div className="flex justify-between items-center h-full max-w-6xl mx-auto relative">
        <Logo />
        <Link
          to="/"
          className="text-2xl absolute left-[50%] -translate-x-[50%] "
        >
          🌳
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
