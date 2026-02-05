const Publications = () => {
  return (
    <section id="publications">
      <h2 className="section-title">Publications</h2>
      <div className="section-underline"></div>

      <p className="section-subtitle">
        My academic research contributions in the field of Deep Learning,
        NLP, and Multilingual Visual Speech Recognition.
      </p>

      <div className="publications-grid">
        <div className="pub-card glass-card">
          <h3 className="pub-title">
            Lip Decoder: Converting Lip Movements to Text Using NLP and Deep Learning
          </h3>

          <p className="pub-authors">
            <strong>V Priya</strong>, Sayanthi Mondal, Mouli Janghel, Dhraavani K,  
            Dr. Gayatri Tanuja G
          </p>

          <p className="pub-affiliation">
            Department of Artificial Intelligence and Machine Learning,  
            Bangalore Technological Institute, Bengaluru, India
          </p>

          <p className="pub-abstract">
            Lip Decoder is a deep learning and NLP-based framework that converts
            lip movements into text without relying on audio signals. The system
            supports multilingual recognition across English, Hindi, Tamil,
            Kannada, and Telugu by integrating CNNs for visual feature extraction,
            RNNs and Transformers for sequence modeling, and NLP-based translation
            modules. Experimental evaluation on LRS2, LRS3, and LRW datasets
            demonstrates high sentence-level accuracy and robust cross-lingual
            performance.
          </p>

          <div className="pub-tags">
            <span>Deep Learning</span>
            <span>NLP</span>
            <span>Computer Vision</span>
            <span>Multilingual AI</span>
            <span>Visual Speech Recognition</span>
          </div>

          <div className="pub-links">
            <a
              href="https://www.irjmets.com/upload_newfiles/irjmets70900068775/paper_file/irjmets70900068775.pdf"
              target="_blank"
              rel="noreferrer"
              className="pub-link"
            >
              View Full Paper (PDF)
            </a>

            <a
              href="https://www.doi.org/10.56726/IRJMETS83126"
              target="_blank"
              rel="noreferrer"
              className="pub-link"
            >
              DOI: 10.56726/IRJMETS83126
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
