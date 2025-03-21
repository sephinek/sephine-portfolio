import Hero from '../components/Hero';
import Divider from '../components/shared/Divider';
import ProjectsList from '../components/HomeProjectsList';
import Testimonials from '../components/Testimonials';
import { useRef } from 'react';

export default function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <Hero onClickDesignAndCode={scrollToProjects} />
      <Divider icon="⛳️" />
      <section ref={projectsRef}>
        <ProjectsList />
      </section>
      <Divider icon="⛳️" />
      <Testimonials />

      <div></div>
    </section>
  );
}
