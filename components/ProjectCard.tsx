import Image from "next/image";
import Cover from "./Cover";
import type { Project } from "@/data/content";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { name, desc, tech, repo, demo, image, progress } = project;
  return (
    <li className="card">
      <div className="media">
        {image ? (
          <Image
            src={image}
            alt={`Captura de tela do projeto ${name}`}
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Cover name={name} index={index} />
        )}
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p>{desc}</p>
        <ul className="tags">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="muted small">Andamento estimado: {progress}%</p>
        <div className="card-links">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Código no GitHub
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Ver online
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
