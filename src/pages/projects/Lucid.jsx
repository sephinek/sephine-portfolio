import { CgArrowLongRight } from 'react-icons/cg';
import Slider from 'react-slick';

import CarouselImg01 from '../../assets/lucid-carousel01.png';
import CarouselImg02 from '../../assets/lucid-carousel02.png';
import CarouselImg03 from '../../assets/lucid-carousel03.png';
import CarouselImg04 from '../../assets/lucid-carousel04.png';
import CarouselImg05 from '../../assets/lucid-carousel05.png';
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
import CharacterImg01 from '../../assets/lucid-character01.png';
import CharacterImg02 from '../../assets/lucid-character02.png';
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
  window.lenis?.scrollTo(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="pt-20 text-base leading-loose tracking-wider">
      <div className="flex flex-col">
        <section className="max-w-7xl mx-auto flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-8 max-w-[85%] mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-base font-medium text-grey">
                Product Design Case Study
              </span>
              <h2 className="text-[48px] font-medium text-black -mt-1">
                Lucid: Vision Management App
              </h2>
            </div>

            <Slider {...settings}>
              <div>
                <img
                  src={CarouselImg01}
                  alt="image 1"
                  className="border-1 border-lightergrey/50 rounded-4xl w-[95%] mx-auto"
                />
              </div>
              <div>
                <img
                  src={CarouselImg02}
                  alt="image 2"
                  className="border-1 border-lightergrey/50 rounded-4xl w-[95%] mx-auto"
                />
              </div>
              <div>
                <img
                  src={CarouselImg03}
                  alt="image 3"
                  className="border-1 border-lightergrey/50 rounded-4xl w-[95%] mx-auto"
                />
              </div>
              <div>
                <img
                  src={CarouselImg04}
                  alt="image 4"
                  className="border-1 border-lightergrey/50 rounded-4xl w-[95%] mx-auto"
                />
              </div>
              <div>
                <img
                  src={CarouselImg05}
                  alt="image 5"
                  className="border-1 border-lightergrey/50 rounded-4xl w-[95%] mx-auto"
                />
              </div>
            </Slider>
          </div>
        </section>

        <section className="flex flex-col gap-18">
          {/* Overview starts */}
          <section className="flex flex-col gap-14 max-w-[800px] w-[800px] mx-auto mt-20">
            <div className="flex flex-col gap-4 mb-10">
              <h3 className="text-center font-semibold text-lg uppercase tracking-wider text-lucid">
                Overview
              </h3>
            </div>

            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <p className="text-darkgrey w-[85%] mx-auto">
                  <span className="font-medium text-darkestgrey text-2xl font-display">
                    Lucid
                  </span>{' '}
                  is a goal-tracking and management app designed to help users
                  stay focused on their long-term aspirations. While many
                  productivity apps rely on simple routines and instant rewards,
                  Lucid takes a deeper approach. It helps users connect with
                  their ultimate values and find true, internal motivation.
                  Through visualization techniques like image training, it
                  reduces the psychological distance to future goals, making
                  them feel more achievable and emotionally real.
                </p>

                {/* <div className="flex flex-col gap-2 w-[85%] mx-auto">
                  <a
                    href="https://lucid-mvp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-base text-darkestgrey"
                  >
                    <span className="font-bold">→ View Final Prototype</span>{' '}
                    (Recommended: Use a mobile device or Chrome DevTools in
                    Responsive Design Mode for the best experience.)
                  </a>
                  <a
                    href="https://www.figma.com/proto/Jpmf3eOkQjIUYLBN37CYhQ/4%EC%A1%B0-MVP-Lucid?page-id=137%3A50031&node-id=137-51919&viewport=-388%2C-63%2C0.13&t=1hQfVtPFLwTGdgki-1&scaling=min-zoom&content-scaling=fixed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-base text-darkestgrey"
                  >
                    <span className="font-bold">→ View Figma Prototype</span>
                  </a>
                </div> */}
              </div>

              <div className="grid grid-cols-4 gap-12 my-4 border-1 border-lightgrey p-6 rounded-xl w-[85%] mx-auto text-sm">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-lucid-opacity">
                    MY ROLE
                  </span>
                  <span className="text-mediumgrey">
                    Product Designer,
                    <br />
                    Engineer
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-lucid-opacity">TEAM</span>
                  <span className="text-mediumgrey">
                    4 Product Designers,
                    <br />2 Engineers
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-lucid-opacity">
                    TIMELINE
                  </span>
                  <span className="text-mediumgrey">6 weeks (Q1 2025)</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-lucid-opacity">TOOLS</span>
                  <span className="text-mediumgrey">
                    Figma, FigJam, Maze, CSS, React.js
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-medium text-xl uppercase tracking-widest">
                  Background
                </h3>
                <p className="text-darkgrey w-[90%] mx-auto">
                  With so many productivity apps designed to help us build
                  routines,{' '}
                  <span className="text-black italic underline">
                    why do we still struggle to follow through and achieve our
                    goals?
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-medium text-xl uppercase tracking-widest">
                  Design Process
                </h3>
                <ul className="flex items-center gap-2 flex-wrap text-[13px] w-[90%] mx-auto">
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Market Research
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    User Research
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
                    Wireframing
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-lucid-opacity font-medium rounded-lg p-2 border-[1px] border-lucid-opacity flex items-center justify-center shrink-0">
                    Prototyping
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
                    Development
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
          <div className="bg-[#FFF5F5] py-16 relative">
            <section className="flex flex-col gap-14">
              <h3 className="text-center font-semibold text-lg uppercase tracking-wider text-lucid mx-auto max-w-[800px] w-[800px] mb-10">
                Discovery
              </h3>

              <div className="flex flex-col gap-24">
                {/* Market Research Starts */}
                <div className="flex flex-col gap-16">
                  <div className="flex flex-col gap-12">
                    <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 mx-auto max-w-[800px] w-[800px] text-center">
                      {/* <span className="text-2xl">🔍< /span>{' '} */}
                      <span className="font-bold">Market Research</span>
                    </h3>

                    <div className="flex flex-wrap gap-4 items-center w-full">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                  </div>

                  <div className="flex flex-col gap-16 text-base mx-auto max-w-[800px] w-[800px]">
                    <div className="flex flex-col gap-10">
                      <span className="tracking-wider font-medium text-darkestgrey">
                        🎯 The Problem: Why We Set Goals But Rarely Achieve Them
                      </span>

                      <div className="flex flex-col gap-12 w-[90%] mx-auto">
                        <div className="flex flex-col gap-6">
                          <p>
                            While goal-setting is common—especially around
                            milestones like New Year’s—most people don’t follow
                            through. A Forbes survey found only{' '}
                            <span className="font-medium">
                              6% stick to their resolutions
                            </span>
                            , and another study showed just{' '}
                            <span className="font-medium">
                              9% achieve yearly goals
                            </span>
                            .
                          </p>
                        </div>

                        <div className="flex flex-col gap-6">
                          <p className="font-medium">Why?</p>
                          <ul className="flex flex-col gap-1 leading-relaxed">
                            <li className="flex gap-2">
                              <span>•</span>
                              <span>
                                Goals are often unrealistic or too ambitious.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span>•</span>
                              <span>
                                Progress isn’t tracked, making it easy to lose
                                focus.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span>•</span>
                              <span>
                                Juggling too many goals leads to burnout.
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span>•</span>
                              <span>
                                Taking on too many goals at once, leading to
                                burnout.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-8">
                      <span className="tracking-wider font-medium text-darkestgrey">
                        🌍 Social Phenomenon
                      </span>
                      <div className="flex flex-col gap-4 w-[90%] mx-auto">
                        <p>
                          Despite widespread struggles with goal achievement,
                          demand for productivity apps is growing—especially{' '}
                          <span className="font-medium">
                            among Millennials and Gen Z
                          </span>{' '}
                          seeking to optimize daily habits.
                        </p>
                        <p>
                          The post-pandemic shift to remote work accelerated
                          this trend, with U.S.{' '}
                          <span className="font-medium">
                            habit-tracking app downloads rising 25%
                          </span>{' '}
                          in 2020–2021.
                        </p>
                        <p>
                          Yet many apps focus on short-term routines or gamified
                          challenges,{' '}
                          <span className="font-medium">
                            leading to high downloads but poor long-term
                            retention.
                          </span>{' '}
                          In contrast, tools that support flexible, long-term
                          planning keep users engaged.
                        </p>
                        <p>
                          <span className="font-medium">
                            This highlights a clear gap—and opportunity—for
                            solutions that enable lasting, value-driven
                            progress.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Market Research Ends */}

                {/* User Research Starts */}
                <div className="flex flex-col gap-16 text-base">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">User Research</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="flex flex-col gap-8 text-base mx-auto max-w-[800px] w-[800px]">
                        <span className="tracking-wider font-medium text-darkgrey">
                          👥 User Survey
                        </span>

                        <div className="w-[90%] mx-auto">
                          We conducted a user survey to explore how people set
                          and manage their goals. Our survey revealed that{' '}
                          <span className="font-medium">
                            while most people prefer long-term goals, many give
                            up due to a lack of internal motivation, not
                            external barriers.
                          </span>{' '}
                        </div>
                      </span>

                      <div className="flex flex-wrap gap-4 items-center w-full mt-10">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                        <span className="w-full text-center italic text-lightgrey text-sm">
                          Data was sampled from 68 people
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-12 text-base">
                      <span className="flex flex-col gap-8 text-base mx-auto max-w-[800px] w-[800px]">
                        <span className="tracking-wider font-medium text-darkgrey">
                          👩‍💻 In-Depth Interview & Referencing Phychological
                          Document
                        </span>
                        <div className="flex flex-col gap-4 w-[90%] mx-auto">
                          <p>
                            While quantitative research offered broad insights,
                            we wanted to understand why and when people give up
                            on their goals. To dive deeper, we conducted
                            in-depth interviews to empathize with users and
                            uncover the emotional and behavioral patterns behind
                            goal abandonment.
                          </p>{' '}
                          <p>
                            We then analyzed these findings through the lens of
                            the{' '}
                            <span className="italic">
                              Stages of Change theory
                            </span>
                            , which revealed that{' '}
                            <span className="font-medium">
                              successful individuals progressed to the
                              maintenance and completion stages
                            </span>
                            , while{' '}
                            <span className="font-medium">
                              those who failed often struggled in the
                              contemplation or preparation stages and dropped
                              out during action or maintenance
                            </span>
                            .
                          </p>
                        </div>
                      </span>
                      <div className="flex flex-wrap gap-4 items-center w-full">
                        <ul className="flex flex-col gap-8 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
                          <li className="flex flex-col items-center">
                            <img
                              src={InterviewImg01}
                              alt="Goal-Setting Timeframe"
                              className="rounded-xl"
                            />
                            <span className="w-full text-center italic text-lightgrey text-sm mt-3">
                              Summary of User Interview Insights
                            </span>
                          </li>
                          <li className="flex flex-col items-center">
                            <img
                              src={InterviewImg02}
                              alt="Identifies the cord issue point and the churn point"
                            />
                            <span className="w-full text-center italic text-lightgrey text-sm">
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
                <div className="flex flex-col gap-10 text-base">
                  <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                    🚶 Personas & Journey Map
                  </span>

                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-12">
                      <span className="flex flex-col gap-1 mx-auto max-w-[800px] w-[800px]">
                        <div className="flex flex-col gap-4 w-[90%] mx-auto">
                          <p>
                            Based on insights from both quantitative and
                            qualitative research, we created two user personas:{' '}
                            <span className="font-medium">
                              one who struggles with achieving goals, and
                              another who needs guidance after reaching them.
                            </span>{' '}
                            Their journeys helped us identify key pain points
                            and unmet needs across each stage.
                          </p>
                        </div>
                      </span>
                      <div className="flex flex-wrap gap-4 items-center w-full">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                        <span className="w-full text-center italic text-lightgrey text-sm">
                          Personas: Steve and Caitlyn
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex flex-wrap gap-4 items-center w-[90%] max-w-5xl mx-auto">
                        <img
                          src={JourneyMapImg}
                          alt="Identifies the cord issue point and the churn point"
                          className="rounded-2xl"
                        />
                        <span className="w-full text-center italic text-lightgrey text-sm">
                          User Journey Map
                        </span>
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
          <section className="flex flex-col gap-14">
            <h3 className="text-center font-semibold text-lg uppercase tracking-wider text-lucid mx-auto max-w-[800px] w-[800px] mb-10">
              DEFINE
            </h3>

            <div className="flex flex-col gap-24">
              {/* Problem Definition Starts */}
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-16 mx-auto max-w-[800px] w-[800px]">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center">
                    <span className="font-bold">Problems Definition</span>
                  </h3>

                  <div className="flex flex-col gap-16 text-base mx-auto max-w-[800px] w-[800px]">
                    <div className="flex flex-col gap-10">
                      <p className="w-[90%] mx-auto">
                        Users often struggle to achieve their goals not because
                        of a lack of ambition, but due to fragmented planning,
                        unclear purpose, and lack of long-term support. Without
                        defining the value behind their goals, creating
                        actionable plans, and regularly checking progress, they
                        lose motivation and eventually give up.
                      </p>

                      {/* <div className="flex flex-col gap-6 w-[90%] mx-auto">
                        <span className="font-medium">List of Problems:</span>
                        <ul className="ml-4 flex flex-col gap-2 leading-relaxed">
                          <li className="flex gap-2">
                            <span>1. </span>
                            <span>
                              <span className="font-medium">
                                Lack of Meaningful Direction:
                              </span>{' '}
                              Users lose focus and motivation when the deeper
                              value or purpose behind their goals is unclear.
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>2. </span>
                            <span>
                              <span className="font-medium">
                                Planning Challenges:
                              </span>{' '}
                              Users often find it difficult to break down their
                              goals into specific, actionable plans on their
                              own.
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>3. </span>
                            <span>
                              <span className="font-medium">
                                Overwhelming Plans Leads to Drop-off:
                              </span>{' '}
                              When plans are too ambitious or unrealistic, they
                              become hard to follow. As incomplete tasks pile
                              up, users eventually abandon the goal altogether.
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>4. </span>
                            <span>
                              <span className="font-medium">
                                Limited Visibility and Check-ins:
                              </span>{' '}
                              Users struggle to track their progress and conduct
                              regular check-ins, making it hard to stay aligned
                              with their goals over time.
                            </span>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* Problem Definition Ends */}

                {/* Solutions Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center mx-auto max-w-[800px] w-[800px]">
                    {/* <span className="font-">💡</span> */}
                    <span className="font-bold">Problem Statement</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-10">
                      {/* <span className="font-medium mx-auto max-w-[800px] w-[800px]">
                        🧩 Problem Statement:
                      </span> */}
                      <div className="flex flex-col gap-10 text-base mx-auto max-w-[800px] w-[800px]">
                        <p className="w-[90%] mx-auto">
                          How might we help users clarify the value of their
                          goals, visualize their long-term vision, and create
                          realistic, trackable plans—so they can stay motivated
                          and follow through with confidence?
                        </p>

                        {/* <div className="flex flex-col gap-6 w-[90%] mx-auto">
                          <span className="font-medium">
                            List of Solutions:
                          </span>
                          <ul className="ml-4 flex flex-col gap-2 leading-relaxed">
                            <li className="flex gap-2">
                              <span>1. </span>
                              <span>
                                <span className="font-medium">
                                  Support for Setting Direction:
                                </span>{' '}
                                <ul>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Help users reflect on the deeper "why"
                                      behind their goals through onboarding
                                      prompts.
                                    </span>
                                  </li>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Use vision boards to help users visualize
                                      their high-level aspirations.
                                    </span>
                                  </li>
                                </ul>
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span>2. </span>
                              <span>
                                <span className="font-medium">
                                  Support for Effective Planning with AI:
                                </span>{' '}
                                <ul>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Generate AI-powered recommendations for
                                      actionable, realistic plans.
                                    </span>
                                  </li>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Reduce cognitive load and help users take
                                      the first step more easily.
                                    </span>
                                  </li>
                                </ul>
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span>3. </span>
                              <span>
                                <span className="font-medium">
                                  Support for Regular Plan Review:
                                </span>{' '}
                                <ul>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Let users easily adjust, delete, or pause
                                      unrealistic plans.
                                    </span>
                                  </li>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Focus on flexibility and alignment with
                                      long-term vision.
                                    </span>
                                  </li>
                                </ul>
                              </span>
                            </li>
                            <li className="flex gap-2">
                              <span>4. </span>
                              <span>
                                <span className="font-medium">
                                  Prioritize Fostering Intrinsic Motivation:
                                </span>{' '}
                                <ul>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Keep their vision visible to inspire
                                      ongoing effort.
                                    </span>
                                  </li>
                                  <li className="flex gap-2 items-center">
                                    <span>•</span>
                                    <span>
                                      Offer visual and numeric feedback on
                                      progress to build momentum.
                                    </span>
                                  </li>
                                </ul>
                              </span>
                            </li>
                          </ul>
                        </div> */}
                      </div>

                      <div className="flex flex-wrap gap-4 items-center w-full">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
                          <li className="flex gap-2">
                            <img
                              src={SolutionsImg}
                              alt="Goal-Setting Timeframe"
                            />
                          </li>
                        </ul>
                        <span className="w-full text-center italic text-lightgrey text-sm">
                          Pain Points, Needs, Solutions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Solutions Ends */}

                {/* Theoretical Validation Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">
                      Theoretical Validation & Survey
                    </span>
                  </h3>

                  <div className="flex flex-col gap-16 text-base">
                    <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                      <span className="tracking-wider font-medium text-darkgrey">
                        🕰️ Future Time Perspective (FTP) Theory
                      </span>
                      <p className="w-[90%] mx-auto">
                        Future Time Perspective (FTP) Theory supports our
                        approach.{' '}
                        <span className="font-medium">
                          According to FTP, people's attitudes toward goals
                          depend on their psychological, not just temporal,
                          distance from them
                        </span>
                        . To stay motivated and achieve long-term vision,{' '}
                        <span className="font-medium">
                          it's crucial to define goal value, create specific
                          plans, track progress, and visualize one's future self
                        </span>
                        .
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl">
                        <li className="flex gap-2">
                          <img
                            src={FTPTheoryImg}
                            alt="Goal-Setting Timeframe"
                          />
                        </li>
                      </ul>
                    </div>
                    {/* <ul className="flex flex-col gap-2 leading-relaxed text-darkgrey mx-auto max-w-[800px] w-[800px]">
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
                    </ul> */}

                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                        <span className="tracking-wider font-medium text-darkgrey">
                          📝 Survey on FTP Theory and Psychological Distance
                        </span>
                        <p className="w-[90%] mx-auto">
                          To validate the theory in practice, we ran a short
                          survey where users reviewed their original plans and
                          identified ineffective ones. This simple reflection
                          reduced psychological distance, making their goals
                          feel more achievable.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 items-center py-4 w-full">
                        <ul className="flex flex-col gap-10 leading-relaxed text-darkgrey w-[90%] max-w-5xl">
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

                <div className="flex flex-col gap-16">
                  {/* Problem Definition Starts */}

                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    {/* <span className="text-2xl">📊</span>{' '} */}
                    <span className="font-bold">Competitor Analysis</span>
                  </h3>

                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                        <span className="tracking-wider font-medium text-darkgrey">
                          📊 Competitor Analysis & Positioning Map
                        </span>

                        <div className="flex flex-col gap-4 w-[90%] mx-auto">
                          <p>
                            We analyzed six behavior-change apps—MyRoutine,
                            Roubit, Routinery, Habitify, Productive, and
                            GoalKit—focusing on their core features, target
                            users, strengths, weaknesses, and unique offerings.{' '}
                          </p>
                          <p>
                            Based on this, we created a positioning map to
                            define Lucid’s direction and differentiation.{' '}
                            <span className="font-medium">
                              We found that by helping users pursue a higher,
                              long-term goal (“Vision”) with flexible planning
                              and strong internal motivation, Lucid can stand
                              out in the market.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex flex-col gap-10 leading-relaxed text-darkgrey w-[90%] max-w-5xl">
                        <li className="flex flex-col items-center gap-3">
                          <img
                            src={CompetitorImg01}
                            alt="Subjective Answers on Favored Long-Term Goals"
                            // className="w-4/5 mx-auto"
                          />
                          <span className="w-full text-center italic text-lightgrey text-sm">
                            Competitor Analysis
                          </span>
                        </li>
                        <li className="flex flex-col items-center gap-0">
                          <img
                            src={CompetitorImg02}
                            alt="Subjective Answers on Favored Long-Term Goals"
                            // className="w-6/7 mx-auto"
                          />
                          <span className="w-full text-center italic text-lightgrey text-sm">
                            Positioning Map
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Competitor Analysis Ends */}

                {/* Market-Fit Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    {' '}
                    {/* <span className="text-2xl">🎯</span>{' '} */}
                    <span className="font-bold">Hypothesis on Market Fit</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="mx-auto max-w-[800px] w-[800px]">
                      <div className="flex flex-col gap-6 w-[90%] mx-auto">
                        <p>
                          We have defined the market fit between our target
                          users and core value.
                        </p>
                        <ul>
                          <li>
                            <span className="font-medium">Who: </span>People in
                            their 20s and 30s who often struggle to follow
                            through on their goals.
                          </li>
                          <li>
                            <span className="font-medium">How: </span>By
                            offering sustained inner motivation and adaptable
                            planning tools.
                          </li>
                          <li>
                            <span className="font-medium">What: </span>Users can
                            stay on track, build a sense of achievement, and
                            ultimately reach their goals.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                {/* Market-Fit Ends */}

                {/* Business Model Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    {/* <span className="text-2xl">💰</span>{' '} */}
                    <span className="font-bold">
                      Service Format & Business Model
                    </span>
                  </h3>

                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                        <p className="w-[90%] mx-auto">
                          Lucid is designed as a mobile app for easy, on-the-go
                          access. We developed a web app prototype to simulate
                          the mobile experience. Using the Business Model
                          Canvas, we outlined Lucid’s core value propositions,
                          target customers, revenue streams, and key activities.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 items-center py-4 w-full">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] mx-auto max-w-5xl">
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
            </div>
          </section>
          {/* Define ends */}

          {/* Develop starts */}
          <div className="bg-[#FFF5F5] py-16 relative">
            <section className="flex flex-col gap-14">
              <h3 className="text-center font-semibold text-lg uppercase tracking-wider text-lucid mx-auto max-w-[800px] w-[800px] mb-10">
                DEVELOP
              </h3>

              <div className="flex flex-col gap-24">
                {/* Wireframes Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">Initial Wireframes</span>
                  </h3>

                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                        {/* <span className="tracking-wider font-medium text-darkgrey">
                          ✍️ Wireframes at the Earlier Stage
                        </span> */}
                        <p className="w-[90%] mx-auto">
                          We created wireframes for the goal addition flow and
                          the statistics viewing flow.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 items-center py-4 w-[90%] max-w-5xl mx-auto">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-full">
                          <li className="flex gap-2">
                            <img
                              src={WireframesImg}
                              alt="Goal-Setting Timeframe"
                              className="rounded-2xl"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wireframes Ends */}

                {/* Information Architecture Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">
                      Information Architecture (IA)
                    </span>
                  </h3>
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                        {/* <span className="tracking-wider font-medium text-darkgrey">
                          ✍️ Wireframes at the Earlier Stage
                        </span> */}
                        <p className="w-[90%] mx-auto">
                          We have created an information architecture diagram
                          that includes key features of our service, such as
                          adding goals and plans, reflection, and statistics.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 items-center py-4 w-full">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">User Flow</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                      <p className="w-[90%] mx-auto">
                        We have mapped out the entry points of key features and
                        flow toward achieving user goals.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                {/* User Flow Ends */}

                {/* Branding Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">Branding</span>
                  </h3>

                  <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                        <span className="tracking-wider font-medium text-darkgrey">
                          ✨ App Naming
                        </span>
                        <p className="w-[90%] mx-auto max-w-5xl">
                          Inspired by{' '}
                          <span className="italic">lucid dreams</span>, "Lucid"
                          is built on six brand keywords—Vision, Imagination,
                          Planning, Tracking, Achievement, and Reflection—
                          <span className="font-medium">
                            helping users turn their envisioned future into a
                            clear reality
                          </span>
                          .{' '}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 items-center py-4 w-full justify-center">
                        <div className="flex gap-2 max-w-5xl mx-auto self-center">
                          <img src={NamingImg} alt="Lucid in Red" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10">
                        <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                          ⭐️ Character & Visual Identity
                        </span>

                        <div className="flex flex-col gap-10 w-full">
                          <div className="flex flex-col gap-6 mx-auto max-w-[800px] w-[800px]">
                            <p className="w-[90%] mx-auto max-w-5xl">
                              Lucid’s bright red, six-edged character is
                              designed with a doodling technique to feel like an
                              approachable North Star.
                            </p>
                            <ul className="lex flex-col gap-2 leading-relaxed w-[90%] mx-auto max-w-5xl">
                              <li className="flex gap-2">
                                <span>•</span>
                                <span>
                                  <span className="font-medium text-darkestgrey">
                                    Six Points
                                  </span>{' '}
                                  represents Lucid's core values: Vision,
                                  Imagination, Planning, Tracking, Achievement,
                                  and Reflection.
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span>•</span>
                                <span>
                                  <span className="font-medium text-darkestgrey">
                                    Red Color
                                  </span>{' '}
                                  acts as a bold guiding light that inspires
                                  immediate action.
                                </span>
                              </li>
                              <li className="flex gap-2">
                                <span>•</span>
                                <span>
                                  <span className="font-medium text-darkestgrey">
                                    Rounded Design
                                  </span>{' '}
                                  conveys friendliness and flexibility,
                                  supporting adaptable goal-setting.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col gap-4 items-center py-4 w-[90%] max-w-5xl mx-auto">
                            <ul className="flex gap-2 leading-relaxed text-darkgrey w-full">
                              <li className="flex gap-2">
                                <img
                                  src={CharacterImg01}
                                  alt="Lucid character with bright red color and six edges"
                                  className="rounded-2xl"
                                />
                              </li>
                              <li className="flex gap-2">
                                <img
                                  src={CharacterImg02}
                                  alt="Lucid character with bright red color and six edges"
                                  className="w-full object-cover"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-12">
                      <div className="flex flex-col gap-12 text-base">
                        <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                          <span className="tracking-wider font-medium text-darkgrey">
                            📱 App Logo
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
                    </div>
                  </div>
                </div>
                {/* Branding Ends */}

                {/* Design System Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">Design System</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base w-full">
                    <div className="flex flex-col gap-4 w-[90%] mx-auto max-w-5xl">
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey">
                          <li className="flex gap-2">
                            <img src={DesignSystemImg01} alt="Typography" />
                          </li>
                          <li className="flex gap-2">
                            <img src={DesignSystemImg02} alt="Color Palette" />
                          </li>
                        </ul>
                        <ul className="flex gap-2 leading-relaxed text-darkgrey">
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
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">UX Writing Guidelines</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                      <p className="w-[90%] mx-auto">
                        We developed a UX writing guide rooted in Lucid's brand
                        story to ensure a consistent voice across the app. The
                        tone is{' '}
                        <span className="font-medium">
                          friendly, inspirational, and simple yet directive
                        </span>
                        , helping users stay motivated and clear on what to do
                        next.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex gap-2 text-darkgrey w-[90%] max-w-5xl mx-auto">
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
                {/* UX Writing Guidelines Ends */}

                {/* Screen Designs Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">Screen Designs</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4 mx-auto max-w-[800px] w-[800px]">
                      <span className="flex flex-col gap-1 w-[90%] mx-auto max-w-5xl">
                        <p>
                          Here are all the screen designs we created for Lucid,
                          showcasing the full user experience from start to
                          finish.
                        </p>
                      </span>
                    </div>

                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey mx-auto max-w-5xl w-[90%]">
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
                {/* Screen Designs Ends */}

                {/* Prototypes Starts */}

                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">Prototypes</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                      <p className="w-[90%] mx-auto">
                        Lucid offers two prototype versions: a design prototype
                        in Figma and a deployed version of the final app.
                      </p>
                      <div className="flex flex-col gap-3 w-[90%] max-w-5xl mx-auto">
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
                            <div className="flex gap-2">
                              <img
                                className="w-10 h-10"
                                src={NetlifyIcon}
                                alt="Netlify icon"
                              />
                              <span className="text-sm">
                                (Recommended: Use a mobile device or Chrome
                                DevTools in Responsive Design Mode for the best
                                experience.)
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Prototypes Ends */}

                {/* Marketing Video Starts */}
                <div className="flex flex-col gap-16">
                  <h3 className="text-xl font-medium uppercase tracking-wider flex items-baseline gap-2 text-center  mx-auto max-w-[800px] w-[800px]">
                    <span className="font-bold">Marketing Video</span>
                  </h3>
                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                      <p className="w-[90%] mx-auto">
                        One of our team members produced a marketing video to
                        introduce Lucid. I contributed by shaping the key
                        messages and selecting the content featured in the
                        video.
                      </p>
                      <div className="ml-4 flex flex-col gap-3 self-center">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/7AAwWSRU8aM?si=e2MSeWjN2VkjsHtW"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
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
          <section className="flex flex-col gap-14">
            <h3 className="text-center font-semibold text-lg uppercase tracking-wider text-lucid mx-auto max-w-[800px] w-[800px] mb-10">
              DELIVER
            </h3>

            <div className="flex flex-col gap-24">
              {/* Code Starts */}
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 mx-auto max-w-[800px] w-[800px]">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center">
                    <span className="font-bold">Code</span>
                  </h3>
                </div>

                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-12 text-base mx-auto max-w-[800px] w-[800px]">
                    <div className="flex flex-col gap-6 w-[90%] max-w-5xl mx-auto">
                      <p>
                        We developed the web app prototype using{' '}
                        <span className="font-medium">
                          React (JavaScript), CSS, and Recoil for state
                          management
                        </span>
                        .{' '}
                        <span className="font-medium">
                          As a designer with development experience, I led the
                          development phase, contributed directly to the
                          codebase, and collaborated closely with other
                          engineers.
                        </span>{' '}
                        <br />
                        My contributions included:
                      </p>
                      <ul className="flex flex-col gap-2 leading-relaxed">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Managing the GitHub repository and setting
                            development timelines.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Defining key user inputs and structuring how they
                            are stored and updated across the app.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Designing data flow logic for user interactions
                            across key pages, including the Goals List, Goal
                            Detail, and Plan Detail pages.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Building reusable UI components and implementing
                            core interface elements.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Collaborating with engineers to ensure seamless
                            integration between logic and design.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            Leveraging AI tools to streamline debugging and
                            optimize data processing. handling.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Code Ends */}

              {/* Launch Starts */}
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 mx-auto max-w-[800px] w-[800px]">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center">
                    <span className="font-bold">LAUNCH</span>
                  </h3>
                </div>

                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-12 text-base mx-auto max-w-[800px] w-[800px]">
                    <div className="flex flex-col gap-6 w-[90%] max-w-5xl mx-auto">
                      <p>
                        We deployed via{' '}
                        <span className="font-medium">Netlify</span> for
                        seamless hosting and continuous integration.
                        <br />
                        To view the mobile-sized prototype:
                      </p>
                      <ul className="flex flex-col gap-2 leading-relaxed">
                        <li className="flex gap-2">
                          <span>1.</span>
                          <span>
                            Right-click the page and select{' '}
                            <span className="font-medium">Inspect</span>.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>2. </span>
                          <span>
                            Click the{' '}
                            <span className="font-medium">
                              Toggle Device Toolbar
                            </span>{' '}
                            icon or press&nbsp;&nbsp;
                            <span className="font-mono">
                              Ctrl+Shift+M (Cmd+Shift+M on Mac)
                            </span>
                            .
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>3.</span>
                          <span>
                            Set the custom device size to{' '}
                            <span className="font-medium">375 x 812</span>.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Launch Ends */}

              {/* QA Starts */}
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-16 mx-auto max-w-[800px] w-[800px]">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center">
                    <span className="font-bold">QA</span>
                  </h3>
                </div>

                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-10 text-base">
                    <div className="flex flex-col gap-10 mx-auto max-w-[800px] w-[800px]">
                      <p className="w-[90%] max-w-5xl mx-auto">
                        After deploying the app, we conducted QA using a shared
                        Notion sheet. We discovered more detailed issues than
                        expected. To address this, we documented overlooked
                        problems, assigned tasks to team members, and tracked
                        fixes to ensure full resolution.
                      </p>

                      <div className="flex flex-col gap-6 w-[90%] max-w-5xl mx-auto">
                        <span className="font-medium">
                          Key Resolved Issues Included:
                        </span>
                        <ul className="flex flex-col gap-2 leading-relaxed">
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              Hiding the top bar on detail pages to help users
                              focus on their current task
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              Fixing toggle functionality during the pause state
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              Automatically setting the goal duration to one
                              month
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              Restricting plan completion dates to stay within
                              goal's timeframe
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>Correctly displaying goal color values</span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              Adjusting weekday selection colors in the plan
                              setup
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>
                              Redirecting logged-in users to the main page
                              during onboarding
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span>•</span>
                            <span>Adding a 404 "Not Found" error page</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center py-4 w-full">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey mx-auto max-w-5xl w-[90%]">
                        <li className="flex gap-2">
                          <img src={QAImg} alt="QA Notion Sheet" />
                        </li>
                      </ul>
                      <span className="w-full text-center italic text-lightgrey text-sm">
                        Notion QA Sheet
                      </span>
                    </div>
                  </div>
                </div>
                {/* QA Ends */}
              </div>
            </div>
          </section>
          {/* Deliver ends */}

          {/* Retrospect starts */}
          <div className="bg-[#fafafa] py-16">
            <section className="flex flex-col gap-14">
              <h3 className="text-center font-semibold text-lg uppercase tracking-wider text-lucid mx-auto max-w-[800px] w-[800px] mb-10">
                Retrospect
              </h3>

              <div className="flex flex-col gap-24">
                {/* What I Learned Starts */}
                <div className="flex flex-col gap-16 mx-auto max-w-[800px] w-[800px]">
                  <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center">
                    <span className="font-bold">What I Learned</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-4">
                        <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                          💁‍♀️ Clear Communication
                        </span>
                        <p className="w-[90%] mx-auto">
                          As the project progressed, it was easy for everyone to
                          start interpreting things differently. Regular
                          check-ins and open conversations helped us stay on the
                          same page and work smoothly together.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                          🙆‍♀️ Effective Time Management & Planning Ahead
                        </span>
                        <p className="w-[90%] mx-auto">
                          Setting clear timelines and sharing schedules early
                          made a big difference. Even when unexpected issues
                          came up, having a solid plan (especially in the Define
                          phase) helped us handle them calmly and keep things
                          moving.
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                          💁‍♀️ Staying True to Our Core
                        </span>
                        <p className="w-[90%] mx-auto">
                          Throughout the process, we kept coming back to what
                          really matters—our users and the value we promised to
                          deliver. That focus helped us make better decisions
                          and keep the project on the right track.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* What I Learned Ends */}

                {/* Areas to Improve Starts */}

                <div className="flex flex-col gap-24">
                  {/* What I Learned Starts */}
                  <div className="flex flex-col gap-16 mx-auto max-w-[800px] w-[800px]">
                    <h3 className="font-medium text-xl uppercase tracking-wider flex items-baseline gap-2 text-center">
                      <span className="font-bold">Areas to Improve</span>
                    </h3>

                    <div className="flex flex-col gap-12 text-base">
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                          <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                            🔔 Notification Feature
                          </span>
                          <p className="w-[90%] mx-auto">
                            Originally planned but postponed due to priority,
                            the notification feature will focus on an
                            event-based Check-in system with playful visuals to
                            encourage regular engagement and support long-term
                            goals.
                          </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                            📈 Revenue Model
                          </span>
                          <p className="w-[90%] mx-auto">
                            Lucid can expland into B2B by helping companies
                            support employee growth and communicate
                            organizational goals.
                          </p>
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="tracking-wider font-medium text-darkgrey mx-auto max-w-[800px] w-[800px]">
                            ✨ Immediate Rewards
                          </span>
                          <p className="w-[90%] mx-auto">
                            To boost engagement and DAU, we plan to add badges
                            and community features that offer quick wins while
                            reinforcing long-term goal tracking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Areas to Improve Ends */}
              </div>

              <span className="self-center py-10 tracking-normal text-xl">
                Thank you for reading my case study! 🌿
              </span>
            </section>
          </div>
          {/* Retrospect ends */}
        </section>
      </div>
    </section>
  );
}
