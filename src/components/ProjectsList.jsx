import LucidImg from '../assets/lucid.png';
import LocalFreshImg from '../assets/local-fresh.png';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

export default function ProjectsList() {
  return (
    <section className="flex flex-col gap-16 p-16">
      <SectionTitle title="Projects" />

      <ul className="text-lg flex flex-col gap-30">
        {/* Project 01 */}
        <ProjectItem
          type="left"
          numOfScreens="2"
          img={LucidImg}
          alt="Lucid Vision Management App Design"
          circleColor="bg-circle-lucid"
          title="Lucid Vision Management App"
          description="Lucid aligns users with their vision, boosting inner motivation and streamlining the achievement process to bridge the gap between mindset and goals."
        />

        {/* Project 02 */}
        <ProjectItem
          type="right"
          img={LocalFreshImg}
          alt="Local Fresh E-commerce App Design"
          title="Local Fresh E-Commerce App"
          description="Customers want to conveniently order fresh local produce at
                competitive prices, with a reliable and efficient delivery
                system ensuring minimal wait times."
        />

        {/* Project 03 */}
        <ProjectItem
          type="left"
          img={LocalFreshImg}
          alt="Local Fresh E-commerce App Design"
          title="Local Fresh E-Commerce App"
          description="Customers want to conveniently order fresh local produce at
                competitive prices, with a reliable and efficient delivery
                system ensuring minimal wait times."
        />

        {/* Project 04 */}
        <ProjectItem
          type="right"
          img={LocalFreshImg}
          alt="Local Fresh E-commerce App Design"
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
