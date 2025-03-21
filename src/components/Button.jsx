import { Link } from 'react-router-dom';

export default function Button({ to, label, w, py }) {
  return (
    <Link
      to={to}
      className={`rounded-full ${w ? w : 'px-[14px]'} ${
        py ? py : 'py-[6px]'
      } cursor-pointer ${
        label === 'Contact' ? 'bg-primary' : 'bg-black'
      } border-1 border-transparent text-white font-default font-medium tracking-wide text-sm flex items-center justify-center transition-all duration-150 ease-in-out hover:bg-secondary-opacity hover:border-lightgrey hover:text-darkgrey`}
    >
      {label}
    </Link>
  );
}
