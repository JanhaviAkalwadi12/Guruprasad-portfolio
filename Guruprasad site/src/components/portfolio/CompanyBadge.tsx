export function CompanyBadge({
  letters,
  color,
  accent,
  size = 56,
}: {
  letters: string;
  color: string;
  accent: string;
  size?: number;
}) {
  return (
    <div
      className="relative grid place-items-center rounded-full ring-1 ring-white/20"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${accent}, ${color} 70%)`,
        boxShadow: `0 0 30px -5px ${accent}80, inset 0 0 20px ${color}`,
      }}
    >
      <span
        className="font-display font-bold tracking-tight text-white"
        style={{ fontSize: size * 0.32, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
      >
        {letters}
      </span>
      <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30" />
    </div>
  );
}