import { Link } from "react-router-dom";
import { C, font } from "../theme";

export default function ProjectCard({ p }) {
  return (
    <Link
      to={`/project/${p.id}`}
      style={{
        display: "block",
        textDecoration: "none",
        background: C.white,
        border: `1px solid ${C.grid}`,
        borderTop: `4px solid ${C.navy}`,
        padding: 18,
      }}
    >
      <div style={{ fontFamily: font.mono, fontSize: 11, color: C.line, marginBottom: 6 }}>
        {p.id} · {p.year}
      </div>
      <div style={{ fontFamily: font.display, fontWeight: 600, fontSize: 22, color: C.navy, lineHeight: 1.1, marginBottom: 10 }}>
        {p.name}
      </div>
      <div style={{ fontFamily: font.body, fontSize: 13, marginBottom: 12, color: C.ink }}>{p.product}</div>
      <div style={{ display: "flex", gap: 14, borderTop: `1px solid ${C.grid}`, paddingTop: 10 }}>
        <div>
          <div style={{ fontFamily: font.mono, fontSize: 10, color: C.line }}>THROUGHPUT</div>
          <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: 20, color: C.navy }}>
            {p.bpm} <span style={{ fontSize: 13, fontWeight: 500 }}>bags/min</span>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: font.mono, fontSize: 10, color: C.line }}>CONFIG</div>
          <div style={{ fontFamily: font.body, fontSize: 13, fontWeight: 600, color: C.ink }}>{p.bagger_config}</div>
        </div>
      </div>
    </Link>
  );
}
