import { motion } from "framer-motion";
import lipLogo from "../assets/lip_logo.png";
import ashaLogo from "../assets/asa.png";

const projects = [
  {
    title: "LipDecoder",
    description:
      "Developed a deep learning-based lip reading system that converts silent video into meaningful text using computer vision techniques.",
    image: lipLogo, // ✅ FIXED
    tags: ["Deep Learning", "Python", "Computer Vision", "NLP"],
    github: "https://github.com/Priya-vl/LIP_DECODER-",
  },
  {
    title: "Asha – AI Chatbot",
    description:
      "ASHA AI is an intelligent chatbot designed to support women in career growth. Built for the ASHA AI Hackathon 2024 with AI-driven insights and interactive conversations.",
    image: ashaLogo, // ✅ FIXED
    tags: ["NLP", "RAG", "Core AI Engine", "Python", "Streamlit", "API Integration"],
    github: "https://github.com/Priya-vl/Asha-AI",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work spanning AI, Machine Learning, and Full-Stack Development.
        </p>

        <div className="projects-grid two-projects">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card glass-card"
              whileHover={{ y: -8 }}
            >
              {/* ✅ IMAGE FIX */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
