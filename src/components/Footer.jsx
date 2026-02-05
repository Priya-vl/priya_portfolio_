import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-glass">
      <p className="footer-text">
        © 2026   V Priya 
      </p>

      <div className="footer-icons">
        <a
          href="https://github.com/Priya-vl"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/v-priya-9a6034284/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="https://x.com/priya_vl"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
