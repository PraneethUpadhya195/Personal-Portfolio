import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Skills, Projects, Publications, Education, Contact, Footer } from "./components/Sections";
import "./index.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
