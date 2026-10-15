import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { capabilities, images } from "../data/websiteData";

export default function ManufacturingCapabilities() {
  const [offset, setOffset] = useState(0);
  const ordered = capabilities.map((_, index) => capabilities[(index + offset + capabilities.length) % capabilities.length]);
  const orderedImages = images.capabilities.map((_, index) => images.capabilities[(index + offset) % images.capabilities.length]);

  return (
    <section className="section capability-section" id="manufacturing">
      <div className="page-wrap">
        <div className="section-heading capability-heading" data-reveal>
          <div><p className="eyebrow"><span /> ENGINEERED WITH INTENTION</p><h2>Technical expertise.<br /><em>Advanced capabilities.</em></h2></div>
          <div className="heading-aside"><p>From precise material selection to custom product development, every component is engineered to maximize operational service life.</p>
            <div className="carousel-controls">
              <button aria-label="Show previous capabilities" onClick={() => setOffset((offset + capabilities.length - 1) % capabilities.length)}><ArrowLeft size={17} /></button>
              <button aria-label="Show next capabilities" onClick={() => setOffset((offset + 1) % capabilities.length)}><ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
        <div className="capability-grid" id="expertise">
          {ordered.map((item, index) => (
            <article className="capability-card" key={item.title} data-reveal>
              <div className="capability-image"><img src={orderedImages[index]} alt="" loading="lazy" /><span>{String((index + offset) % 4 + 1).padStart(2, "0")}</span></div>
              <div className="capability-body"><p className="card-category">{item.category}</p><h3>{item.title}</h3><p className="card-description">{item.description}</p><a href="#contact" aria-label={`Learn more about ${item.title}`}><MoveUpRight size={17} /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
