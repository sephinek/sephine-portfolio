import ProfileImg from '../assets/profile.png';
import FigmaLogo from '../assets/figma-logo.png';
import HtmlLogo from '../assets/html-logo.png';
import CssLogo from '../assets/css-logo.png';
import JsLogo from '../assets/js-logo.png';
import ReactLogo from '../assets/react-logo.png';
import WebflowLogo from '../assets/webflow-logo.png';

export default function About() {
  window.lenis?.scrollTo(0);

  return (
    <section className="pt-16 max-w-5xl mx-auto relative text-lightestgrey">
      <div className="flex flex-col items-start pt-10 pb-20 gap-20">
        <div className="flex justify-between items-center">
          <h2 className="font-display text-2xl font-medium leading-relaxed w-[60%] text-lightestgrey">
            I'm Sephine Kang, <br />a Product Designer specialized in{' '}
            <span className="underline">
              crafting clean, intuitive UI designs
            </span>{' '}
            that{' '}
            <span className="italic">align user needs with business goals</span>
            .
          </h2>
          <div className="h-auto w-[30%] opacity-80">
            <img
              src={ProfileImg}
              alt="Sephine's profile image"
              className="rounded-xs"
            />
          </div>
        </div>

        <div className="flex gap-10 items-start relative">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl uppercase whitespace-nowrap text-lightergrey">
                  ❥&nbsp;Core Skills & Tools
                </h3>
                <div className="w-full h-[1px] bg-lightgrey/40"></div>
              </div>
              <ul className="flex gap-3 text-lightergrey leading-relaxed tracking-normal pl-8 pr-16">
                <li className="w-16 h-16">
                  <img src={FigmaLogo} alt="" />
                </li>
                <li className="w-16 h-16">
                  <img src={HtmlLogo} alt="" />
                </li>
                <li className="w-16 h-16">
                  <img src={CssLogo} alt="" />
                </li>
                <li className="w-16 h-16">
                  <img src={JsLogo} alt="" />
                </li>
                <li className="w-16 h-16">
                  <img src={ReactLogo} alt="" />
                </li>
                <li className="w-16 h-16">
                  <img src={WebflowLogo} alt="" />
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl uppercase text-lightergrey">
                  ❥&nbsp;Bio
                </h3>
                <div className="w-full h-[1px] bg-lightgrey/40"></div>
              </div>
              <div className="flex flex-col gap-2 text-lightergrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>
                  ‣ Seoul-born, where a passion for words and systems took root.
                </p>
                <p>
                  ‣ Studied English Literature in Florida—honing storytelling
                  and analysis.
                </p>
                <p>
                  ‣ Launched my career in Los Angeles as a digital
                  marketer—bridging users and products through strategy.
                </p>
                <p>
                  ‣ Transitioned to frontend development—driven by my
                  fascination with web logic.
                </p>
                <p>
                  ‣ Now fully immersed in product design—combining structure,
                  empathy, and craft to shape meaningful user journeys. 🐋
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl uppercase text-lightergrey">
                  ❥&nbsp;Values
                </h3>
                <div className="w-full h-[1px] bg-lightgrey/40"></div>
              </div>
              <div className="flex flex-col gap-2 text-lightergrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>‣ Dream with direction.</p>
                <p>‣ Stay honest, stay kind.</p>
                <p>‣ Use clarity to build confidence.</p>
                <p>‣ Growth is a process, not a destination.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl uppercase text-lightergrey">
                  ❥&nbsp;Favorites
                </h3>
                <div className="w-full h-[1px] bg-lightgrey/40"></div>
              </div>
              <div className="flex flex-col gap-2 text-lightergrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>‣ 🐈‍⬛ My co-designer at home: Berry the cat</p>
                <p>
                  ‣ 🏝️ Exploring new places—California is the perfect base for
                  that
                </p>
                <p>
                  ‣ 📚 Learning from design gems—recent reads include{' '}
                  <span className="italic">Design Trap</span>,{' '}
                  <span className="italic">Growth Hacking</span>, and{' '}
                  <span className="italic">
                    Product: Mastering Service Planning
                  </span>
                </p>
                <p>‣ ⚙️ Passionate about tech that respects human time</p>
                <p>
                  ‣ 🖊️ I keep my best ideas in ink—analog tools for a digital
                  mind
                </p>
                <p>
                  ‣ 👩 I shift between{' '}
                  <span className="font-semibold">INFJ</span> and{' '}
                  <span className="font-semibold">INTJ</span>—a mix of
                  creativity and logic that shapes my design lens 😌
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
