
<div className="bg-blobs">
  <span className="b1"></span>
  <span className="b2"></span>
  <span className="b3"></span>
  <span className="b4"></span>
</div>

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
