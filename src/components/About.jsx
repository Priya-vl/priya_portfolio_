import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* LEFT: IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="image-animate">
            <img src={profileImg} alt="V Priya" />
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            I am an AI & Machine Learning undergraduate with a deep-seated passion for the entire data journey. 
            I find my flow in the transformation of raw, messy data into clean, actionable insights, using data analysis 
            to uncover the stories hidden within datasets. I believe that great AI starts with high-quality data, 
            and I take pride in the meticulous process of preparing datasets for complex modeling.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
           My expertise bridges the gap between {" "}<strong> Data Science</strong> and {" "}
            <strong> Full-Stack Development</strong>. I don't just build Machine Learning and Deep Learning models. 
            I integrate them into high-performance applications that solve real-world problems. 
            Whether I’m fine-tuning a neural network for Computer Vision tasks or crafting a 
            seamless user interface, my goal is to create intelligent systems that are both 
            powerful and intuitive.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Beyond the code, I am fascinated by the intersection of intelligence
            and security. I strive to build applications that are not only
            data-driven but also robust and secure, ensuring that the next
            generation of smart software is built on a foundation of integrity.
            I am constantly exploring emerging technologies to stay at the
            forefront of this rapidly evolving field, always looking for the
            next challenge to solve.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
