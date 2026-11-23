import Section from "./Section";
import { education, certs, languages } from "@/data/content";

export default function Education() {
  return (
    <Section id="formacao" title="Formação">
      <h3>{education.course}</h3>
      <p className="company">
        {education.school} · {education.period}
      </p>
      <ul className="plain">
        {education.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <div className="two">
        <div>
          <h3>Certificações</h3>
          <ul className="plain">
            {certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Idiomas</h3>
          <ul className="plain">
            {languages.map(([l, n]) => (
              <li key={l}>
                {l}: {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
