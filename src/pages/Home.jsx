import Hero from '../components/Hero';
import ProjectsList from '../components/shared/ProjectsList';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <section>
      <Hero />
      <ProjectsList />
      <Testimonials />
    </section>
  );
}
