import { Cog, Droplets, Flame, Layers, MoveUpRight } from "lucide-react";
import { products } from "../data/websiteData";

const productIcons = [Layers, Flame, Droplets, Cog];

export default function ProductEcosystem() {
  return (
    <section className="section products-section">
      <div className="page-wrap">
        <div className="section-heading products-heading" data-reveal>
          <div><p className="eyebrow eyebrow-dark"><span /> PRODUCTS & APPLICATIONS</p><h2>Engineered solutions.<br /><em>Uncompromised performance.</em></h2></div>
          <p className="heading-note">Purpose-built components. Proven across the toughest environments.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => {
            const Icon = productIcons[index];
            return <article className="product-card" key={product.title} data-reveal>
              <div className="product-top"><span className="product-icon"><Icon size={22} strokeWidth={1.5} /></span><span className="product-number">{product.number}</span></div>
              <h3>{product.title}</h3><p>{product.description}</p><a href="#contact" aria-label={`Enquire about ${product.title}`}><MoveUpRight size={17} /></a>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
