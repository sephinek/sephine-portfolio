import LucidImg from '../assets/lucid.png';
import LocalFreshImg from '../assets/local-fresh.png';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

export default function HomeProjectsList() {
  return (
    <section className="flex flex-col gap-12 p-14">
      <SectionTitle title="Projects" />

      <ul className="text-lg flex flex-col gap-26">
        {/* Project 01 */}
        <ProjectItem
          to="/projects/lucid"
          type="left"
          numOfScreens="2"
          img={LucidImg}
          alt="Lucid Vision Management App Design"
          circleColor="bg-circle-lucid"
          title="Lucid: Vision Management App"
          description="Lucid aligns users with their vision, boosting inner motivation and streamlining the achievement process to bridge the gap between mindset and goals."
        />

        {/* Project 02 */}
        <ProjectItem
          to="/projects/hyundai-card"
          type="right"
          numOfScreens="2"
          img={LucidImg}
          alt="Lucid Vision Management App Design"
          circleColor="bg-circle-lucid"
          title="Hyundai Card Mobile App"
          description="Lucid aligns users with their vision, boosting inner motivation and streamlining the achievement process to bridge the gap between mindset and goals."
        />

        {/* Project 03 */}
        <ProjectItem
          to="/projects/sparta-coding-nb-camp"
          type="left"
          numOfScreens="2"
          img={LucidImg}
          alt="Sparta Coding NB Camp Website"
          circleColor="bg-circle-lucid"
          title="Sparta Coding NB Camp Website UX Improvement"
          description="Lucid aligns users with their vision, boosting inner motivation and streamlining the achievement process to bridge the gap between mindset and goals."
        />

        {/* Project 04 */}
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
      </ul>
    </section>
  );
}
