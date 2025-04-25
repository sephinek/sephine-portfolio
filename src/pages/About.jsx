import ProfileImg from '../assets/profile.png';

export default function About() {
  window.lenis?.scrollTo(0);

  return (
    <section className="max-w-7xl mx-auto relative">
      <div className="flex flex-col items-start px-[20%] p-10 pb-20 gap-24">
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium flex flex-col items-start gap-0">
            <p>Hi there!</p>
            <p>I'm Sephine, a Product Designer.</p>
          </h2>
          <div className="h-auto w-[35%] opacity-80">
            <img
              src={ProfileImg}
              alt="Sephine's profile image"
              className="rounded"
            />
          </div>
        </div>

        <div className="flex gap-10 items-start relative">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl">❥&nbsp;Goals</h3>
                <div className="w-full h-[1px] bg-lightgrey"></div>
              </div>
              <div className="flex flex-col gap-2 text-mediumgrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>
                  ‣ To design products that not only work well but mean
                  something—guiding users to take action, reflect, and grow.
                </p>
                <p>
                  ‣ To create experiences that align with human emotion and
                  intention, turning everyday interaction into purposeful
                  moments.
                </p>
                <p>
                  ‣ To merge structured thinking with systems-level insight for
                  design strategies that scale and evolve with users’ needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl">❥&nbsp;Bio</h3>
                <div className="w-full h-[1px] bg-lightgrey"></div>
              </div>
              <div className="flex flex-col gap-2 text-mediumgrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>
                  ‣ Born and raised in Seoul, South Korea, where I cultivated a
                  love for words and systems.
                </p>
                <p>
                  ‣ Studied English Literature in Florida—training in human
                  stories and layered interpretation.
                </p>
                <p>
                  ‣ Launched my career in Los Angeles as a digital marketer,
                  building bridges between people and products through strategy.
                </p>
                <p>
                  ‣ My fascination with the logic of the web led me to frontend
                  development.
                </p>
                <p>
                  ‣ But it was design that tied it all together: structure,
                  emotion, and purpose.
                </p>
                <p>
                  ‣ I’m now fully immersed in product design—blending business
                  sense, empathy, and craft to shape meaningful user journeys.
                  🐋
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl">❥&nbsp;Values</h3>
                <div className="w-full h-[1px] bg-lightgrey"></div>
              </div>
              <div className="flex flex-col gap-2 text-mediumgrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>‣ Dream with direction.</p>
                <p>‣ Stay honest, stay kind.</p>
                <p>‣ Use clarity to build confidence.</p>
                <p>‣ Growth is a process, not a destination.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-xl">❥&nbsp;Favorites</h3>
                <div className="w-full h-[1px] bg-lightgrey"></div>
              </div>
              <div className="flex flex-col gap-2 text-mediumgrey leading-relaxed tracking-normal pl-8 pr-16">
                <p>‣ 🐈‍⬛ My co-designer at home: Berry the cat</p>
                <p>‣ 🎮 Cozy gaming nights with Stardew Valley</p>
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
                  ‣ 👩 Currently testing as INFJ—makes sense, doesn’t it? 😌
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
