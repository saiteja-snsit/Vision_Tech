import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "../data/websiteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Vision Tech Engineerings home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-name">VISION TECH <b>ENGINEERINGS</b></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="header-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote <ArrowUpRight size={14} /></a>
        </nav>
      </div>
    </header>
  );
}
