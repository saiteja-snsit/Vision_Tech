import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { FormEvent, useState } from "react";
import { footerIndustries, navigation } from "../data/websiteData";

export default function Footer() {
  const [message, setMessage] = useState("");

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setMessage("Thanks for your interest. Email signup is not connected yet.");
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="page-wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-name">VISION TECH <b>ENGINEERINGS</b></span></a>
            <p className="footer-tagline">Build on Strength.<br /><em>Engineered for Excellence.</em></p>
            <p className="footer-address">Hyderabad, Telangana<br />India</p>
          </div>
          <div className="footer-column"><h3>EXPLORE</h3>{navigation.slice(0, 7).map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div>
          <div className="footer-column"><h3>INDUSTRIES</h3>{footerIndustries.map((industry) => <a key={industry} href="#sectors">{industry}</a>)}</div>
          <div className="footer-newsletter"><h3>STAY CONNECTED</h3><p>Get the latest from Vision Tech Engineerings.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}><label className="sr-only" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button aria-label="Subscribe"><ArrowRight size={17} /></button></form>
            <p className="form-message" aria-live="polite">{message}</p>
            <div className="social-links"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16} /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={16} /></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Vision Tech Engineerings. All rights reserved.</span><div><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a></div><span>BUILD ON STRENGTH <i>✳</i></span></div>
      </div>
    </footer>
  );
}
