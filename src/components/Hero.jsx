import { meta } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-badge">Open to full-time roles — 2027</div>
      <h1 className="hero-name">
        Praneeth<br />R Upadhya<span className="accent-dot">.</span>
      </h1>
      <p className="hero-sub" dangerouslySetInnerHTML={{ __html: meta.tagline
        .replace("BMS College of Engineering", "<strong>BMS College of Engineering</strong>")
        .replace("ML", "<strong>ML</strong>")
        .replace("full-stack development", "<strong>full-stack development</strong>")
        .replace("competitive programming", "<strong>competitive programming</strong>")
      }} />
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-secondary">Get in Touch</a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
