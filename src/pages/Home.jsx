import { useRef } from 'react';
import Hero from '../components/Hero';
import Divider from '../components/shared/Divider';
import Recommendations from '../components/Recommendations';
import ProjectsList from '../components/ProjectsList';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black pt-14">
      <div className="max-w-5xl mx-auto">
        <Hero onClickDesignAndCode={scrollToProjects} />
        <span ref={projectsRef}>{/* <Divider icon="⛳️" /> */}</span>
        <section>
          <ProjectsList />
        </section>
        {/* <Divider icon="⛳️" /> */}
      </div>

      <Recommendations />

      <div className="max-w-5xl w-[90%] mx-auto border-b-[0.5px] border-darkgrey my-12"></div>
      <section className="max-w-5xl w-[90%] pb-20 gap-4 mx-auto flex flex-col">
        <SectionTitle title="Get in touch ✨" align="left" color="primary" />
        <div className="flex gap-3 items-center text-xl">
          <span className="text-lightergrey font-sebmibold">
            ✉️&nbsp;sephine.k31@gmail.com
          </span>
          <div>
            <Button to="/contact" label="Contact" currentPathname="/" />
          </div>
        </div>
      </section>
    </section>
  );
}
