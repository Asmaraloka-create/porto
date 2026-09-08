import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Thoughts from '../components/Thoughts';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Marquee />
      <Services />
      <Projects />
      <Testimonials />
      <Thoughts />
      <Contact />
    </>
  );
}
