import { CgArrowLongRight } from 'react-icons/cg';
import BannerImg01 from '../../assets/lucid-carousel01.png';
import MarketImg01 from '../../assets/lucid-market01.png';
import MarketImg02 from '../../assets/lucid-market02.png';
import MarketImg03 from '../../assets/lucid-market03.png';
import SurveyImg01 from '../../assets/lucid-survey01.png';
import SurveyImg02 from '../../assets/lucid-survey02.png';
import SurveyImg03 from '../../assets/lucid-survey03.png';
import InterviewImg01 from '../../assets/lucid-interview01.png';
import InterviewImg02 from '../../assets/lucid-interview02.png';
import PersonaImg01 from '../../assets/lucid-persona01.png';
import PersonaImg02 from '../../assets/lucid-persona02.png';
import CompetitorImg01 from '../../assets/lucid-competitor01.png';
import CompetitorImg02 from '../../assets/lucid-competitor02.png';

export default function Lucid() {
  return (
    <section className="py-6 text-base leading-loose tracking-wider">
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
          <section className="flex flex-col gap-10 max-w-4xl w-4xl mx-auto mt-10">
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
                    Product Designer,
                    <br />
                    Frontend Developer
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TEAM
                  </span>
                  <span className="text-base text-darkgrey">
                    4 Product Designers,
                    <br />2 Engineers
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
          <div className="bg-[#FFF5F5] py-16">
            <section className="flex flex-col gap-10 max-w-4xl w-4xl mx-auto">
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

                  <div className="flex flex-col gap-4 items-center">
                    <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                      <li className="flex gap-2">
                        <img src={MarketImg01} alt="Goal-Setting Timeframe" />
                      </li>
                      <li className="flex gap-2">
                        <img
                          src={MarketImg02}
                          alt="Subjective Answers on Favored Long-Term Goals"
                        />
                      </li>
                      <li className="flex gap-2">
                        <img
                          src={MarketImg03}
                          alt="Biggest Factor Hindering Goal Achievement"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Problem Discovered:
                        </span>
                        <div className="ml-4">
                          Most people set goals but fail to achieve them.
                        </div>
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            According to Frobes, Dr. Michelle Rozen ("The Change
                            Doctor") surveyed 1,000 people,{' '}
                            <span className="font-medium text-darkestgrey italic">
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
                            <span className="font-medium text-darkestgrey">
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
                            <span className="font-medium text-darkestgrey">
                              20-25% of adults worldwide are chronic
                              procrastinators.
                            </span>{' '}
                            (2014)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Reasons:</span>
                        <div className="ml-4">
                          People fail to accomplish their goals due to specific
                          factors.
                        </div>
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They had{' '}
                            <span className="font-medium text-darkestgrey">
                              unrealistic goals
                            </span>
                            .
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-darkestgrey">
                              didn't keep track
                            </span>{' '}
                            of their progress.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They{' '}
                            <span className="font-medium text-darkestgrey">
                              forgot
                            </span>{' '}
                            about their goals.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            They have{' '}
                            <span className="font-medium text-darkestgrey">
                              too many goals
                            </span>
                            .
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium flex flex-col gap-1">
                          ▸ Social Phenomenon:
                        </span>
                        <div className="ml-4">
                          Productivity apps are in high demand among young
                          people, yet many focus heavily on short-term
                          challenges or one-off plan.
                        </div>
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
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
                            <span className="font-medium text-darkestgrey">
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
                            <span className="font-medium text-darkestgrey">
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
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Survey:</span>
                        <div className="ml-4">
                          As a result of surveying the goal achievement process,
                          over half of the respondents preferred{' '}
                          <span className="font-medium">
                            setting long-term goals
                          </span>
                          , and many abandoned their goals due to a{' '}
                          <span className="font-medium">
                            lack of internal will and motivation
                          </span>{' '}
                          rather than external factors.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={SurveyImg01}
                              alt="Goal-Setting Timeframe"
                            />
                          </li>
                          <li className="flex gap-2">
                            <img
                              src={SurveyImg02}
                              alt="Subjective Answers on Favored Long-Term Goals"
                            />
                          </li>
                          <li className="flex gap-2">
                            <img
                              src={SurveyImg03}
                              alt="Biggest Factor Hindering Goal Achievement"
                            />
                          </li>
                        </ul>
                        <span className="text-center italic text-grey font-medium">
                          Data was sampled from 68 people
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ In-Depth Interview & Referencing Phychological
                          Documents
                        </span>
                        <div className="ml-4">
                          Through in-depth interviews analyzing the behaviors of
                          those who failed and succeeded in achieving their
                          goals, it was found that{' '}
                          <span className="font-medium">
                            successful individual persisted to reach the
                            maintenance and completion stages
                          </span>
                          , while those who{' '}
                          <span className="font-medium">
                            failed struggled during the contemplation and
                            preparation stages
                          </span>{' '}
                          and dropped out during the action and maintenance
                          stages.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex flex-col gap-8 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center gap-2">
                            <img
                              src={InterviewImg01}
                              alt="Goal-Setting Timeframe"
                              className="rounded-xl"
                            />
                            <span className="italic text-grey font-medium">
                              Summary of User Interview Insights
                            </span>
                          </li>
                          <li className="flex flex-col items-center">
                            <img
                              src={InterviewImg02}
                              alt="Identifies the cord issue point and the churn point"
                            />
                            <span className="italic text-grey font-medium">
                              Analysis Based on the Stages of Change Theory
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Research Ends */}

                {/* User Experience Analysis Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🚶</span>{' '}
                    <span>User Experience Analysis</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Personas:</span>{' '}
                        <div className="ml-4">
                          Developed personas based on in-depth user interviews.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={PersonaImg01}
                              alt="Goal-Setting Timeframe"
                            />
                          </li>
                          <li className="flex gap-2">
                            <img
                              src={PersonaImg02}
                              alt="Subjective Answers on Favored Long-Term Goals"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Journey Map</span>
                        <div className="ml-4">
                          Through in-depth interviews analyzing the behaviors of
                          those who failed and succeeded in achieving their
                          goals, it was found that{' '}
                          <span className="font-medium">
                            successful individual persisted to reach the
                            maintenance and completion stages
                          </span>
                          , while those who{' '}
                          <span className="font-medium">
                            failed struggled during the contemplation and
                            preparation stages
                          </span>{' '}
                          and dropped out during the action and maintenance
                          stages.
                        </div>
                      </span>
                      <div className="py-4 w-[120%] self-center">
                        <img
                          src={InterviewImg02}
                          alt="Identifies the cord issue point and the churn point"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Experience Analysis End */}

                {/* Competitor Analysis Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest">
                    <span className="text-2xl">📊</span>{' '}
                    <span>Competitor Analysis</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Competitor Analysis:
                        </span>
                        <div className="ml-4">
                          Selected six competitor apps with similar core
                          features among behavior-changing apps (MyRoutine,
                          Roubit, Routinery, Habitify, Productive, GoalKit) and
                          analyzed each to compare their main age group,
                          advantages, weakenesses, and unique points.
                        </div>
                      </span>
                      <div className="py-4 self-center">
                        <img
                          src={CompetitorImg01}
                          alt="Subjective Answers on Favored Long-Term Goals"
                          className="w-4/5 mx-auto"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Positioning Map:</span>
                        <div className="ml-4">
                          Created a positioning map by defining the service
                          direction and differentiaion points. Found that if
                          Lucid focuses on{' '}
                          <span className="font-medium">
                            providing users with a higher and further goal
                            (which Lucid calls 'Vision'), along with high
                            flexibility in their paths to achieve it and strong
                            internal motivation
                          </span>
                          , this could become its strength and unique
                          differentiation from other apps.
                        </div>
                      </span>
                      <div className="py-4 self-center">
                        <img
                          src={CompetitorImg02}
                          alt="Subjective Answers on Favored Long-Term Goals"
                          className="w-6/7 mx-auto"
                        />
                      </div>
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
