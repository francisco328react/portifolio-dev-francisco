import Section from "./Section";
import { experience, support } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiência profissional">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.company + e.period}>
            <p className="period">{e.period}</p>
            <h3>{e.role}</h3>
            <p className="company">{e.company}</p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <details className="support">
        <summary>Experiência complementar em TI (suporte)</summary>
        <ul>
          {support.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </details>
    </Section>
  );
}
