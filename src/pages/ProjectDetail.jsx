import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout2D from "../components/Layout2D";
import ModelView from "../components/ModelView";
import VideoEmbed from "../components/VideoEmbed";
import SpecsTable from "../components/SpecsTable";
import { C, font } from "../theme";

const TABS = [
  ["layout", "2D Layout"],
  ["render", "3D View"],
  ["video", "Video"],
  ["specs", "Specs"],
];

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const [tab, setTab] = useState("layout");
  const p = projects.find((x) => x.id === id);

  if (!p) {
    return (
      <div style={{ fontFamily: font.body }}>
        <p>Project not found. It may not be published yet.</p>
        <Link to="/" style={{ color: C.steel }}>Back to all projects</Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/"
        style={{ fontFamily: font.mono, fontSize: 12, color: C.steel, textDecoration: "none", display: "inline-block", marginBottom: 14 }}
      >
        ← BACK TO ALL PROJECTS
      </Link>
      <div style={{ fontFamily: font.mono, fontSize: 12, color: C.line }}>
        {p.id} · {(p.industry || "").toUpperCase()} · {p.year}
      </div>
      <h2 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 34, color: C.navy, margin: "4px 0 18px" }}>
        {p.name}
      </h2>

      <div style={{ borderBottom: `2px solid ${C.grid}`, marginBottom: 18 }}>
        {TABS.map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            style={{
              fontFamily: font.display, fontWeight: 600, fontSize: 17,
              padding: "8px 18px", background: "none", cursor: "pointer",
              border: "none",
              borderBottom: tab === k ? `3px solid ${C.safety}` : "3px solid transparent",
              color: tab === k ? C.navy : C.line,
              marginBottom: -2,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "layout" && <Layout2D p={p} />}
      {tab === "render" && <ModelView p={p} />}
      {tab === "video" && <VideoEmbed p={p} />}
      {tab === "specs" && <SpecsTable p={p} />}

      <div style={{ marginTop: 26, background: C.navy, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontFamily: font.display, fontWeight: 600, fontSize: 20, color: C.white }}>
          Need a system like this one?
        </div>
        <a
          href={`mailto:sales@foxsolutions.com?subject=${encodeURIComponent(`Similar system to ${p.id} — ${p.name}`)}`}
          style={{
            fontFamily: font.body, fontWeight: 600, fontSize: 14,
            background: C.safety, color: C.navy, padding: "10px 18px",
            textDecoration: "none", borderRadius: 3,
          }}
        >
          Request a similar system
        </a>
      </div>
    </div>
  );
}
