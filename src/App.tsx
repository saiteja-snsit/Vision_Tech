import { useEffect } from "react";
import CoreSectors from "./components/CoreSectors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ManufacturingCapabilities from "./components/ManufacturingCapabilities";
import ProductEcosystem from "./components/ProductEcosystem";
import Statistics from "./components/Statistics";
import SustainabilityQuality from "./components/SustainabilityQuality";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <Header />
    <main>
      <Hero />
      <Statistics />
      <CoreSectors />
      <ManufacturingCapabilities />
      <ProductEcosystem />
      <SustainabilityQuality />
    </main>
    <Footer />
  </>;
}
