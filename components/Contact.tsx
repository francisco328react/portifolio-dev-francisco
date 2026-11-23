import Section from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="prose">
        Vamos conversar sobre projetos e oportunidades. Respondo por WhatsApp, e-mail ou LinkedIn.
      </p>
      <div className="links">
        <a className="btn" href={profile.whatsapp.url} target="_blank" rel="noopener noreferrer">
          WhatsApp {profile.whatsapp.display}
        </a>
        <a className="btn ghost" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </Section>
  );
}
