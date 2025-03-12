import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      className="transition-all duration-100 ease-in hover:text-primary"
    >
      <h1>Sephine Kang</h1>
    </Link>
  );
}
