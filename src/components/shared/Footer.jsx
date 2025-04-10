import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer className="py-6 border-t-[1px] border-t-lightgrey flex flex-col gap-4 justify-center text-mediumgrey">
      <div className="flex flex-col max-w-7xl w-[97%] mx-auto">
        <div className="flex justify-between items-center">
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

        <div className="flex flex-col text-sm tracking-normal text-grey">
          <span>ⓒ 2025 Soo Hyun (Sephine) Kang</span>
          <span>Designed & Developed by Sephine</span>
        </div>
      </div>
    </footer>
  );
}
