import { useRef } from 'react';
import Hero from '../components/Hero';
import Divider from '../components/shared/Divider';
import Recommendations from '../components/Recommendations';
import ProjectsList from '../components/ProjectsList';

export default function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <Hero onClickDesignAndCode={scrollToProjects} />
        <span ref={projectsRef}>
          <Divider icon="⛳️" />
        </span>
        <section>
          <ProjectsList />
        </section>
        {/* <Divider icon="⛳️" /> */}
      </div>
      <Recommendations />
    </section>
  );
}
