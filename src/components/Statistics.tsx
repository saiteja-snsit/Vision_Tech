import { Activity, Award, CalendarDays, Factory } from "lucide-react";

const metrics = [
  { value: "2024", label: "Year established & modernized", Icon: CalendarDays },
  { value: "100%", label: "Ferrous & alloy steel expertise", Icon: Factory },
  { value: "8+", label: "Core global industries served", Icon: Activity },
  { value: "Zero-Defect", label: "Quality & precision commitment", Icon: Award },
];

export default function Statistics() {
  return (
    <section className="statistics" id="statistics">
      <div className="stats-grid page-wrap">
        {metrics.map(({ value, label, Icon }, index) => (
          <article className="stat-item" key={value}>
            <span className="stat-icon"><Icon size={19} strokeWidth={1.5} /></span>
            <div><strong>{value}</strong><p>{label}</p></div>
            {index < metrics.length - 1 && <span className="stat-divider" />}
          </article>
        ))}
      </div>
    </section>
  );
}
