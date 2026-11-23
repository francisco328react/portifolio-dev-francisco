import Section from "./Section";
import { profile } from "@/data/content";

export default function About() {
  return (
    <Section id="sobre" title="Sobre mim">
      {profile.about.map((p) => (
        <p key={p} className="prose">
          {p}
        </p>
      ))}
      <p className="prose strong">{profile.open}</p>
    </Section>
  );
}
