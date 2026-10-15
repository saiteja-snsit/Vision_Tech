import { ArrowUpRight } from "lucide-react";
import { commitments, images } from "../data/websiteData";

export default function SustainabilityQuality() {
  return (
    <section className="quality-section" id="quality">
      <div className="quality-image" style={{ backgroundImage: `url("${images.commitment}")` }}>
        <div className="quality-image-shade" />
        <div className="quality-image-content" data-reveal>
          <p className="eyebrow"><span /> SUSTAINABLE ENGINEERING</p>
          <h2>Reliable performance.<br /><em>Responsible manufacturing.</em></h2>
          <div className="quality-stat"><strong>100%</strong><span>Material integrity<br />& compliance</span></div>
        </div>
        <span className="image-caption">BUILT ON STRENGTH. MADE TO LAST.</span>
      </div>
      <div className="quality-copy" id="about">
        <div className="quality-copy-inner" data-reveal>
          <p className="eyebrow eyebrow-dark"><span /> OUR PROMISE</p>
          <h2>Our commitment to<br /><em>quality & partnership.</em></h2>
          <p className="quality-intro">At Vision Tech Engineerings, we build lasting partnerships by prioritizing customer specifications, operational safety, and continuous process improvement.</p>
          <div className="commitment-list">
            {commitments.map((item, index) => (
              <article className="commitment-row" key={item.title}>
                <img src={images.quality[index]} alt="" loading="lazy" />
                <div><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></div>
                <ArrowUpRight size={16} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
