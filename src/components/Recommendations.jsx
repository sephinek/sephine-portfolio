import SectionTitle from './SectionTitle';
import { VscQuote } from 'react-icons/vsc';

export default function Recommendations() {
  return (
    <section className="py-24 px-16 flex flex-col gap-16 cursor-default bg-lightergrey text-darkgrey font-medium">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        <SectionTitle title="What people are saying" />
        <ul className="max-w-[80%] mx-auto flex flex-col gap-8">
          <li className="p-8 border-[1px] border-lightgrey flex flex-col gap-8 bg-lightestgrey rounded-lg">
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <div className="flex flex-col gap-2">
                <VscQuote className="text-secondary" />
                <p>
                  Sephine has a rare ability to bridge design and development,
                  enabling smooth communication and thoughtful UI decisions. Her{' '}
                  <span className="font-bold">
                    structural understanding and problem-solving mindset
                  </span>{' '}
                  brought clarity and efficiency to our project. Above all, her
                  leadership and calm communication created a{' '}
                  <span className="font-bold">
                    highly collaborative and positive team environment
                  </span>
                  . I believe these strengths will be powerful assets in any
                  product design role.
                </p>
                <VscQuote className="text-secondary rotate-180 self-end" />
              </div>
              <div className="flex flex-col items-center mx-auto">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl font-medium tracking-normal">
                    Misoon Jang
                  </span>
                </div>
                <div className="flex gap-2 items-baseline text-sm">
                  <span className="font-medium">
                    PO & Product Design Lead at Sparkpet Korea&nbsp; |{' '}
                  </span>
                  <span className="italic font-display">UX/UI Mentor</span>
                </div>
              </div>
            </div>
          </li>

          <li className="p-8 border-[1px] border-lightgrey flex flex-col gap-8 bg-lightestgrey rounded-lg">
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <div className="flex flex-col gap-2">
                <VscQuote className="text-secondary" />
                <p>
                  Sephine naturally leads and organizes teams with clarity and
                  purpose. Her <span className="font-bold">leadership</span>{' '}
                  isn't just tied to her technical expertise, but to her ability
                  to foster a collaborative and motivating environment. Even
                  without a formal title, she demonstrates the kind of
                  initiative and presence that makes teams thrive. With
                  continued growth, she's sure to shine in any setting.
                </p>
                <VscQuote className="text-secondary rotate-180 self-end" />
              </div>
              <div className="flex flex-col items-center mx-auto">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl font-medium tracking-normal">
                    Youngyoon Kim
                  </span>
                </div>
                <div className="flex gap-2 items-baseline text-sm">
                  <span className="font-medium">Engineer at ?&nbsp; | </span>
                  <span className="italic font-display">
                    Engineering Mentor
                  </span>
                </div>
              </div>
            </div>
          </li>

          <li className="p-8 border-[1px] border-lightgrey flex flex-col gap-8 bg-lightestgrey rounded-lg">
            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <div className="flex flex-col gap-2">
                <VscQuote className="text-secondary" />
                <p>
                  Sephine's leadership and drive stood out throughout the
                  project. She skillfully coordinated diverse opinions while
                  staying focused on the goal. With her broad perspective in
                  both UX and UI, and her{' '}
                  <span className="font-bold">strong dedication</span>, I'm
                  confident she'll thrive in any global setting. I fully support
                  her journey and look forward to her continued success.
                </p>
                <VscQuote className="text-secondary rotate-180 self-end" />
              </div>
              <div className="flex flex-col items-center mx-auto">
                <div className="flex items-baseline gap-3">
                  <span className="text-xl font-medium tracking-normal">
                    Junghoon Pyo
                  </span>
                </div>
                <div className="flex gap-2 items-baseline text-sm">
                  <span className="font-medium">
                    HR Manager, Product Design Cohort at Sparta NB Camp&nbsp; |
                  </span>
                  <span className="italic font-display">Student Manager</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
