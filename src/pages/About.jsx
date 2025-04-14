export default function About() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col items-start pl-[20%] p-20 gap-24">
        <h2 className="text-2xl font-medium flex flex-col items-start gap-0">
          <p>Hi there!</p>
          <p>I'm Sephine, a Product Designer.</p>
        </h2>

        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-xl">❥&nbsp;goal</h3>
            <div className="w-full h-[1px] bg-lightgrey"></div>
          </div>
          <div className="flex flex-col gap-2 tracking-normal text-mediumgrey">
            <p>
              ‣ To design engaging, user-centered products that inspire and
              delight.
            </p>
            <p>
              ‣ To craft experiences that go beyond the product—shaping how
              people feel, think, and act.
            </p>
            <p>
              ‣ To create strategic design solutions by combining a business
              mindset with a holistic understanding of systems.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-xl">❥&nbsp;bio</h3>
            <div className="w-full h-[1px] bg-lightgrey"></div>
          </div>
          <div className="flex flex-col gap-2 tracking-normal text-mediumgrey">
            <p>‣ Born and raised in Seoul, South Korea.</p>
            <p>‣ Studied English Literature, in Florida, USA.</p>
            <p>‣ Started my career in digital marketing in Los Angeles, CA.</p>
            <p>
              ‣ Fascinated by technology, I began teaching myself web
              development.
            </p>
            <p>‣ Along the way, I discovered the world of design.</p>
            <p>
              ‣ And through that journey, I found my true passion—now fully
              immersed in product design.🐋
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-xl">❥&nbsp;values</h3>
            <div className="w-full h-[1px] bg-lightgrey"></div>
          </div>
          <div className="flex flex-col gap-2 uppercase tracking-normal text-mediumgrey">
            <p>‣ Dreaming big.</p>
            <p>‣ Staying authentic.</p>
            <p>‣ Maintaining a positive mindset.</p>
            <p>‣ Embracing growth as a lifelong project.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex items-center gap-4">
            <h3 className="font-medium text-xl">❥&nbsp;favorites</h3>
            <div className="w-full h-[1px] bg-lightgrey"></div>
          </div>
          <div className="flex flex-col gap-2 tracking-normal text-mediumgrey">
            <p>‣ 🐈‍⬛ Spending time with my cat, Berry</p>
            <p>‣ 🎮 Getting cozy with *Stardew Valley*</p>
            <p>
              ‣ 📖 Finding insights from thoughtful design books—Recently read{' '}
              <span className="italic">Design Trap</span>,{' '}
              <span className="italic">
                Product: Mastering Service Planning That Captivates Users
              </span>
              , and <span className="italic">Growth Hacking</span>
            </p>
            <p>‣ 👩🏻‍💻 Loving tech that makes life easier</p>
            <p>‣ 🖊️ Jotting down ideas with notebooks and pens</p>
            <p>‣ 👩 Curious about MBTI—I currently test as an 'INTJ'</p>
          </div>
        </div>
      </div>
    </section>
  );
}
