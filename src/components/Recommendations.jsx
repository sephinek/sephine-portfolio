import { VscQuote } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import SlideInFromSide from './SlideInFromSide';

export default function Recommendations() {
  return (
    <section className="py-24 px-16 flex flex-col gap-16 cursor-default text-lightestgrey font-medium">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        <SectionTitle title="Recommendations" />

        <ul className="max-w-[960px] mx-auto flex flex-col gap-10">
          <SlideInFromSide directionFrom="left">
            <li className="p-8 border-[1px] border-primary-opacity flex flex-col gap-8 bg-white-opacity rounded-lg">
              <div className="flex flex-col gap-4 text-lg leading-relaxed">
                <div className="flex flex-col gap-2">
                  <VscQuote className="text-primary-opacity" />
                  <p className="px-8 tracking-wider">
                    Sephine has a rare ability to bridge design and development,
                    enabling smooth communication and thoughtful UI decisions.
                    Her{' '}
                    <span className="font-bold text-primary">
                      structural understanding and problem-solving mindset
                    </span>{' '}
                    brought clarity and efficiency to our project. Above all,
                    her leadership and calm communication created a{' '}
                    <span className="font-bold text-primary">
                      highly collaborative and positive team environment
                    </span>
                    . I believe these strengths will be powerful assets in any
                    product design role.
                  </p>
                  <VscQuote className="text-primary-opacity rotate-180 self-end" />
                </div>
                <div className="flex flex-col gap-1 items-center mx-auto">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-medium tracking-normal text-white">
                      Misoon Jang
                    </span>
                  </div>
                  <div className="flex gap-2 items-baseline text-sm text-grey">
                    <span className="font-medium">
                      PO & Product Design Lead at Sparkpet Korea&nbsp; |{' '}
                    </span>
                    <span className="italic font-display">UX/UI Mentor</span>
                  </div>
                </div>
              </div>
            </li>
          </SlideInFromSide>

          <SlideInFromSide directionFrom="right">
            <li className="p-8 border-[1px] border-primary-opacity flex flex-col gap-8 bg-white-opacity rounded-lg">
              <div className="flex flex-col gap-4 text-lg leading-relaxed">
                <div className="flex flex-col gap-2">
                  <VscQuote className="text-primary-opacity" />
                  <p className="px-8 tracking-wider">
                    Sephine naturally leads and organizes teams with clarity and
                    purpose. Her{' '}
                    <span className="font-bold text-primary">leadership</span>{' '}
                    isn't just tied to her technical expertise, but to her
                    ability to foster a collaborative and motivating
                    environment. Even without a formal title, she demonstrates
                    the kind of initiative and presence that makes teams thrive.
                    With continued growth, she's sure to shine in any setting.
                  </p>
                  <VscQuote className="text-primary-opacity rotate-180 self-end" />
                </div>
                <div className="flex flex-col gap-1 items-center mx-auto">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-medium tracking-normal text-white">
                      Youngyoon Kim
                    </span>
                  </div>
                  <div className="flex gap-2 items-baseline text-sm text-grey">
                    <span className="font-medium">
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

          <SlideInFromSide directionFrom="left">
            <li className="p-8 border-[1px] border-primary-opacity flex flex-col gap-8 bg-white-opacity rounded-lg">
              <div className="flex flex-col gap-4 text-lg leading-relaxed">
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
                    <span className="text-xl font-medium tracking-normal text-white">
                      Junghoon Pyo
                    </span>
                  </div>
                  <div className="flex gap-2 items-baseline text-sm text-grey">
                    <span className="font-medium">
                      HR Manager, Product Design Cohort at Sparta NB Camp&nbsp;
                      |
                    </span>
                    <span className="italic font-display">Student Manager</span>
                  </div>
                </div>
              </div>
            </li>
          </SlideInFromSide>
        </ul>
      </div>
    </section>
  );
}
