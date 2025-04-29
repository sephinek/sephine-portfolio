import { CgArrowLongRight } from 'react-icons/cg';
import Slider from 'react-slick';

import CarouselImg01 from '../../assets/nb-camp-solution01.png';
import CarouselImg02 from '../../assets/nb-camp-solution02.png';
import SWOTAnalysisImg from '../../assets/hyundai-swot.png';
import VoCImg from '../../assets/hyundai-voc.png';
import MarketResearchImg from '../../assets/hyundai-market.png';
import BenefitsImg01 from '../../assets/hyundai-benefits01.png';
import BenefitsImg02 from '../../assets/hyundai-benefits02.png';
import CompetitorAnalysisImg from '../../assets/hyundai-competitor-analysis.png';
import FocusGroupImg from '../../assets/hyundai-focus-group.png';
import KeyProblemsImg from '../../assets/hyundai-key-problems.png';
import ProblemDefinitionImg from '../../assets/hyundai-problem-definition.png';
import HMWImg from '../../assets/hyundai-hmw.png';
import SolutionsImg from '../../assets/hyundai-solutions.png';

export default function SpartaCodingNBCamp() {
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
    <section className="pt-6 text-base leading-loose tracking-wider">
      <div className="flex flex-col">
        <section className="max-w-7xl mx-auto flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-8 max-w-[85%] mx-auto">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-medium text-grey">
                UX/UI Case Study
              </span>
              <h2 className="text-[42px] font-medium text-black">
                Education App: Mobile Web UX/UI Improvement
              </h2>
            </div>

            <Slider {...settings}>
              <div>
                <img
                  src={CarouselImg01}
                  alt="image 1"
                  className="border-2 border-grey rounded-4xl w-[95%] mx-auto"
                />
              </div>
              <div>
                <img
                  src={CarouselImg02}
                  alt="image 2"
                  className="border-2 border-grey rounded-4xl w-[95%] mx-auto"
                />
              </div>
            </Slider>
          </div>
        </section>

        <section className="flex flex-col gap-16">
          {/* Overview starts */}
          <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto mt-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg uppercase tracking-wider text-hyundai-card">
                Overview
              </h3>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-darkgrey">
                  This platform allows students to apply for live classes every
                  quarter. I improved the UX/UI to help students quickly find
                  key information and increase the conversion rate for
                  pre-registering or signing up for notifications. My focus was
                  on user research, including usability testing, defining issues
                  with the existing design, and creating solutions with visual
                  designs.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-12 my-4 border-1 border-lightgrey p-6 rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-hyundai-card-opacity">
                    MY ROLE
                  </span>
                  <span className="text-base text-mediumgrey">
                    Product Designer
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-hyundai-card-opacity">
                    TEAM
                  </span>
                  <span className="text-base text-mediumgrey">
                    Solo Project
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-hyundai-card-opacity">
                    TIMELINE
                  </span>
                  <span className="text-base text-mediumgrey">
                    1 weeks (Q4 2024)
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-hyundai-card-opacity">
                    TOOLS
                  </span>
                  <span className="text-base text-mediumgrey">Figma</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl uppercase tracking-widest">
                  What is the problem?
                </h3>
                <p className="text-darkgrey">
                  The core user flow of this educational mobile web,
                  specifically for students pre-registering or signing up for
                  notifications, needs improvement to help students effectively
                  navigate the important information for registering for
                  upcoming live classes.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-medium text-2xl uppercase tracking-widest">
                  Design Process
                </h3>
                <ul className="flex items-center gap-2 flex-wrap text-[13px]">
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Defining the purpose of usability testing
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Participant recruitment announcement
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Usability testing scenarios
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Documenting the process
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Deriving insights
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Issues with the existing screens and their rationale
                  </li>
                  <span>
                    <CgArrowLongRight className="text-mediumgrey" />
                  </span>
                  <li className="text-hyundai-card-opacity font-medium rounded-lg p-2 border-[1px] border-hyundai-card-opacity flex items-center justify-center shrink-0">
                    Design Solutions
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Overview ends */}

          {/* Discovery starts */}
          <div className="bg-[#F9F9F9] py-16">
            <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
              {/* <h3 className="font-semibold text-lg uppercase tracking-wider text-hyundai-card">
            Discovery
          </h3> */}

              <div className="flex flex-col gap-24">
                {/* Market Research Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">🔍</span>{' '}
                    <span>Usability Testing</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Purpose of Usability Testing:
                        </span>
                        <div className="ml-4">
                          Hyundai Card's brand philosophy centers on{' '}
                          <span className="font-medium">
                            "differentiation."{' '}
                          </span>
                          This means taking a unique and creative approach in
                          all of its activities, setting itself apart from other
                          card companies. Guided by the motto "different from
                          others,"{' '}
                          <span className="font-medium">
                            Hyundai Card consistently strives to offer new and
                            distinctive experiences to customers
                          </span>
                          , with a strong focus on{' '}
                          <span className="font-medium">
                            innovation, creativity, and customer-centric
                            services
                          </span>
                          .
                        </div>
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Main Target Audience & Reasons for Using Hyundai
                          Card:
                        </span>
                        <div className="ml-4">
                          Hyundai Card's primarily targets{' '}
                          <span className="font-medium">
                            married professionals in their 30s-50s
                          </span>{' '}
                          who value{' '}
                          <span className="font-medium">
                            convenience and efficiency
                          </span>
                          .
                        </div>
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              M-Point System:{' '}
                            </span>
                            Industry-leading point rewards with a wide range of
                            users
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              Personalized Services:{' '}
                            </span>
                            Tailored spending insights based on consumption
                            patterns
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              Easy Payments & Digital Innovation:{' '}
                            </span>
                            Exclusive support for Apple Pay in Korea
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              PLCC (Co-branded Cards):{' '}
                            </span>
                            High rewards and benefits through brand partnerships
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              Cultural Marketing & Brand Image:{' '}
                            </span>
                            Strengthens loyalty with events like Super Concerts
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium flex flex-col gap-1">
                          ▸ SWOT Analysis:
                        </span>
                        <div className="ml-4">
                          We decided to{' '}
                          <span className="font-medium">
                            retain Hyundai Card's brand philosophy while{' '}
                            focusing on its unique strengths and opportunities
                          </span>{' '}
                          identified through the SWOT analysis to define our
                          improvement direction.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex flex-col gap-8 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center">
                            <img
                              src={SWOTAnalysisImg}
                              alt="Identifies the cord issue point and the churn point"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium flex flex-col gap-1">
                          ▸ Voice of Customer (VoC) Analysis:
                        </span>
                        <div className="ml-4">
                          Based on our VoC research, users expressed discomfort
                          in four key areas:{' '}
                          <span className="italic">
                            difficulties in redeeming points and using benefits
                          </span>
                          , <span className="italic">an unintuitive UI</span>,
                          and{' '}
                          <span className="italic">
                            challenges when interacting with the chatbot
                          </span>{' '}
                          or reaching a human agent. Additionally, many users
                          mentioned{' '}
                          <span className="italic">
                            the need for a map feature to easily locate stores
                            that accept Apply Pay
                          </span>
                          .
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex flex-col gap-8 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center">
                            <img
                              src={VoCImg}
                              alt="Identifies the cord issue point and the churn point"
                              className="rounded-2xl"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium flex flex-col gap-1">
                          ▸ Market Research:
                        </span>
                        <div className="ml-4 mb-2">
                          According to a survey by KBanker,{' '}
                          <span className="font-medium">
                            the top factor people consider when choosing a
                            credit card is the type of benefits
                          </span>
                          —such as discounts, points, or mileage—
                          <span className="font-medium">
                            accounting for 44.6% of responses.
                          </span>
                        </div>
                        <div className="ml-4">
                          Additionally, an analysis by Data&Research found that
                          in the first half of 2024, KB Kookmin Card's 'KB Pay'
                          received the highest interest (measured by number of
                          posts) as the leading digital platform among Korean
                          credit card companies, followed by Shinhan Card's 'SOL
                          Pay' and Samsung Card.{' '}
                          <span className="font-medium">
                            Hyundai Card ranked fourth.
                          </span>
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex items-center gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center">
                            <img
                              src={MarketResearchImg}
                              alt="The Most Important Factor to Consider When Choosing a Credit Card and Trend Graph of Major Credit Card Companies’ Platform Popularity in the First Half of the Year"
                              className="rounded-2xl"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium flex flex-col gap-1">
                          ▸ A Closer Look at Hyundai Card's "3-Tier Benefits
                          System" & Additional VoC Research:
                        </span>
                        <div className="ml-4 mb-2">
                          Hyundai Card has developed its own proprietary{' '}
                          <span className="font-medium">
                            "3-Tier Benefits System"{' '}
                          </span>
                          to deliver more personalized and effective rewards to
                          its users.
                        </div>
                        <div className="ml-4 mb-2">
                          However, based on further VoC research, while the
                          strategic idea of a differentiated benefits structure
                          was positively received,{' '}
                          <span className="font-medium">
                            many users expressed confusion about the concept
                            itself. They found the system difficult to
                            understand and were unsure how to actually use it
                            within the app.
                          </span>
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex items-center gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center w-full">
                            <img
                              src={BenefitsImg01}
                              alt="The Most Important Factor to Consider When Choosing a Credit Card"
                              className="rounded-2xl"
                            />
                            <span className="text-center text-grey font-medium">
                              In-app Screens of the 3-Tier Benefits System
                            </span>
                          </li>
                        </ul>
                      </div>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              1st Tier ‒ Basic:{' '}
                            </span>
                            Default benefits based on the card you own.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              2nd Tier ‒ Subscription:{' '}
                            </span>
                            Regular subscription to core benefit packages.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              3rd Tier ‒ Personalized Gifts:{' '}
                            </span>
                            Customized discounts, coupons, and event
                            recommendations.
                          </span>
                        </li>
                      </ul>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex items-center gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center">
                            <img
                              src={BenefitsImg02}
                              alt="The Most Important Factor to Consider When Choosing a Credit Card"
                              className="rounded-2xl"
                            />
                            <span className="text-center text-grey font-medium">
                              VoC on Hyundai Card's 3-Tier Benefits System
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black">
                        <span className="font-medium flex flex-col gap-1">
                          ▸ Competitor Analysis of Benefit Flows:
                        </span>
                        <div className="ml-4 mb-2">
                          We analyzed the benefit flows of the top four card
                          apps based on our previous market research. While
                          competitors clearly label their offerings with terms
                          like ‘coupon’ and ‘benefit,’ Hyundai Card’s
                          proprietary 3-Tier System lacks intuitive clarity,
                          making it difficult for users to understand and
                          navigate.{' '}
                          <span className="font-medium">
                            "3-Tier Benefits System"{' '}
                          </span>
                          to deliver more personalized and effective rewards to
                          its users.
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex items-center gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center">
                            <img
                              src={CompetitorAnalysisImg}
                              alt="The Most Important Factor to Consider When Choosing a Credit Card"
                              className="rounded-2xl"
                            />
                            <span className="text-center text-grey font-medium">
                              In-app Screens of the 3-Tier Benefits System
                            </span>
                          </li>
                        </ul>
                      </div>
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
                        <span className="font-medium">
                          ▸ Focus Group Interview:
                        </span>
                        <div className="ml-4">
                          Due to limited project time, we conducted a focus
                          group interview with three target users who have
                          experience using the Hyundai Card app. \
                        </div>
                      </span>
                      <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              Interview Purpose: <br />
                            </span>
                            1. Understand user experience, satisfaction, and
                            areas for improvement regarding the 3-Tier Benefit
                            Service.
                            <br /> 2. Identify the value the service provides
                            and any problems users face.
                            <br />
                            3. Gain a deeper understanding of user needs and
                            expectations.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              Target Participants: <br />
                            </span>
                            Users in their 20s and 30s who have experience using
                            Hyundai Card's 3-Tier Benefit Service.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span>•</span>
                          <span>
                            <span className="font-medium text-darkestgrey">
                              Interview Flow:
                              <br />{' '}
                            </span>
                            1. Introduction & Background
                            <br /> 2. Experience with Hyundai Card's 3-Tier
                            Benefit Service
                            <br /> 3. Value and Effectiveness of the Service
                            <br /> 4. Expectations and Areas for Improvement
                            <br /> 5. Closing Questions
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">
                          ▸ Key Problems and Prioritization
                        </span>
                        <div className="ml-4">
                          Based on the insights collected from the focus group
                          interview, we created an affinity diagram to identify
                          key issues. We then prioritized the problems using two
                          axes:{' '}
                          <span className="font-medium">
                            User Pain Points (Low-High)
                          </span>{' '}
                          and{' '}
                          <span className="font-medium">
                            Impact on Users (Unclear - Clear)
                          </span>{' '}
                          .
                        </div>
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex flex-col gap-8 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex flex-col items-center gap-2">
                            <img
                              src={FocusGroupImg}
                              alt="Goal-Setting Timeframe"
                              className="rounded-2xl"
                            />
                            <span className="italic text-grey font-medium">
                              Affinity Diagram
                            </span>
                          </li>
                          <li className="flex flex-col items-center">
                            <img
                              src={KeyProblemsImg}
                              alt="Identifies the cord issue point and the churn point"
                              className="rounded-2xl"
                            />
                            <span className="italic text-grey font-medium">
                              Key Problems and Prioritization
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Research Ends */}
              </div>
            </section>
          </div>
          {/* Discovery ends */}

          {/* Define starts */}
          <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
            {/* <h3 className="font-semibold text-lg uppercase tracking-wider text-hyundai-card">
          DEFINE
        </h3> */}

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
                        We defined the core issue of this project as follows:
                      </div>
                    </span>

                    <span className="ml-4 font-medium text-darkestgrey">
                      The lack of clear explanations regarding the concept and
                      usage of the 3-Tier System benefits has led to
                      difficulties for customers in understanding and utilizing
                      the service. As a result, customers are unable to fully
                      take advantage of the benefits, causing inconvenience.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center py-4">
                  <ul className="flex flex-col gap-8 leading-relaxed text-darkgrey w-[120%]">
                    <li className="flex flex-col items-center">
                      <img
                        src={ProblemDefinitionImg}
                        alt="Identifies the cord issue point and the churn point"
                        className="rounded-2xl"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* Problem Definition Ends */}

              {/* How Might We (HMW) Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">❔</span>{' '}
                  <span>How Might We (HMW)</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ How Might We (HMW):</span>
                      <div className="ml-4">
                        We conducted HMW (How Might We) sessions to empathize
                        with the customers and reframe the problem.
                      </div>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img src={HMWImg} alt="HMW" className="rounded-2xl" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* How Might We (HMW) Ends */}

              {/* Ideation Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">🧠</span> <span>Ideation</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ What we ideated:</span>
                    </span>
                    <ul className="ml-4 flex flex-col gap-2 leading-relaxed text-darkgrey">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          Benefits that I can use but haven’t… Show them in the
                          Hyundai Card payment history?
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          3-Tier System – “Which tier would you like to use?”
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Show categories in a dropdown.</span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          UX writing is also not helping at all with the user
                          experience.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          The different tiers in the 3-Tier system feel like
                          different ranks – how to address this?
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>
                          The save location should be moved to a more intuitive
                          place.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Ideation Ends */}

              {/* Solutions Starts */}
              <div className="flex flex-col gap-10">
                <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                  <span className="text-2xl">💡</span> <span>Solutions</span>
                </h3>

                <div className="flex flex-col gap-12 text-base">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl text-black flex flex-col gap-1">
                      <span className="font-medium">▸ Solutions defined:</span>
                    </span>
                    <div className="flex flex-col gap-4 items-center py-4">
                      <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                        <li className="flex gap-2">
                          <img
                            src={SolutionsImg}
                            alt="Goal-Setting Timeframe"
                            className="border-[1px] border-lightgrey rounded-2xl"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Solutions Ends */}
            </div>
          </section>
          {/* Define ends */}

          {/* Develop starts */}
          <div className="bg-[#FFF5F5] py-16">
            <section className="flex flex-col gap-10 max-w-[800px] w-[800px] mx-auto">
              {/* <h3 className="font-semibold text-lg uppercase tracking-wider text-lucid">
            DEVELOP
          </h3> */}

              <div className="flex flex-col gap-24">
                {/* As Is - To Be Starts */}
                <div className="flex flex-col gap-10">
                  <h3 className="font-medium text-xl uppercase tracking-widest flex items-baseline gap-2">
                    <span className="text-2xl">📲</span>{' '}
                    <span>As Is - To Be</span>
                  </h3>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ As Is - To Be 1:</span>
                        {/* <div className="ml-4">
                      We created wireframes for the goal addition flow and
                      the statistics viewing flow.
                    </div> */}
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={CarouselImg01}
                              alt="Goal-Setting Timeframe"
                              className="rounded-2xl"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-12 text-base">
                    <div className="flex flex-col gap-4">
                      <span className="text-xl text-black flex flex-col gap-1">
                        <span className="font-medium">▸ As Is - To Be 2:</span>
                        {/* <div className="ml-4">
                      We created wireframes for the goal addition flow and
                      the statistics viewing flow.
                    </div> */}
                      </span>
                      <div className="flex flex-col gap-4 items-center py-4">
                        <ul className="flex gap-2 leading-relaxed text-darkgrey w-[120%]">
                          <li className="flex gap-2">
                            <img
                              src={CarouselImg02}
                              alt="Goal-Setting Timeframe"
                              className="rounded-2xl"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* As Is - To Be Ends */}
              </div>

              <span className="self-center py-10 tracking-normal">
                Thank you for reading my case study! 🌿
              </span>
            </section>
          </div>
          {/* Develop ends */}
        </section>
      </div>
    </section>
  );
}
