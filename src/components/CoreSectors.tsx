import { ArrowRight, Factory, Mountain, Orbit, Zap, Anvil } from "lucide-react";
import { images, sectors } from "../data/websiteData";

const sectorIcons = [Factory, Zap, Mountain, Anvil, Orbit];

export default function CoreSectors() {
  return (
    <section className="section sectors-section" id="sectors">
      <div className="page-wrap">
        <div className="section-heading sectors-heading" data-reveal>
          <div><p className="eyebrow eyebrow-dark"><span /> INDUSTRIES WE POWER</p><h2>Powering critical industries<br />with <em>superior alloy solutions.</em></h2></div>
          <div className="heading-aside"><p>Application-specific castings designed to withstand severe operational environments.</p><a className="text-link" href="#contact">View all industries <ArrowRight size={15} /></a></div>
        </div>
        <div className="sector-grid">
          {sectors.map((sector, index) => {
            const Icon = sectorIcons[index];
            return (
              <article className="sector-card" key={sector.title} data-reveal>
                <img src={images.sectors[index]} alt="" loading="lazy" />
                <div className="sector-overlay" />
                <div className="sector-content">
                  <span className="sector-icon"><Icon size={18} strokeWidth={1.5} /></span>
                  <span className="sector-category">{sector.category}</span>
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                  <a href="#contact" aria-label={`Learn about ${sector.title}`}><ArrowRight size={17} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
