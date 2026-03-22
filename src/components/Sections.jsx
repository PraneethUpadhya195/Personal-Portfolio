import { useReveal } from "./useReveal";
import { meta, skills, projects, publication, education } from "../data/portfolio";

/* ── ABOUT ── */
export function About() {
  return (
    <section id="about" className="about">
      <div>
        <p className="about-label">// About me</p>
        <h2 className="about-heading reveal" ref={useReveal()}>Engineer. Researcher.<br />Problem Solver.</h2>
        {meta.bio.map((p, i) => (
          <p key={i} className="about-text reveal" ref={useReveal()}>{p}</p>
        ))}
        <div className="about-links reveal" ref={useReveal()}>
          <a href={meta.github} target="_blank" rel="noreferrer" className="social-link">↗ GitHub</a>
          <a href={meta.linkedin} target="_blank" rel="noreferrer" className="social-link">↗ LinkedIn</a>
          <a href={`mailto:${meta.email}`} className="social-link">✉ Email</a>
        </div>
      </div>
      <div className="about-stats reveal" ref={useReveal()}>
        {meta.stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── SKILLS ── */
export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header reveal" ref={useReveal()}>
        <p className="section-label">// What I work with</p>
        <h2 className="section-title">Skills &amp; Tools</h2>
      </div>
      <div className="skills-grid reveal" ref={useReveal()}>
        {skills.map((group) => (
          <div key={group.group} className="skill-group">
            <p className="skill-group-title">{group.group}</p>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item.name} className="skill-tag">
                  {item.icon && <i className={item.icon} />}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PROJECTS ── */
export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header reveal" ref={useReveal()}>
        <p className="section-label">// Things I've built</p>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.num} className="project-card reveal" ref={useReveal()}>
            <p className="project-number">{p.num} — {p.category}</p>
            <a href={p.github} target="_blank" rel="noreferrer" className="project-title">{p.title}</a>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map((t) => (
                <span key={t.name} className="stack-tag">
                  {t.icon && <i className={t.icon} />}
                  {t.name}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">{p.demoLabel || "Demo ↗"}</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PUBLICATIONS ── */
export function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="section-header reveal" ref={useReveal()}>
        <p className="section-label">// Research</p>
        <h2 className="section-title">Publications</h2>
      </div>
      <div className="pub-card reveal" ref={useReveal()}>
        <p className="pub-journal">{publication.journal}</p>
        <p className="pub-title">{publication.title}</p>
        <p className="pub-meta">{publication.meta}</p>
        <a href={publication.doi} target="_blank" rel="noreferrer" className="pub-doi">{publication.doiLabel}</a>
      </div>
    </section>
  );
}

/* ── EDUCATION ── */
export function Education() {
  return (
    <section id="education" className="education">
      <div className="section-header reveal" ref={useReveal()}>
        <p className="section-label">// Background</p>
        <h2 className="section-title">Education</h2>
      </div>
      <div className="edu-list reveal" ref={useReveal()}>
        {education.map((e) => (
          <div key={e.school} className="edu-card">
            <div className="edu-left">
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-school">{e.school}</p>
            </div>
            <div className="edu-right">
              <p className="edu-score">{e.score}</p>
              <p className="edu-year">{e.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CONTACT ── */
import photo from "./assets/Praneeth_IS177.jpg";
export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-photo-wrap reveal" ref={useReveal()}>
        <img className="contact-photo" src={photo} alt="Praneeth R Upadhya" />
      </div>
      <p className="section-label reveal" ref={useReveal()}>// Let's connect</p>
      <h2 className="contact-heading reveal" ref={useReveal()}>
        Let's build<br />something <span>together</span>.
      </h2>
      <p className="contact-sub reveal" ref={useReveal()}>
        Currently open to full-time SDE and ML roles from 2027.
        Always happy to talk research, code, or collaboration.
      </p>
      <div className="contact-links reveal" ref={useReveal()}>
        <a href={`mailto:${meta.email}`} className="btn-primary">{meta.email} ↗</a>
        <a href={meta.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn ↗</a>
        <a href={meta.github} target="_blank" rel="noreferrer" className="btn-secondary">GitHub ↗</a>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2026 Praneeth R Upadhya — Built with care.</p>
      <div className="footer-links">
        <a href="#hero">Back to top ↑</a>
        <a href={meta.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={meta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
