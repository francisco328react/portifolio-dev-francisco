"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["sobre", "Sobre"],
  ["projetos", "Projetos"],
  ["experiencia", "Experiência"],
  ["tecnologias", "Tecnologias"],
  ["formacao", "Formação"],
  ["contato", "Contato"],
] as const;

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = links
      .map(([id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#">
          FS
        </a>
        <nav aria-label="Principal">
          <ul>
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
