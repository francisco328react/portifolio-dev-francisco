import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import { profile, experience, skills, support, education, certs, languages } from "@/data/content";

export const metadata: Metadata = { title: "Currículo" };

export default function Curriculo() {
  return (
    <main className="cv wrap">
      <div className="cv-actions no-print">
        <Link href="/">Voltar ao portfólio</Link>
        <PrintButton />
      </div>
      <h1>{profile.name}</h1>
      <p>
        {profile.role} · {profile.city}
      </p>
      <p>
        {profile.email} · {profile.linkedin} · {profile.github}
      </p>
      <h2>Resumo</h2>
      {profile.about.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <h2>Experiência profissional</h2>
      {experience.map((e) => (
        <article key={e.company + e.period}>
          <h3>
            {e.role} · {e.company}
          </h3>
          <p className="muted">{e.period}</p>
          <ul>
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
      <h2>Tecnologias</h2>
      {skills.map((s) => (
        <p key={s.group}>
          <strong>{s.group}:</strong> {s.items.join(", ")}
        </p>
      ))}
      <h2>Experiência complementar em TI (suporte)</h2>
      <ul>
        {support.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>Formação acadêmica</h2>
      <p>
        <strong>{education.course}</strong>, {education.school} ({education.period})
      </p>
      <ul>
        {education.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <h2>Certificações</h2>
      <ul>
        {certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <h2>Idiomas</h2>
      <p>{languages.map(([l, n]) => `${l}: ${n}`).join(" · ")}</p>
    </main>
  );
}
