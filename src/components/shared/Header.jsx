import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-5">
      <Logo />
      <NavBar />
    </header>
  );
}
