import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="tecnologias" title="Tecnologias">
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>
              {s.items.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
