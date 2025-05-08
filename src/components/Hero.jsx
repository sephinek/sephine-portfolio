import { SlLocationPin } from 'react-icons/sl';
import { IoCaretDownOutline } from 'react-icons/io5';

// import { useNavigate } from 'react-router-dom';

export default function Hero({ onClickDesignAndCode }) {
  // const navigate = useNavigate();

  return (
    <section className="py-16 flex flex-col gap-10 cursor-default">
      <h2 className="flex flex-col font-medium font-display text-white text-5xl leading-snug tracking-tight">
        <div className="flex gap-3 whitespace-nowrap">
          Hi, I'm&nbsp;
          <span className="underline">Sephine</span>!
        </div>

        {/* <div className="flex items-baseline gap-1 whitespace-nowrap">
          Product Designer&nbsp;
          <span className="flex items-baseline">
            <span>based in&nbsp;</span>
            <SlLocationPin className="text-4xl" />
            <span>Los Angeles.</span>
          </span>
        </div> */}
        <span>
          I craft user-centered digital experiences
          <br />
          with a minimal, thoughtful touch.
        </span>
      </h2>

      <div className="flex flex-col gap-4">
        {/* <ul className="flex gap-2">
          <li
            onClick={onClickDesignAndCode}
            className="text-[15px] tracking-wide inline px-3 py-1 bg-secondary rounded-full text-white border-[1px] border-lightgrey font-medium cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Design
          </li>
          <li
            onClick={onClickDesignAndCode}
            className="text-[15px] tracking-wide inline px-3 py-1 bg-secondary rounded-full text-white border-[1px] border-lightgrey font-medium cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Code
          </li>
          <li className="text-[15px] tracking-wide inline px-3 py-1 bg-secondary rounded-full text-white border-[1px] border-lightgrey font-medium cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1">
            <a
              href="https://sephinek.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Writing
            </a>
          </li>
          <li
            onClick={() => navigate('playground')}
            className="text-[15px] tracking-wide inline px-3 py-[3px] bg-secondary rounded-full text-white border-[1px] border-lightgrey font-medium cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            Playground(Drawing)
          </li>
        </ul> */}

        <div className="text-base font-medium inline-flex flex-col items-start gap-1 w-fit">
          <span className="text-lightgrey flex items-center">
            <span>
              UX/UI Designer / Product Designer / Web Developer / &nbsp;
            </span>
            <div className="flex items-center gap-1">
              <SlLocationPin />
              Los Angeles, CA
            </div>
          </span>
          {/* <span className="text-grey leading-tight">
            With a background in web development and digital marketing, I bring
            a well-rounded perspective to design across diverse platforms.
          </span> */}
        </div>
      </div>

      <div
        onClick={onClickDesignAndCode}
        className="my-48 self-center flex items-center gap-2 cursor-pointer animate-blink text-lightgrey"
      >
        <span className="text-lg font-display">
          Curious to learn more about me?
        </span>
        <IoCaretDownOutline className="text-base" />
      </div>
    </section>
  );
}
