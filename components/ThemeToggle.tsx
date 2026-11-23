"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* armazenamento indisponível: o tema vale só nesta visita */
    }
    setDark(!dark);
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-pressed={dark}>
      {dark ? "Tema claro" : "Tema escuro"}
    </button>
  );
}
