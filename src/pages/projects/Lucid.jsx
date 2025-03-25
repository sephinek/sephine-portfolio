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
              <h2 className="text-[42px] font-medium text-black">
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
          <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto mt-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
                Overview
              </h3>
              <a
                href="https://lucid-mvp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-base text-primary"
              >
                <span className="font-bold">→ View Prototype</span>{' '}
                (Recommended: Use Responsive Design Mode in Chrome DevTools)
              </a>
            </div>

            <div className="flex flex-col gap-12">
              <p className="text-darkgrey">
                Lucid is a service designed to{' '}
                <span className="font-medium text-black">
                  help users discover their true motivation and achieve their
                  goals
                </span>{' '}
                in a market focused on instant rewards. By leveraging
                visualization, it{' '}
                <span className="font-medium text-black">
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
                <h3 className="font-medium text-2xl uppercase tracking-widest">
                  Background
                </h3>
                <p>
                  With numerous productive apps designed to help us maintain our
                  routines,{' '}
                  <span className="text-black italic underline">
                    why do we still struggle to achieve our goals successfully?
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl uppercase tracking-widest">
                  {' '}
                  Design Process
                </h3>
                <ul className="flex items-center gap-2 flex-wrap text-[13px]">
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
          <div className="bg-lightestgrey py-16 text-darkestgrey">
            <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
              <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
                Discovery
              </h3>

              <div className="flex flex-col gap-24">
                {/* Market Research Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🔍</span>{' '}
                    <span>Market Research</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium">
                          ▸ Problem Discovered:
                        </span>{' '}
                        Most people set goals but fail to achieve them.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to Frobes, Dr. Michelle Rozen ("The Change
                            Doctor") surveyed 1,000 people,{' '}
                            <span className="font-medium text-black italic">
                              finding that only 6% followed through on their
                              resolutions, while 94% did not.
                            </span>{' '}
                            (2023)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to a DiscoverHappyHabits study, 41% of
                            Americans planned on set New Year's goals,{' '}
                            <span className="font-medium text-black">
                              yet only 9% successfully achieved them by year's
                              end.
                            </span>{' '}
                            (2016)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to a study on procrastination and coping,{' '}
                            <span className="font-medium text-black">
                              20-25% of adults worldwide are chronic
                              procrastinators.
                            </span>{' '}
                            (2014)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium">▸ Reasons:</span> People
                        fail to accomplish their goals due to specific factors.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They had{' '}
                            <span className="font-medium text-black">
                              unrealistic goals
                            </span>
                            .
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-black">
                              didn't keep track
                            </span>{' '}
                            of their progress.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-black">
                              forgot
                            </span>{' '}
                            about their goals.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They have{' '}
                            <span className="font-medium text-black">
                              too many goals
                            </span>
                            .
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium">
                          ▸ Social Phenomenon:
                        </span>{' '}
                        Productivity apps are in high demand among young people,
                        yet many focus heavily on short-term challenges or
                        one-off plan.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-black">
                              Millennials and Gen Z value maximizing time and
                              achieving goals
                            </span>
                            , demonstrating a strong inclination to use digital
                            tools for managing their lives and tracking habits
                            such as exercise, meditation, or work tasks.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            After the COVID-19 pandemic erupted, people began
                            working from home and striving to regain control
                            over their work-life balance. Between 2020 and 2021,{' '}
                            <span className="font-medium text-black">
                              downloads of habit-tracking apps in the U.S.
                              surged by 25%
                            </span>
                            , a trend that persists to this day.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Many apps on the market focus heavily on short-term
                            routines or one-off plans. Sensor Tower's 2023
                            analysis showed that{' '}
                            <span className="font-medium text-black">
                              apps with gamified short-term focus had higher
                              initial download rates but lower retention after
                              90 days compared to apps with flexible, long-term
                              planning
                            </span>
                            .
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Market Research Ends */}

                {/* User Research Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">👥</span>{' '}
                    <span>User Research</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        ▸ Challenge: The majority of individuals who establish
                        goals do not succeed in accomplishing them.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to Frobes, Dr. Michelle Rozen ("The Change
                            Doctor") surveyed 1,000 people,{' '}
                            <span className="font-medium text-black">
                              finding that only 6% followed through on their
                              resolutions, while 94% did not.
                            </span>{' '}
                            (2023)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to a DiscoverHappyHabits study, 41% of
                            Americans planned on set New Year's goals,{' '}
                            <span className="font-medium text-black">
                              yet only 9% successfully achieved them by year's
                              end.
                            </span>{' '}
                            (2016)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to a study on procrastination and coping,{' '}
                            <span className="font-medium text-black">
                              20-25% of adults worldwide are chronic
                              procrastinators.
                            </span>{' '}
                            (2014)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        ▸ Reasons: People fail to accomplish their goals due to
                        specific factors.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They had{' '}
                            <span className="font-medium text-black">
                              unrealistic goals
                            </span>
                            .
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-black">
                              didn't keep track
                            </span>{' '}
                            of their progress.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-black">
                              forgot
                            </span>{' '}
                            about their goals.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They have{' '}
                            <span className="font-medium text-black">
                              too many goals
                            </span>
                            .
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        ▸ Social Phenomenon of Productive Apps: People fail to
                        accomplish their goals due to specific factors.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium">
                              Millennials and Gen Z value maximizing time and
                              achieving goals
                            </span>
                            , demonstrating a strong inclination to use digital
                            tools for managing their lives and tracking habits
                            such as exercise, meditation, or work tasks.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium">
                              didn't keep track
                            </span>{' '}
                            of their progress.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They <span className="font-medium">forgot</span>{' '}
                            about their goals.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They have{' '}
                            <span className="font-medium">too many goals</span>.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* User Research Ends */}

                {/* Competitor Analysis Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest">
                    <span className="text-2xl">📊</span>{' '}
                    <span>Competitor Analysis</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        ▸ Challenge: The majority of individuals who establish
                        goals do not succeed in accomplishing them.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to Frobes, Dr. Michelle Rozen ("The Change
                            Doctor") surveyed 1,000 people,{' '}
                            <span className="font-medium text-black">
                              finding that only 6% followed through on their
                              resolutions, while 94% did not.
                            </span>{' '}
                            (2023)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to a DiscoverHappyHabits study, 41% of
                            Americans planned on set New Year's goals,{' '}
                            <span className="font-medium text-black">
                              yet only 9% successfully achieved them by year's
                              end.
                            </span>{' '}
                            (2016)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to a study on procrastination and coping,{' '}
                            <span className="font-medium text-black">
                              20-25% of adults worldwide are chronic
                              procrastinators.
                            </span>{' '}
                            (2014)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        ▸ Reasons: People fail to accomplish their goals due to
                        specific factors.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They had{' '}
                            <span className="font-medium text-black">
                              unrealistic goals
                            </span>
                            .
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-black">
                              didn't keep track
                            </span>{' '}
                            of their progress.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-black">
                              forgot
                            </span>{' '}
                            about their goals.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They have{' '}
                            <span className="font-medium text-black">
                              too many goals
                            </span>
                            .
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        ▸ Social Phenomenon of Productive Apps: People fail to
                        accomplish their goals due to specific factors.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium">
                              Millennials and Gen Z value maximizing time and
                              achieving goals
                            </span>
                            , demonstrating a strong inclination to use digital
                            tools for managing their lives and tracking habits
                            such as exercise, meditation, or work tasks.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium">
                              didn't keep track
                            </span>{' '}
                            of their progress.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They <span className="font-medium">forgot</span>{' '}
                            about their goals.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They have{' '}
                            <span className="font-medium">too many goals</span>.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium">▸ Opportunities:</span>{' '}
                        Productivity apps are in high demand among young people,
                        yet many focus heavily on short-term challenges or
                        one-off plan.
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkestgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-black">
                              Millennials and Gen Z value maximizing time and
                              achieving goals
                            </span>
                            , demonstrating a strong inclination to use digital
                            tools for managing their lives and tracking habits
                            such as exercise, meditation, or work tasks.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            After the COVID-19 pandemic erupted, people began
                            working from home and striving to regain control
                            over their work-life balance. Between 2020 and 2021,{' '}
                            <span className="font-medium text-black">
                              downloads of habit-tracking apps in the U.S.
                              surged by 25%
                            </span>
                            , a trend that persists to this day.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Many apps on the market focus heavily on short-term
                            routines or one-off plans. Sensor Tower's 2023
                            analysis showed that{' '}
                            <span className="font-medium text-black">
                              apps with gamified short-term focus had higher
                              initial download rates but lower retention after
                              90 days compared to apps with flexible, long-term
                              planning
                            </span>
                            .
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Competitor Analysis Ends */}
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
