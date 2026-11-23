const pairs = [
  ["#12231f", "#b99a62"],
  ["#1b3a33", "#d2b67f"],
  ["#0f2a2e", "#9bb8a6"],
];

/** Capa gerada em SVG, usada enquanto o projeto não tem captura de tela. */
export default function Cover({ name, index }: { name: string; index: number }) {
  const [bg, fg] = pairs[index % pairs.length];
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <svg className="cover" viewBox="0 0 320 180" role="img" aria-label={`Capa do projeto ${name}`}>
      <rect width="320" height="180" fill={bg} />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          fill="none"
          stroke={fg}
          strokeWidth="2"
          strokeOpacity={0.25 + i * 0.15}
          d={`M0 ${100 + i * 20} Q80 ${80 + i * 20 + index * 4} 160 ${100 + i * 20} T320 ${100 + i * 20}`}
        />
      ))}
      <text
        x="24"
        y="70"
        fontSize="44"
        fontWeight="800"
        fill={fg}
        fontFamily="var(--font-display), system-ui"
      >
        {initials}
      </text>
    </svg>
  );
}
