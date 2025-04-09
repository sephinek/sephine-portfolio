import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="p-10 border-t-[1px] border-t-gray-50 flex flex-col items-center gap-4 justify-center bg-darkgrey text-lightestgrey">
      <div className="flex justify-between items-center max-w-7xl w-[97%]">
        <span className="self-start font-medium font-display text-2xl tracking-normal">
          Thank you for checking in!
        </span>
        <div className="flex flex-col text-sm gap-2">
          <span className="cursor-default">sephine.k31@gmail.com</span>
          <span className="cursor-default">+1 213.378.5068</span>
          <div className="flex gap-2 items-center">
            <a
              href="https://www.instagram.com/_sooyeonyy_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="text-2xl transition-all duration-250 ease hover:brightness-65 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/soo-hyun-kang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="text-2xl transition-all duration-250 ease hover:brightness-65 cursor-pointer" />
            </a>
            <a
              href="https://github.com/sephinek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="text-2xl transition-all duration-250 ease hover:brightness-65 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <span className="text-sm tracking-normal">
        ⓒ 2025 Soo Hyun (Sephine) Kang
      </span>
    </footer>
  );
}
