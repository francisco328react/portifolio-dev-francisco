import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects, profile } from "@/data/content";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section id="projetos" title="Projetos">
      <ul className="featured">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </ul>
      <h3 className="sub">Em desenvolvimento</h3>
      <p className="muted">A barra mostra o andamento estimado de cada projeto até a conclusão.</p>
      <ul className="wip">
        {rest.map((p) => (
          <li key={p.name}>
            <div>
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
              <p className="muted small">{p.tech.join(", ")}</p>
            </div>
            <div className="bar-meter" role="img" aria-label={`Andamento estimado: ${p.progress}%`}>
              <span style={{ width: `${p.progress}%` }} />
              <b>{p.progress}%</b>
            </div>
          </li>
        ))}
      </ul>
      <p>
        <a
          className="inline"
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver todos os repositórios no GitHub
        </a>
      </p>
    </Section>
  );
}
