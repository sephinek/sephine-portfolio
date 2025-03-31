import LucidImg from '../assets/lucid.png';
import LocalFreshImg from '../assets/local-fresh.png';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

export default function ProjectsList() {
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
          description="In a market driven by short-term goals and instant rewards, Lucid helps users uncover the deeper purpose behind their plans. Rather than just completing tasks, it empowers them to pursue meaningful goals with clarity and motivation."
        />
      </ul>
    </section>
  );
}
