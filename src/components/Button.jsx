import { Link } from 'react-router-dom';

export default function Button({ to, label, w, py, currentPathname }) {
  const isContactOnContactPage =
    label === 'Contact' && currentPathname === '/contact';

  const baseClasses = `rounded-full ${w || 'px-[14px]'} ${
    py || 'py-[6px]'
  } mx-auto cursor-pointer text-sm flex tracking-wide items-center justify-center transition-all duration-150 ease-in-out bg-primary font-medium text-black hover:bg-primary-variant`;

  const contactActiveClasses =
    'bg-primary-variant text-darkestgrey font-medium';

  return (
    <Link
      to={to}
      className={`${baseClasses} ${
        isContactOnContactPage ? contactActiveClasses : null
      }`}
    >
      {label}
    </Link>
  );
}
