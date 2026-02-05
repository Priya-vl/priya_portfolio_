import { motion } from "framer-motion";
import {
  Settings,
  Code2,
  Braces,
  Layout,
  Zap,
  BrainCircuit,
  LineChart,
  BarChart3,
  Palette,
  Globe,
  Cpu,
  Binary,
  Eye,
  MessageSquare,
  Link,
  Smile,
  Box,
  Server,
  Github,
  Cloud,
} from "lucide-react";

/* =========================
   SKILLS DATA
========================= */
const skills = {
  proficient: [
    { name: "Python", icon: <Settings className="skill-icon text-blue-400" /> },
    { name: "JavaScript", icon: <Code2 className="skill-icon text-yellow-400" /> },
    { name: "TypeScript", icon: <Braces className="skill-icon text-blue-500" /> },
    { name: "React.js", icon: <Layout className="skill-icon text-cyan-400" /> },
    { name: "FastAPI", icon: <Zap className="skill-icon text-emerald-400" /> },
    { name: "Machine Learning", icon: <BrainCircuit className="skill-icon text-purple-400" /> },
    { name: "Scikit-Learn", icon: <LineChart className="skill-icon text-orange-400" /> },
    { name: "NumPy & Pandas", icon: <BarChart3 className="skill-icon text-blue-300" /> },
    { name: "Tailwind CSS", icon: <Palette className="skill-icon text-sky-400" /> },
    { name: "HTML / CSS", icon: <Globe className="skill-icon text-orange-500" /> },
  ],

  familiar: [
    { name: "Deep Learning", icon: <Cpu className="skill-icon text-red-400" /> },
    { name: "PyTorch / TF", icon: <Binary className="skill-icon text-orange-500" /> },
    { name: "Computer Vision", icon: <Eye className="skill-icon text-indigo-400" /> },
    { name: "NLP & LLMs", icon: <MessageSquare className="skill-icon text-pink-400" /> },
    { name: "LangChain", icon: <Link className="skill-icon text-emerald-500" /> },
    { name: "Hugging Face", icon: <Smile className="skill-icon text-yellow-500" /> },
    { name: "Docker", icon: <Box className="skill-icon text-blue-400" /> },
    { name: "PostgreSQL", icon: <Server className="skill-icon text-indigo-300" /> },
    { name: "Git & GitHub", icon: <Github className="skill-icon text-gray-300" /> },
    { name: "AWS / GCP", icon: <Cloud className="skill-icon text-sky-300" /> },
  ],
};

/* =========================
   COMPONENT
========================= */
const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Tech Stack</h2>

      <div className="skills-wrapper">
        {/* PROficient */}
        <motion.div
          className="skills-card glass-card"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="skills-title proficient">⚡ Proficient</h3>

          <div className="skills-tags">
            {skills.proficient.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-tag"
                whileHover={{ y: -4 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Familiar */}
        <motion.div
          className="skills-card glass-card"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="skills-title familiar">🧊 Familiar</h3>

          <div className="skills-tags">
            {skills.familiar.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-tag"
                whileHover={{ y: -4 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
