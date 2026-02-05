import { motion } from "framer-motion";
import TypingText from "./TypingText";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I&apos;m <span>V Priya</span>
        </h1>

        {/* Typing animation */}
        <TypingText />

        <p>
          AI & Machine Learning Undergraduate aspiring Data Scientist &
          Full-Stack Developer. I bridge the gap between data insights and
          high-performance interfaces using ML and Computer Vision.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
