import { VscLocation } from 'react-icons/vsc';
import { SlLocationPin } from 'react-icons/sl';

export default function Hero() {
  return (
    <section className="p-16">
      <div className="flex flex-col gap-4">
        <p className="text-3xl ml-10 transition-all duration-350 ease-in-out hover:translate-y-3 hover:rotate-4">
          Hi, friend!🙋🏻‍♀️
        </p>
        <p className="text-5xl flex ml-10">
          <span>I'm&nbsp;</span>
          <span className="text-primary transition-all duration-700 ease-in-out hover:translate-y-3">
            Sephine
          </span>
          <span>,&nbsp;</span>
          <span>a&nbsp;</span>
          <span className="text-primary transition-all duration-700 ease-in-out hover:translate-y-3">
            Product Designer
          </span>
        </p>
        <p className="text-3xl flex items-baseline ml-10">
          <span>based in&nbsp;</span>
          <span className="flex items-baseline transition-all duration-700 ease-in-out hover:translate-y-3 hover:text-secondary">
            <SlLocationPin />
            Los Angeles, CA.
          </span>
        </p>
      </div>
    </section>
  );
}
