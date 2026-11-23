import type { Project } from "../projects/project-data";

const matrix = Array.from({ length: 64 }, (_, i) => ({
  x: 48 + (i % 8) * 15,
  y: 55 + Math.floor(i / 8) * 15,
  active: [0, 9, 18, 27, 28, 35, 36, 45, 54, 63].includes(i),
}));

export function ProjectVisual({ kind, compact = false }: { kind: Project["visual"]; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${kind}${compact ? " visual-compact" : ""}`}>
      {kind === "performance" ? (
        <svg viewBox="0 0 420 250" role="img" aria-label="FastGATr: 1.7 to 4.5 times faster than optimized PyTorch on Apple M1, depending on benchmark configuration">
          <g fill="currentColor">{matrix.map((cell, i) => <rect key={i} x={cell.x} y={cell.y} width="10" height="10" rx="1.5" opacity={cell.active ? 0.85 : 0.11} />)}</g>
          <path d="M188 55V175" stroke="currentColor" opacity=".16" />
          <text x="215" y="104" className="visual-metric">1.7–4.5×</text>
          <text x="217" y="130" className="visual-label">FASTER ON APPLE M1</text>
          <text x="217" y="154" className="visual-small">vs. optimized PyTorch</text>
          <text x="48" y="216" className="visual-small">Tested configurations · team result</text>
        </svg>
      ) : kind === "forecast" ? (
        <svg viewBox="0 0 420 250" role="img" aria-label="Forecasting pipeline diagram: historical electricity load, weather and seasonality inform a load forecast">
          <g stroke="currentColor" opacity=".1">{[66, 105, 144, 183].map(y => <path key={y} d={`M35 ${y}H385`} />)}{[65, 123, 181, 239, 297, 355].map(x => <path key={x} d={`M${x} 45V190`} />)}</g>
          <path d="M35 150L58 145L81 165L104 129L127 113L150 130L173 93L196 108L219 76" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M219 76L242 94L265 65L288 83L311 60L334 77L357 53L385 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round" />
          <path d="M219 45V190" stroke="currentColor" opacity=".4" strokeDasharray="3 5" />
          <text x="36" y="29" className="visual-label">LOAD + WEATHER + SEASONALITY</text>
          <text x="36" y="217" className="visual-small">History</text><text x="270" y="217" className="visual-small">Forecast · schematic</text>
        </svg>
      ) : kind === "depth" ? (
        <svg viewBox="0 0 420 250" role="img" aria-label="Conceptual monocular depth-estimation diagram: a single image is mapped to scene depth">
          <defs><linearGradient id={`depth-${compact ? "small" : "large"}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b6c1da" /><stop offset=".5" stopColor="#798eae" /><stop offset="1" stopColor="#354c72" /></linearGradient></defs>
          <g fill="none" stroke="currentColor" opacity=".65" strokeWidth="1.2"><path d="M35 58H177V180H35ZM35 58L77 89H139L177 58M35 180L77 143H139L177 180M77 89V143M139 89V143" /><path d="M91 143V112H117V143M48 122L66 128V151L48 161Z" /></g>
          <path d="M220 58H365V180H220Z" fill={`url(#depth-${compact ? "small" : "large"})`} />
          <path d="M220 58L262 89H327L365 58M220 180L262 143H327L365 180" fill="#e3e7f0" opacity=".3" />
          <path d="M262 89H327V143H262Z" fill="#ced7e5" /><path d="M277 143V112H303V143Z" fill="#a1b1c9" />
          <text x="35" y="30" className="visual-label">LEARNING TO SEE IN 3D</text>
          <text x="35" y="216" className="visual-small">Single image</text><text x="220" y="216" className="visual-small">Scene depth · concept</text>
        </svg>
      ) : (
        <svg viewBox="0 0 420 250" role="img" aria-label={`${kind} project conceptual diagram`}>
          <g fill="none" stroke="currentColor" opacity=".35"><circle cx="210" cy="121" r="75" /><circle cx="210" cy="121" r="48" /><path d="M60 121H360M210 25V216M105 42L315 200M105 200L315 42" /></g>
          <g fill="currentColor">{[[135,121],[210,46],[285,121],[210,196],[162,121],[210,73],[258,121]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="5" />)}</g>
          <rect x="185" y="96" width="50" height="50" rx="8" fill="currentColor" /><text x="210" y="128" textAnchor="middle" fill="var(--surface)" fontSize="20">{kind === "security" ? "AI" : kind === "solar" ? "PV" : kind === "physics" ? "∇" : kind === "robotics" ? "UR5" : "VAE"}</text>
        </svg>
      )}
    </div>
  );
}
