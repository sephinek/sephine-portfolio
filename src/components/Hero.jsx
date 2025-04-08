import { SlLocationPin } from 'react-icons/sl';
import { HiMiniArrowLongDown } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export default function Hero({ onClickDesignAndCode }) {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-16 flex flex-col gap-16 cursor-default">
      <h2 className="text-darkgrey flex flex-col text-[44px] leading-relaxed tracking-tight">
        <div className="flex gap-3">
          <span className="transition-all duration-350 ease-in-out hover:-rotate-4">
            Hi, friend!🙋🏻‍♀️
          </span>
          <span>
            I'm <span className="text-primary font-medium">Sephine</span>,
          </span>
        </div>

        <div className="flex items-baseline gap-1">
          <span>a&nbsp;</span>
          <span className="text-primary font-medium">
            Product Designer&nbsp;
          </span>
          <span className="flex items-baseline">
            <span>based in&nbsp;</span>
            <SlLocationPin />
            <span>Los Angeles, CA</span>
            <span>,</span>
          </span>
        </div>
        <span>
          with an aim to <span>create user-friendly products that&nbsp;</span>
          <span className="italic underline">make life better</span>.
        </span>
      </h2>

      <div className="flex flex-col gap-4">
        <ul className="flex gap-2">
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
        </ul>

        <div
          onClick={onClickDesignAndCode}
          className="text-grey text-lg inline-flex items-center gap-1 cursor-pointer w-fit"
        >
          <span className="font-medium">Want to learn about me?</span>
          <HiMiniArrowLongDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
