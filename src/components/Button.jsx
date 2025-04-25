import { Link } from 'react-router-dom';

export default function Button({ to, label, w, py, currentPathname }) {
  const isContactOnContactPage =
    label === 'Contact' && currentPathname === '/contact';

  const baseClasses = `rounded-full ${w || 'px-[14px]'} ${
    py || 'py-[6px]'
  } mx-auto cursor-pointer border-1 font-default font-medium tracking-wider text-sm flex items-center justify-center transition-all duration-150 ease-in-out`;

  const contactActiveClasses =
    'bg-secondary-opacity border-lightgrey text-darkgrey';

  const defaultClasses = `${
    label === 'Contact' ? 'bg-primary' : 'bg-black'
  } border-transparent text-white hover:bg-secondary-opacity hover:border-lightgrey hover:text-darkgrey`;

  return (
    <Link
      to={to}
      className={`${baseClasses} ${
        isContactOnContactPage ? contactActiveClasses : defaultClasses
      }`}
    >
      {label}
    </Link>
  );
}
