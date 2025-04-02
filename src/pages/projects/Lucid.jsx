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
import JourneyMapImg from '../../assets/lucid-journey-map.png';
import SolutionsImg from '../../assets/lucid-solutions.png';
import FTPTheoryImg from '../../assets/lucid-ftp-theory.png';
import FTPSurveyImg01 from '../../assets/lucid-ftp-survey01.png';
import FTPSurveyImg02 from '../../assets/lucid-ftp-survey02.png';
import CompetitorImg01 from '../../assets/lucid-competitor01.png';
import CompetitorImg02 from '../../assets/lucid-competitor02.png';
import MarketFitImg from '../../assets/lucid-market-fit.png';
import ServiceFormatImg from '../../assets/lucid-service-format.png';
import BusinessModelImg from '../../assets/lucid-business-model.png';
import WireframesImg from '../../assets/lucid-wireframes.png';
import IAImg from '../../assets/lucid-information-architecture.png';
import UserFlowImg from '../../assets/lucid-user-flow.png';
import NamingImg from '../../assets/lucid-naming.png';
import CharacterImg from '../../assets/lucid-character.png';
import AppLogosImg from '../../assets/lucid-app-logos.png';
import DesignSystemImg01 from '../../assets/lucid-design-system01.png';
import DesignSystemImg02 from '../../assets/lucid-design-system02.png';
import DesignSystemImg03 from '../../assets/lucid-design-system03.png';
import UXWritingImg from '../../assets/lucid-ux-writing.png';
import ScreenDesignsImg from '../../assets/lucid-screen-designs.png';
import FigmaIcon from '../../assets/figma.png';
import NetlifyIcon from '../../assets/netlify.png';
import QAImg from '../../assets/lucid-qa.png';

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
          <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto mt-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
                Overview
              </h3>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
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
                <a
                  href="https://lucid-mvp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-base text-primary"
                >
                  <span className="font-bold">→ View Final Prototype</span>{' '}
                  (Korean version / Recommended: Use your mobile device or
                  Responsive Design Mode in Chrome DevTools)
                </a>
                <a
                  href="https://www.figma.com/proto/Jpmf3eOkQjIUYLBN37CYhQ/4%EC%A1%B0-MVP-Lucid?page-id=87%3A84482&node-id=87-86179&viewport=-208%2C-147%2C0.13&t=ZLxBvMD6bDTUGliH-1&scaling=min-zoom&content-scaling=fixed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-base text-primary"
                >
                  <span className="font-bold">→ View Figma Prototype</span>{' '}
                  (English version)
                </a>
              </div>

              <div className="grid grid-cols-4 gap-12 my-4 border-1 border-lightgrey p-6 rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    MY ROLE
                  </span>
                  <span className="text-base text-mediumgrey">
                    Product Designer,
                    <br />
                    Frontend Developer
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TEAM
                  </span>
                  <span className="text-base text-mediumgrey">
                    4 Product Designers,
                    <br />2 Engineers
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TIMELINE
                  </span>
                  <span className="text-base text-mediumgrey">
                    6 weeks (Q1 2025)
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-lucid-opacity">
                    TOOLS
                  </span>
                  <span className="text-base text-mediumgrey">
                    Figma, FigJam, Google Form, Maze, React, CSS
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl uppercase tracking-widest">
                  Background
                </h3>
                <p className="text-darkgrey">
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
                          Created a journey map based on the 5 stages of change,
                          identifying the personas' pain points and needs at
                          each stage.
                        </div>
                      </span>
                      <div className="py-4 w-[120%] self-center">
                        <img
                          src={JourneyMapImg}
                          alt="Identifies the cord issue point and the churn point"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Experience Analysis End */}
              </div>
            </section>
          </div>
          {/* Discovery ends */}

          {/* Define starts */}
          <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
            <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
              DEFINE
            </h3>

            <div className="flex flex-col gap-24">
              {/* Problem Definition Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">🧩</span>{' '}
                  <span>Problem Definition</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ Problems Defined:</span>
                      <div className="ml-4">
                        We identified problems from the journey map.
                      </div>
                    </span>
                    <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          Users{' '}
                          <span className="font-medium text-darkestgrey italic">
                            lose their sense of direction
                          </span>{' '}
                          if they do not{' '}
                          <span className="font-medium text-darkestgrey italic">
                            clearly define the value{' '}
                          </span>
                          of their goals.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          Users{' '}
                          <span className="font-medium text-darkestgrey italic">
                            struggle to create effective and specific plans
                          </span>{' '}
                          for their goals on their own.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Excessive or unrealistic plans lose execution power,{' '}
                          </span>
                          making them difficult to follow.{' '}
                          <span className="font-medium text-darkestgrey">
                            As unachieved plans accumulate, they ultimately lead
                            to abandoining the goal
                          </span>
                          .
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          It is challenging to{' '}
                          <span className="font-medium text-darkestgrey">
                            get an overview of progress
                          </span>{' '}
                          and{' '}
                          <span className="font-medium text-darkestgrey">
                            conduct regular check-ins
                          </span>
                          .
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Problem Definition Ends */}

              {/* Solutions Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">💡</span> <span>Solutions</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">
                        ▸ Pain Points & Needs & Solutions Defined:
                      </span>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img
                            src={SolutionsImg}
                            alt="Goal-Setting Timeframe"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Solutions Ends */}

              {/* Theoretical Validation Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">📚</span>{' '}
                  <span>Theoretical Validation & Survey</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">
                        ▸ Future Time Perspective (FTP) Theory:
                      </span>
                      <div className="ml-4">
                        Future Time Perspective (FTP) Theory validates our
                        solutions. According to FTP Theory,{' '}
                        <span className="font-medium">
                          even for goals with the same temporal distance, an
                          individual's time perspective affects their perceived
                          psychological distance and attitude toward the goal
                        </span>
                        . In other words, to achieve a vision, it is essential
                        to{' '}
                        <span className="font-medium">
                          define the goal's value
                        </span>
                        ,{' '}
                        <span className="font-medium">
                          create specific plans
                        </span>
                        , <span className="font-medium">track progress</span>,
                        and{' '}
                        <span className="font-medium">
                          envision your future self
                        </span>
                        .
                      </div>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img
                            src={FTPTheoryImg}
                            alt="Goal-Setting Timeframe"
                          />
                        </li>
                      </ul>
                    </div>
                    <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Psychological Distance & Goal Orientation:
                          </span>{' '}
                          Even if two goals have the same temporal distance,
                          their perceived psychological distance varies
                          depending on an individual's time perspective.
                          Moreover, those with a strong future orientation see
                          long-term goals as more relevant and are more willing
                          to invest effort in achieving them.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Depth of Goal Value & Planning:
                          </span>{' '}
                          Individuals with a high future time perspective define
                          their goals more deeply and assign greater intrinsic
                          value to them. They tend to create more structured and
                          detailed plans to reach their objectives.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Tracking Progress & Self-Regulation:
                          </span>{' '}
                          Future-oriented individuals are more likely to track
                          their progress and adjust their actions accordingly.
                          This tracking helps maintain motivation and improves
                          goal completion rates.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Projection of Thoughts onto Goals:
                          </span>{' '}
                          A strong future perspective allows individuals to
                          mentally simulate and connect with their future goals,
                          making them feel more tangible and achievable.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">
                        ▸ Survey on FTP Theory and Psychological Distance:
                      </span>
                      <div className="ml-4">
                        To validate the theory with real individuals, we
                        conducted a survey. We found that{' '}
                        <span className="font-medium">
                          simple setting specific goals and reviewing plans can
                          reduce the psychological distance to the goal
                        </span>
                        .
                      </div>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex flex-col gap-10 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img
                            src={FTPSurveyImg01}
                            alt="Goal-Setting Timeframe"
                          />
                        </li>
                        <li className="flex gap-2">
                          <img
                            src={FTPSurveyImg02}
                            alt="Goal-Setting Timeframe"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Theoretical Validation Ends */}

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
                        <span className="font-medium">
                          Selected six competitor apps with similar core
                          features{' '}
                        </span>
                        among behavior-changing apps (MyRoutine, Roubit,
                        Routinery, Habitify, Productive, GoalKit) and analyzed
                        each to compare their{' '}
                        <span className="font-medium">
                          main age group, advantages, weakenesses, and unique
                          points
                        </span>
                        .
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
                        direction and differentiaion points. Found that if Lucid
                        focuses on{' '}
                        <span className="font-medium">
                          providing users with a higher and further goal (which
                          Lucid calls 'Vision'), along with high flexibility in
                          their paths to achieve it and strong internal
                          motivation
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

              {/* Market-Fit Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">🎯</span>{' '}
                  <span>Hypothesis on Market Fit</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">
                        ▸ Hypothesis Statement:
                      </span>
                      <div className="ml-4">
                        We have defined the market fit between our target users
                        and core value as below.
                      </div>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img
                            src={MarketFitImg}
                            alt="Goal-Setting Timeframe"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Market-Fit Ends */}

              {/* Business Model Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">💰</span>{' '}
                  <span>Service Format & Business Model</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">
                        ▸ Service Format & Business Model:
                      </span>
                      <div className="ml-4">
                        Lucid is designed as{' '}
                        <span className="font-medium">
                          a mobile appproviding access anytime and anywhere
                        </span>
                        , though we develped a web app prototype mimicking the
                        mobile app. We have used the{' '}
                        <span className="font-medium">
                          Business Model Canvas
                        </span>{' '}
                        to outline the service's key value propositions, revenue
                        model, and more.
                      </div>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img
                            src={ServiceFormatImg}
                            alt="Lucid Service Format"
                          />
                        </li>
                        <li className="flex gap-2">
                          <img
                            src={BusinessModelImg}
                            alt="Lucid Business Model"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Business Model Ends */}
            </div>
          </section>
          {/* Define ends */}

          {/* Develop starts */}
          <div className="bg-[#FFF5F5] py-16">
            <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
              <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
                DEVELOP
              </h3>

              <div className="flex flex-col gap-24">
                {/* Wireframes Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">✏️</span>{' '}
                    <span>Initial Wireframes</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Wireframes at the Earlier Stage:
                        </span>
                        <div className="ml-4">
                          We created wireframes for the goal addition flow and
                          the statistics viewing flow.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={WireframesImg}
                              alt="Goal-Setting Timeframe"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wireframes Ends */}

                {/* Information Architecture Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">ℹ️</span>{' '}
                    <span>Information Architeture (IA)</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Information Architecture:
                        </span>
                        <div className="ml-4">
                          We have created an information architecture diagram
                          that includes key features of our service, such as
                          adding goals and plans, reflection day, and statistic
                          page.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img src={IAImg} alt="Information Architecture" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Information Architecture Ends */}

                {/* User Flow Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">➡️</span> <span>User Flow</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ User Flow:</span>
                        <div className="ml-4">
                          We have mapped out the entry points of key features
                          and flow toward achieving user goals.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={UserFlowImg}
                              alt="Information Architecture"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Flow Ends */}

                {/* Branding Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🌟</span> <span>Branding</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ App Naming:</span>
                        <div className="ml-4">
                          Inspired by{' '}
                          <span className="italic">lucid dreams</span>, "
                          <span className="font-medium">Lucid</span>" is built
                          on six brand keywords—
                          <span className="font-medium">
                            Vision, Imagination, Planning, Tracking,
                            Achievement, and Reflection
                          </span>
                          —helping users turn their envisioned future into a
                          clear reality.{' '}
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-auto">
                          <li className="flex gap-2">
                            <img src={NamingImg} alt="Goal-Setting Timeframe" />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Character:</span>
                        <div className="ml-4">
                          Designed using{' '}
                          <span className="font-medium">
                            the doodling technique
                          </span>{' '}
                          to symbolize{' '}
                          <span className="font-medium">the North Star</span>,
                          Lucid feels{' '}
                          <span className="font-medium">approachable</span> and{' '}
                          <span className="font-medium">unintimidating</span> to
                          users.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex flex-col gap-10 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={CharacterImg}
                              alt="Lucid character with bright red color and six edges"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        <span className="font-medium text-darkestgrey">
                          Six Points:
                        </span>{' '}
                        The six points symbolize Lucid's six brand
                        keywords—Vision, Imagination, Planning, Tracking,
                        Achievement, and Reflection.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        <span className="font-medium text-darkestgrey">
                          Red Color:
                        </span>{' '}
                        Lucid's bold red color, which serves as a guiding light,
                        encourages immediate action.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        <span className="font-medium text-darkestgrey">
                          Rounded Design:
                        </span>{' '}
                        Its rounded deisgn creates a friendly and approachable
                        impression while supporting flexible adjustments.
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ App Logo:</span>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-10 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <img
                            src={AppLogosImg}
                            alt="Lucid character with bright red color and six edges"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Branding Ends */}

                {/* Design System Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest">
                    <span className="text-2xl">🎨</span>{' '}
                    <span>Design System</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Typography & Color Palette:
                        </span>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img src={DesignSystemImg01} alt="Typography" />
                          </li>
                          <li className="flex gap-2">
                            <img src={DesignSystemImg02} alt="Color Palette" />
                          </li>
                        </ul>
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img src={DesignSystemImg03} alt="Typography" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Design System Ends */}

                {/* UX Writing Guidelines Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">✍️</span>{' '}
                    <span>UX Writing Guidelines</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ UX Writing Guidelines:
                        </span>
                        <div className="ml-4">
                          We created a UX writing guide that reflects the brand
                          story of Lucid and maintained a consistent voice and
                          tone throughout the app.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={UXWritingImg}
                              alt="Goal-Setting Timeframe"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* UX Writing Guidelines Ends */}

                {/* Screen Designs Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">📱</span>{' '}
                    <span>Screen Designs</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Screen Designs:</span>
                        <div className="ml-4">
                          Lucid is designed as{' '}
                          <span className="font-medium">
                            a mobile appproviding access anytime and anywhere
                          </span>
                          , though we develped a web app prototype mimicking the
                          mobile app. We have used the{' '}
                          <span className="font-medium">
                            Business Model Canvas
                          </span>{' '}
                          to outline the service's key value propositions,
                          revenue model, and more.
                        </div>
                      </span>

                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={ScreenDesignsImg}
                              alt="Lucid Service Format"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Screen Designs Ends */}

                {/* Prototypes Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🤳</span> <span>Prototypes</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ Prototypes:</span>
                        <div className="ml-4">
                          Lucid has two prototype versions: a Figma prototype
                          and deployed final app.
                        </div>
                      </span>
                      <div className="ml-4 flex flex-col gap-3">
                        <div className="flex gap-1">
                          <span className="mr-1 font-medium">
                            ◦ Figma Prototype:
                          </span>
                          <a
                            href="https://www.figma.com/proto/Jpmf3eOkQjIUYLBN37CYhQ/4%EC%A1%B0-MVP-Lucid?page-id=87%3A84482&node-id=87-86179&viewport=-208%2C-147%2C0.13&t=ZLxBvMD6bDTUGliH-1&scaling=min-zoom&content-scaling=fixed"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="w-10 h-10"
                              src={FigmaIcon}
                              alt="Figma icon"
                            />
                            <span className="text-sm">English Version</span>
                          </a>
                        </div>
                        <div className="flex gap-1">
                          <span className="mr-1 font-medium shrink-0">
                            ◦ Deployed Prototype:
                          </span>
                          <a
                            href="https://lucid-mvp.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="w-10 h-10"
                              src={NetlifyIcon}
                              alt="Netlify icon"
                            />
                            <span className="text-sm">
                              Korean Version / (Recommended: Use your mobile
                              device or Responsive Design Mode in Chrome
                              DevTools)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Prototypes Ends */}

                {/* Marketing Video Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">📹</span>{' '}
                    <span>Marketing Video</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ YouTube Video:</span>
                        <div className="ml-4">
                          One of our team members created a marketing video to
                          introduce Lucid. I contributed by helping decide the
                          statements to include and the content to be featured
                          in the video.
                        </div>
                      </span>
                      <div className="ml-4 flex flex-col gap-3 self-center">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/7AAwWSRU8aM?si=e2MSeWjN2VkjsHtW"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Marketing Video Ends */}
              </div>
            </section>
          </div>
          {/* Develop ends */}

          {/* Deliver starts */}
          <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
            <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
              DELIVER
            </h3>

            <div className="flex flex-col gap-24">
              {/* Code Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">👩‍💻</span> <span>Code</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ Tools & Tasks:</span>
                      <div className="ml-4">
                        We developed the web app prototype using{' '}
                        <span className="font-medium">
                          React (JavaScript) and CSS, with Recoil for state
                          management
                        </span>
                        .
                        <br />
                        <span className="font-medium">
                          As the lead during the web app prototype development
                          phase
                        </span>
                        , I managed the GitHub repository, created development
                        schedules, assigned roles to team members, conducted
                        reviews, and facilitated communication with engineers.
                      </div>
                    </span>
                    <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Discussed which inputs to collect from users{' '}
                          </span>
                          and how to store them as data.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Took the lead in designing the data transition logic
                          </span>{' '}
                          and shared it with the engineers. .
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          Created components to{' '}
                          <span className="font-medium text-darkestgrey">
                            enable code reusability
                          </span>
                          .
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          Wrote the{' '}
                          <span className="font-medium text-darkestgrey">
                            code implement the interface.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Utilized AI
                          </span>{' '}
                          to effeciently receive and utilize data, and fix bugs.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Code Ends */}

              {/* Launch Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">🎉</span> <span>Launch</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ Tool:</span>
                      <div className="ml-4">
                        We deployed our web app using{' '}
                        <span className="font-medium">Netlify</span>
                        , which enabled seamless hosting and continuous
                        integration.
                        <br />
                        <span className="font-medium">
                          To properly view the prototype in mobile size, use
                          your mobile device or Chrome's DevTools responsive
                          design mode feature.
                        </span>
                      </div>
                    </span>
                    <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                      <li className="flex gap-2">
                        <span>1.</span>
                        <span>
                          Right-click on the page and select{' '}
                          <span className="font-medium">'Inspect'</span>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>2.</span>
                        <span>
                          Click the{' '}
                          <span className="font-medium">
                            'Toggle Device Toolbar' icon
                          </span>{' '}
                          or press{' '}
                          <span className="font-medium">
                            Ctrl + Shift + M (Cmd + Shift + M on Mac)
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>3.</span>
                        <span>
                          Enter <span className="font-medium">375 * 812</span>{' '}
                          as the custom device size.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Launch Ends */}

              {/* QA Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">✅</span> <span>QA</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ Notion QA Sheet:</span>
                      <div className="ml-4">
                        After deploying our app, we conducted QA to ensure it
                        worked as expected. We listed the issues we missed,
                        assigned responsible team members to fix the code, and
                        documented the updates in Notion.
                      </div>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img src={QAImg} alt="Notion QA Sheet" />
                        </li>
                      </ul>
                    </div>
                    <span className="text-xl font-medium">
                      Some of the Resolved Issues
                    </span>
                    <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Onboarding Redirection:
                          </span>{' '}
                          Rederict to the main page if the user already has an
                          account.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Pause Toggle Issue:
                          </span>{' '}
                          Fix the toggle functionality during pause state.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Refresh Error:
                          </span>{' '}
                          Fix the error that shows a blank page when refreshing
                          the page.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Not Found Page:
                          </span>{' '}
                          Create a "Not Found" page for 404 errors.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Hide Top Bar on Detail Page:
                          </span>{' '}
                          Hide the top bar on the detail page.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Add Plan Not Working on Goal Edit Page:
                          </span>{' '}
                          Fix the issue where the add plan functionality isn't
                          working on the goal edit page.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Plan's Bottom Sheet:
                          </span>{' '}
                          When editing a plan, ensure the plan's title is
                          properly displayed.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Auto-Set Goal Duration to 1 Month:
                          </span>{' '}
                          Automatically set the goal duration to 1 month by
                          default.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Set Mobile View for 375*812:
                          </span>{' '}
                          Ensure the web version displays correctly in the
                          375*812 (iPhone 13 mini) size when opened in a
                          browser.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Hero Image and Thumbnail:
                          </span>{' '}
                          Update the hero image and thumbnail.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Limit Plan Completion Date to Goal Completion Date
                            Range:
                          </span>{' '}
                          Ensure the plan completion date cannot exceed the set
                          goal completion date.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Add Bottom Navigation in Statistics:
                          </span>{' '}
                          Add a bottom navigation area at the bottom of the
                          statistics page.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Goal Color on Goal Detail Page:
                          </span>{' '}
                          Ensure the color value of the goal is properly
                          displayed when editing the goal.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Plan Bottom Sheet - Pause Modal Issue:
                          </span>{' '}
                          When creating a 'Pause' modal, ensure the bottom bar
                          works correctly.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Plan Bottom Sheet - Reflection Path Issue:
                          </span>{' '}
                          Fix the issue where the reflection tab path is not
                          following the correct route during "Journal" in the
                          bottom sheet.
                        </span>
                      </li>
                      <span>
                        <span>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              <span className="font-medium text-darkestgrey">
                                Onboarding Page - Change Color:
                              </span>{' '}
                              Change the color of the "Generate recommentations"
                              button on the onboarding page.
                            </span>
                          </li>
                        </span>
                      </span>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Change Color on Weekday Selection in Plans:
                          </span>{' '}
                          When selecting a weekday in the plans section, change
                          its color to gray.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Goal Edit Page - Plan Edit Issue:
                          </span>{' '}
                          Fix the issue where plans cannot be edited from the
                          goal edit page.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            Pause Toggle Activation Issue:
                          </span>{' '}
                          Fix the issue where the pause toggle is not
                          activating.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          <span className="font-medium text-darkestgrey">
                            "Goal Added" Modal Design
                          </span>{' '}
                          Update the design of the modal that shows when a goal
                          is added.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* QA Ends */}
            </div>
          </section>
          {/* Deliver ends */}

          {/* Retrospect starts */}
          <div className="bg-[#fafafa] py-16">
            <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
              <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
                Retrospect
              </h3>

              <div className="flex flex-col gap-24">
                {/* What I Learned Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🤗</span>{' '}
                    <span>What I Learned</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Wireframes at the Earlier Stage:
                        </span>
                        <div className="ml-4">
                          We created wireframes for the goal addition flow and
                          the statistics viewing flow.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={WireframesImg}
                              alt="Goal-Setting Timeframe"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* What I Learned Ends */}

                {/* Areas to Improve Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🚀</span>{' '}
                    <span>Areas to Improve</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Information Architecture:
                        </span>
                        <div className="ml-4">
                          We have created an information architecture diagram
                          that includes key features of our service, such as
                          adding goals and plans, reflection day, and statistic
                          page.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img src={IAImg} alt="Information Architecture" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Areas to Improve Ends */}

                {/* Scalable Parts Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🏗️</span>{' '}
                    <span>Scalable Parts</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ User Flow:</span>
                        <div className="ml-4">
                          We have mapped out the entry points of key features
                          and flow toward achieving user goals.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={UserFlowImg}
                              alt="Information Architecture"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Scalable Parts Ends */}
              </div>
            </section>
          </div>
          {/* Retrospect ends */}
        </section>
      </div>
    </section>
  );
}
