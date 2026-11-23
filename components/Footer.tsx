import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="wrap foot">
      © {new Date().getFullYear()} {profile.name} · {profile.city}
    </footer>
  );
}
