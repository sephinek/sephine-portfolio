import { Link, useLocation } from 'react-router-dom';

export default function Logo() {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.lenis?.scrollTo(0);
    }
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      className="transition-all duration-100 ease-in hover:text-primary"
    >
      <h1 className="tracking-tight uppercase">Sephine Kang</h1>
    </Link>
  );
}
