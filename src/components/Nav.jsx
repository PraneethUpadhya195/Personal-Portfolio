import { useState, useEffect } from "react";
import { meta } from "../data/portfolio";

const links = ["about", "skills", "projects", "publications", "education", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="nav">
        <a className="nav-logo" href="#hero">Praneeth<span>.</span></a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} style={{ color: active === l ? "var(--accent)" : "" }}>{l}</a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={meta.resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a>
        <button className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href={meta.resumeUrl}>Resume ↗</a>
        </div>
      )}
    </>
  );
}
