import { CgArrowLongRight } from 'react-icons/cg';
import BannerImg01 from '../../assets/lucid-carousel01.png';

export default function Lucid() {
  return (
    <section className="py-6 text-lg leading-relaxed tracking-wider">
      <div className="flex flex-col">
        <section className="max-w-7xl mx-auto flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-8 max-w-[85%] mx-auto">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-medium text-grey">MVP Project</span>
              <h2 className="text-[42px] font-medium">
                Lucid: Vision Management App
              </h2>
            </div>
            <img
              src={BannerImg01}
              alt="Lucid app onboarding screens with vision input"
              className="border-2 border-lightgrey rounded-4xl w-[95%] mx-auto"
            />
          </div>
        </section>

        <section className="flex flex-col gap-16">
          {/* Overview starts */}
          <section className="flex flex-col gap-10 max-w-[840px] w-[840px] mx-auto mt-10">
            <h3 className="font-medium text-3xl text-lucid">Overview</h3>

            <div className="flex flex-col gap-12">
              <p className="text-darkgrey">
                Lucid is a service designed to{' '}
                <span className="font-medium">
                  help users discover their true motivation and achieve their
                  goals
                </span>{' '}
                in a market focused on instant rewards. By leveraging
                visualization, it{' '}
                <span className="font-medium">
                  provides image training to reduce the psychological distance
                  to goals
                </span>
                , enhancing motivation. To validate this approach, extensive
                desk research, market research, and user research were
                conducted, along with references to various psychological
                studies.
              </p>

              <div className="grid grid-cols-4 gap-12 my-4 border-1 border-lightgrey p-6 rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    MY ROLE
                  </span>
                  <span className="text-base text-darkgrey">
                    Product Designer, Frontend Developer
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TEAM
                  </span>
                  <span className="text-base text-darkgrey">
                    4 Product Designers, 2 Engineers
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TIMELINE
                  </span>
                  <span className="text-base text-darkgrey">
                    6 weeks (Q1 2025)
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TOOLS
                  </span>
                  <span className="text-base text-darkgrey">
                    Figma, FigJam, Google Form, Maze, React, CSS
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Background</h3>
                <p>
                  With numerous productive apps designed to help us maintain our
                  routines,{' '}
                  <span className="text-darkestgrey italic underline">
                    why do we still struggle to achieve our goals successfully?
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl"> Process</h3>
                <ul className="flex items-center gap-2 flex-wrap text-sm">
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Discovery & Research
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Problem Definition
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Ideation
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Wireframing & Prototyping
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    User Testing
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Iteration
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Visual Design
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Branding
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Implementation & Development
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Launch & QA
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Overview ends */}

          {/* Discovery starts */}
          <div className="bg-lightestgrey py-16">
            <section className="flex flex-col gap-10 max-w-[840px] w-[840px] mx-auto">
              <h3 className="font-medium text-3xl text-lucid">Discovery</h3>

              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-2xl">Market Research</h3>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">
                      Challenge: People struggle to achieve their set goals.
                    </span>
                    <ul className="ml-4">
                      <li>
                        According to a study by DiscoverHappyHabits, 41% of
                        Americans planned on set New Year's goals, yet only 9%
                        successfully achieved them by year's end.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">
                      Challenge: People struggle to achieve their set goals.
                    </span>
                    <ul className="ml-4">
                      <li>
                        According to a study by DiscoverHappyHabits, 41% of
                        Americans planned on set New Year's goals, yet only 9%
                        successfully achieved them by year's end.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-2xl">User Research</h3>
                  <p>
                    Lucid began with the question of how to create and maintain
                    effective plans consistently.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-medium text-2xl">Competitor Analysis</h3>
                  <p>
                    Lucid began with the question of how to create and maintain
                    effective plans consistently.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* Discovery ends */}

          {/* Define starts */}
          <section className="flex flex-col gap-10 max-w-[80%] w-[80%] mx-auto">
            <h3 className="font-medium text-3xl text-lucid">Define</h3>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">User Personas</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">User Journey Maps</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Problem Statements</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>
            </div>
          </section>

          {/* Define ends */}

          {/* Develop starts */}
          <section className="flex flex-col gap-10 max-w-[80%] w-[80%] mx-auto">
            <h3 className="font-medium text-3xl text-lucid">Develop</h3>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Initial Wireframes</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Screen Designs</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Prototyping</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>
            </div>
          </section>
          {/* Develop ends */}

          {/* Deliver starts */}
          <section className="flex flex-col gap-10 max-w-[80%] w-[80%] mx-auto">
            <h3 className="font-medium text-3xl text-lucid">Deliver</h3>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Code</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Launch</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">QA</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>
            </div>
          </section>
          {/* Deliver ends */}

          {/* Retrospect starts */}
          <section className="flex flex-col gap-10 max-w-[80%] w-[80%] mx-auto">
            <h3 className="font-medium text-3xl text-lucid">Retrospect</h3>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">What I Learned</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Areas to Improve</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl">Scalable Parts</h3>
                <p>
                  Lucid began with the question of how to create and maintain
                  effective plans consistently.
                </p>
              </div>
            </div>
          </section>
          {/* Retrospect ends */}
        </section>
      </div>
    </section>
  );
}
