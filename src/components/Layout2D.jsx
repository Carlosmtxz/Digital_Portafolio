import { C } from "../theme";

/** Parametric engineering-style top view drawn from project data.
 *  If layout_image_url is present it is shown instead. */
export default function Layout2D({ p }) {
  if (p.layout_image_url) {
    return (
      <img
        src={p.layout_image_url}
        alt={`Top view layout of ${p.name}`}
        style={{ width: "100%", border: `1px solid ${C.grid}`, background: C.white }}
      />
    );
  }
  const dual = p.stations === 2;
  return (
    <svg viewBox="0 0 640 380" style={{ width: "100%", background: C.white, border: `1px solid ${C.grid}` }} role="img" aria-label={`Top view layout of ${p.name}`}>
      <defs>
        <pattern id="gridP" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={C.paper} strokeWidth="1" />
        </pattern>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={C.line} />
        </marker>
      </defs>
      <rect width="640" height="380" fill="url(#gridP)" />

      <rect x="30" y="150" width="150" height="60" fill="none" stroke={C.steel} strokeWidth="2" />
      {[55, 80, 105, 130, 155].map((x) => (
        <line key={x} x1={x} y1="150" x2={x} y2="210" stroke={C.grid} />
      ))}
      <text x="105" y="235" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill={C.ink}>INFEED CONV.</text>

      <circle cx="290" cy="110" r="52" fill="none" stroke={C.steel} strokeWidth="2" />
      <circle cx="290" cy="110" r="30" fill="none" stroke={C.grid} strokeWidth="1.5" />
      <text x="290" y="106" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill={C.ink}>WEIGHER</text>
      <text x="290" y="120" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill={C.line}>{(p.weigher_type || "").toUpperCase()}</text>

      <rect x="230" y="180" width="120" height="140" fill={C.paper} stroke={C.navy} strokeWidth="2.5" />
      <text x="290" y="245" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600" fontSize="16" fill={C.navy}>{p.bagger_config}</text>
      <text x="290" y="262" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill={C.line}>WB1</text>
      {dual && (
        <>
          <rect x="380" y="180" width="120" height="140" fill={C.paper} stroke={C.navy} strokeWidth="2.5" />
          <text x="440" y="245" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600" fontSize="16" fill={C.navy}>{p.bagger_config}</text>
          <text x="440" y="262" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill={C.line}>WB2</text>
        </>
      )}

      <rect x="230" y="330" width={dual ? 270 : 120} height="30" fill="none" stroke={C.steel} strokeWidth="2" />
      <text x={dual ? 365 : 290} y="374" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill={C.ink}>TAKEAWAY</text>

      <line x1="180" y1="180" x2="228" y2="180" stroke={C.line} strokeWidth="1.5" markerEnd="url(#arr)" />
      <line x1="290" y1="162" x2="290" y2="178" stroke={C.line} strokeWidth="1.5" markerEnd="url(#arr)" />

      <line x1="230" y1="165" x2={dual ? 500 : 350} y2="165" stroke={C.line} strokeWidth="1" markerStart="url(#arr)" markerEnd="url(#arr)" />
      <text x={dual ? 365 : 290} y="160" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill={C.line}>
        {dual ? "4,850 mm" : "2,400 mm"}
      </text>

      <g>
        <rect x="410" y="10" width="220" height="58" fill={C.white} stroke={C.navy} strokeWidth="1.5" />
        <line x1="410" y1="30" x2="630" y2="30" stroke={C.navy} strokeWidth="1" />
        <line x1="410" y1="48" x2="630" y2="48" stroke={C.grid} strokeWidth="1" />
        <text x="418" y="24" fontFamily="Barlow Condensed" fontWeight="700" fontSize="13" fill={C.navy}>FOX SOLUTIONS — TOP VIEW</text>
        <text x="418" y="43" fontFamily="IBM Plex Mono" fontSize="10" fill={C.ink}>DWG {p.dwg_number}</text>
        <text x="418" y="62" fontFamily="IBM Plex Mono" fontSize="10" fill={C.ink}>PROJ {p.id} · {p.year}</text>
      </g>
    </svg>
  );
}
