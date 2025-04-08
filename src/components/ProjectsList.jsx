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
    <section className="flex flex-col gap-12 p-14 pb-32 max-w-7xl mx-auto">
      <SectionTitle title="Projects" />

      <ul className="text-lg flex flex-col gap-20">
        {/* Project 01 */}
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/lucid"
            type="left"
            numOfScreens="2"
            img={LucidImg}
            alt="Lucid Vision Management App Design"
            circleColor="bg-circle-lucid"
            title="Lucid: Vision Management App"
            description="In a market driven by short-term goals and instant rewards, Lucid helps users uncover the deeper purpose behind their plans. Rather than just completing tasks, it empowers them to pursue meaningful goals with clarity and motivation."
          />
        </SlideInFromBottom>

        {/* Project 02 */}
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/hyundai-card"
            type="right"
            numOfScreens="2"
            img={HyundaiCardImg}
            alt="Hyundai Card App UX/UI Improvement"
            circleColor="bg-circle-hyundai-card"
            title="Hyundai Card App UX/UI Improvement"
            description="Lucid aligns users with their vision, boosting inner motivation and streamlining the achievement process to bridge the gap between mindset and goals."
          />
        </SlideInFromBottom>

        {/* Project 03 */}
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/sparta-coding-nb-camp"
            type="left"
            numOfScreens="2"
            img={NBCampImg}
            alt="Sparta Coding NB Camp Website UX Improvement"
            circleColor="bg-circle-np-camp"
            title="Sparta Coding NB Camp Website UX Improvement"
            description="Lucid aligns users with their vision, boosting inner motivation and streamlining the achievement process to bridge the gap between mindset and goals."
            imgWidth="w-[65%]"
          />
        </SlideInFromBottom>

        {/* Project 04 */}
        <SlideInFromBottom>
          <ProjectItem
            to="/projects/local-fresh"
            type="right"
            img={LocalFreshImg}
            alt="Local Fresh: E-commerce App Design"
            circleColor="bg-circle-local-fresh"
            title="Local Fresh E-Commerce App"
            description="Customers want to conveniently order fresh local produce at
          competitive prices, with a reliable and efficient delivery
          system ensuring minimal wait times."
          />
        </SlideInFromBottom>
      </ul>
    </section>
  );
}
