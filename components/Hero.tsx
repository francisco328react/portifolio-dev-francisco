import { profile } from "@/data/content";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <p className="place">{profile.city}</p>
        <h1>{profile.name}</h1>
        <p className="lead">
          {profile.role} · {profile.stack}
        </p>
        <div className="links">
          <a className="btn" href="#projetos">
            Ver projetos
          </a>
          <a
            className="btn ghost"
            href={profile.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn ghost" href="/curriculo">
            Currículo
          </a>
          <a
            className="btn ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="waters" aria-hidden="true">
        <span className="negro" />
        <span className="solimoes" />
      </div>
    </div>
  );
}
