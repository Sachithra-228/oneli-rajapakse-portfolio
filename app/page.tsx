import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { QualityMindset } from "@/components/QualityMindset";
import { Skills } from "@/components/Skills";
import { Statement } from "@/components/Statement";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <QualityMindset />
        <Statement />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
