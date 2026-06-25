import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Services />
      <Projects />
      <ContactCTA />
    </>
  );
}
