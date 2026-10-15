import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { images } from "../data/websiteData";

const strengths = [
  "Wear & abrasion resistant components",
  "Ferrous & specialty alloy castings",
  "Precision dimensional integrity",
];

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ backgroundImage: `url("${images.hero}")` }}>
      <div className="hero-shade" />
      <div className="hero-inner page-wrap">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span /> PRECISION CASTINGS & ALLOY STEEL SOLUTIONS</p>
          <h1>Build on<br /><em>Strength.</em><br /><span>Engineered for<br className="mobile-break" /> Excellence.</span></h1>
          <p className="hero-description">Established in 2024, Vision Tech Engineerings manufactures and supplies high-performance alloy steel and iron castings for the most demanding industrial applications worldwide.</p>
          <a className="button button-copper" href="#sectors">Explore Our Products <ArrowRight size={17} /></a>
        </div>
        <aside className="hero-aside" data-reveal>
          <span className="aside-heading">BUILT FOR WHAT'S NEXT</span>
          {strengths.map((strength) => <div className="strength-pill" key={strength}><span className="check-icon"><Check size={12} /></span>{strength}</div>)}
          <a className="scroll-cue" href="#statistics"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
        </aside>
        <div className="hero-index">01 <span>/</span> 04</div>
      </div>
    </section>
  );
}
