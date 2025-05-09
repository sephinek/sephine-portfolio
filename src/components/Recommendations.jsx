import { VscQuote } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import SlideInFromSide from './SlideInFromSide';

export default function Recommendations() {
  return (
    <section className="py-24 px-16 flex flex-col gap-16 cursor-default text-lightestgrey">
      <div className="max-w-3xl w-full mx-auto flex flex-col gap-12">
        <SectionTitle title="Recommendations" />

        <ul className="max-w-3xl mx-auto flex flex-col gap-10">
          <SlideInFromSide directionFrom="left">
            <li className="py-8 p-16 flex flex-col gap-8 bg-white-opacity rounded-sm">
              <div className="flex flex-col gap-6 text-base leading-relaxed">
                <VscQuote className="text-primary-opacity slef-center w-full" />
                <div className="flex flex-col gap-2">
                  <p className="px-8 tracking-wider">
                    Sephine has a rare ability to{' '}
                    <span className="font-bold text-primary">
                      bridge design and development
                    </span>
                    , enabling smooth communication and thoughtful UI decisions.
                    Her{' '}
                    <span className="font-bold text-primary">
                      structural understanding and problem-solving mindset
                    </span>{' '}
                    brought clarity and efficiency to Lucid. Above all, her
                    leadership and calm communication created a highly
                    collaborative and positive team environment.
                  </p>
                </div>

                <div className="flex flex-col gap-1 items-center mx-auto">
                  <div className="flex items-baseline gap-3">
                    <span className="font-medium tracking-normal text-lightgrey">
                      Misoon Jang
                    </span>
                  </div>
                  <div className="flex gap-2 items-baseline text-sm text-mediumgrey">
                    <span className="font-normal">
                      PO & Product Design Lead at Sparkpet Korea&nbsp; |{' '}
                    </span>
                    <span className="italic font-display">UX/UI Mentor</span>
                  </div>
                </div>
              </div>
            </li>
          </SlideInFromSide>

          <SlideInFromSide directionFrom="right">
            <li className="py-8 px-16 flex flex-col gap-8 bg-white-opacity rounded-sm">
              <div className="flex flex-col gap-6 text-base leading-relaxed">
                <VscQuote className="text-primary-opacity slef-center w-full" />
                <div className="flex flex-col gap-2">
                  <p className="px-8 tracking-wider">
                    Sephine{' '}
                    <span className="font-bold text-primary">
                      naturally leads and organizes teams with clarity and
                      purpose
                    </span>
                    . Her leadership isn't just tied to her technical expertise,
                    but to her ability to foster a collaborative and motivating
                    environment. She demonstrates the kind of initiative and
                    presence that makes teams thrive.
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center mx-auto">
                  <div className="flex items-baseline gap-3">
                    <span className="font-medium tracking-normal text-lightgrey">
                      Youngyoon Kim
                    </span>
                  </div>
                  <div className="flex gap-2 items-baseline text-sm text-mediumgrey">
                    <span className="font-normal">
                      ex-Engineer at Block Odyssey&nbsp; |{' '}
                    </span>
                    <span className="italic font-display">
                      Engineering Mentor
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </SlideInFromSide>

          {/* <SlideInFromSide directionFrom="left">
            <li className="py-8 px-16 flex flex-col gap-8 bg-white-opacity rounded-3xl">
              <div className="flex flex-col gap-2 text-base leading-relaxed">
                <div className="flex flex-col gap-2">
                  <VscQuote className="text-primary-opacity" />
                  <p className="px-8 tracking-wider">
                    Sephine's leadership and drive stood out throughout the
                    project. She skillfully coordinated diverse opinions while
                    staying focused on the goal. With her broad perspective in
                    both UX and UI, and her{' '}
                    <span className="font-bold text-primary">
                      strong dedication
                    </span>
                    , I'm confident she'll thrive in any global setting. I fully
                    support her journey and look forward to her continued
                    success.
                  </p>
                  <VscQuote className="text-primary-opacity rotate-180 self-end" />
                </div>
                <div className="flex flex-col gap-1 items-center mx-auto">
                  <div className="flex items-baseline gap-3">
                    <span className="font-medium tracking-normal text-lightgrey">
                      Junghoon Pyo
                    </span>
                  </div>
                  <div className="flex gap-2 items-baseline text-sm text-mediumgrey">
                    <span className="font-normal">
                      HR Manager, Product Design Cohort at Sparta NB Camp&nbsp;
                      |
                    </span>
                    <span className="italic font-display">Student Manager</span>
                  </div>
                </div>
              </div>
            </li>
          </SlideInFromSide> */}
        </ul>
      </div>
    </section>
  );
}
