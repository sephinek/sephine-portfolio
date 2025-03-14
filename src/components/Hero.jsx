import { SlLocationPin } from 'react-icons/sl';
import { TiArrowDownThick } from 'react-icons/ti';

export default function Hero() {
  return (
    <section className="py-20 px-16 flex flex-col gap-20  cursor-default">
      <h2 className="flex flex-col text-3xl font-display leading-loose tracking-tighter">
        <div className="flex gap-3">
          <span className="transition-all duration-350 ease-in-out hover:-rotate-4">
            Hi, friend!🙋🏻‍♀️
          </span>
          <span>
            I'm <span className="text-primary font-bold">Sephine</span>,
          </span>
        </div>

        <div className="flex items-baseline gap-1">
          <span>a&nbsp;</span>
          <span className="text-primary font-bold">Product Designer&nbsp;</span>
          <span className="flex items-baseline">
            <span>based in&nbsp;</span>
            <SlLocationPin />
            <span className="font-medium">Los Angeles, CA</span>
            <span>,</span>
          </span>
        </div>
        <span>
          with an aim to <span>create user-friendly products</span> that&nbsp;
          <span className="italic underline">make life better</span>.
        </span>
      </h2>

      <div className="text-grey text-xl flex items-end gap-2">
        <span className="font-medium">Want to learn about me?</span>
        <TiArrowDownThick className="animate-bounce" />
      </div>
    </section>
  );
}
