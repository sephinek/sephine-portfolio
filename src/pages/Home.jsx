import Hero from '../components/Hero';
import Divider from '../components/shared/Divider';
import ProjectsList from '../components/ProjectsList';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <section>
      <Hero />
      <Divider icon="⛳️" />
      <ProjectsList />
      <Divider icon="⛳️" />
      <Testimonials />
    </section>
  );
}
