import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import LucidImg from '../assets/lucid.png';
import LocalFreshImg from '../assets/local-fresh.png';
import HyundaiCardImg from '../assets/hyundai-card.png';
import NBCampImg from '../assets/nb-camp.png';
import SlideInFromBottom from './SlideInFromBottom';

export default function ProjectsList() {
  window.lenis?.scrollTo(0);

  return (
    <section className="flex flex-col gap-12 pt-16 pb-32 max-w-5xl mx-auto">
      <SectionTitle title="Selected Works" />

      <ul className="text-lg flex-wrap flex gap-8 justify-center max-w-3xl mx-auto">
        {/* Project 01 */}
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/lucid"
            // type="left"
            // numOfScreens="2"
            img={LucidImg}
            alt="Lucid Vision Management App Design"
            // circleColor="bg-circle-lucid"
            category="Product Design Case Study"
            title="Lucid: End-to-End SaaS Product"
            description="Lucid helps users move beyond short-term achievements, guiding them to uncover deeper motivations and pursue meaningful goals with clarity and sustained drive."
            // imgWidth="w-[80%]"
          />
        </SlideInFromBottom>

        {/* Project 02 */}
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/hyundai-card"
            // numOfScreens="2"
            img={HyundaiCardImg}
            alt="Hyundai Card: Mobile App UX/UI Redesign"
            // circleColor="bg-circle-hyundai-card"
            category="UX/UI Redesign Case Study"
            title="Hyundai Card Mobile App"
            description="Redesigned Hyundai Card’s unique benefits system to make it more intuitive and user-friendly, while preserving its original concept."
            // imgWidth="w-[70%]"
          />
        </SlideInFromBottom>

        {/* 
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/sparta-coding-nb-camp"
            type="left"
            numOfScreens="2"
            img={NBCampImg}
            alt="Education App: Mobile Web UX/UI Improvement"
            circleColor="bg-circle-np-camp"
            title="Education App: Mobile Web UX/UI Improvement"
            description="LFocused on improving the UX/UI of the education mobile website, I enhanced the core user flow to make it easier and more intuitive for students to apply for classes."
            imgWidth="w-[70%]"
          />
        </SlideInFromBottom>


        <SlideInFromBottom>
          <ProjectItem
            to="/projects/local-fresh"
            type="right"
            img={LocalFreshImg}
            alt="Local Fresh: E-Commerce App for Local Produce | UI Design"
            circleColor="bg-circle-local-fresh"
            title="Local Fresh: E-Commerce App for Local Produce | UI Design"
            description="Customers want to conveniently order fresh local produce at
          competitive prices, with a reliable and efficient delivery
          system ensuring minimal wait times."
            imgWidth="w-[70%]"
          />
        </SlideInFromBottom>
        */}
      </ul>
    </section>
  );
}
