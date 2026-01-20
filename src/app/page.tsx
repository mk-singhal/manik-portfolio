import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
