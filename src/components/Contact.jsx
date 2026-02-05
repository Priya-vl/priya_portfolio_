import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        className="contact-card glass-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact</h2>
        <div className="title-underline" />

        <p className="contact-subtitle">
          Let’s connect! Feel free to reach out for collaborations,
          opportunities, or just a friendly hello.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
