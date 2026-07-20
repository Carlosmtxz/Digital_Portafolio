import { useMemo, useState } from "react";
import Chip from "../components/Chip";
import ProjectCard from "../components/ProjectCard";
import { C, font } from "../theme";

export default function Gallery({ projects }) {
  const [weigher, setWeigher] = useState(null);
  const [bagger, setBagger] = useState(null);

  const weighers = useMemo(
    () => [...new Set(projects.map((p) => p.weigher_type))].sort(),
    [projects]
  );
  const baggers = useMemo(
    () => [...new Set(projects.map((p) => p.bagger_config))].sort(),
    [projects]
  );

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (!weigher || p.weigher_type === weigher) && (!bagger || p.bagger_config === bagger)
      ),
    [projects, weigher, bagger]
  );

  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: 1.5, color: C.line, marginBottom: 8 }}>WEIGHER TYPE</div>
        <Chip label="All" active={!weigher} onClick={() => setWeigher(null)} />
        {weighers.map((w) => (
          <Chip key={w} label={w} active={weigher === w} onClick={() => setWeigher(w)} />
        ))}
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: 1.5, color: C.line, marginBottom: 8 }}>BAGGER CONFIGURATION</div>
        <Chip label="All" active={!bagger} onClick={() => setBagger(null)} />
        {baggers.map((b) => (
          <Chip key={b} label={b} active={bagger === b} onClick={() => setBagger(b)} />
        ))}
      </div>

      <div style={{ fontFamily: font.mono, fontSize: 12, color: C.line, marginBottom: 14 }}>
        {filtered.length} PROJECT{filtered.length !== 1 ? "S" : ""} FOUND
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ fontFamily: font.body, fontSize: 14, color: C.ink, padding: "30px 0" }}>
          No installed systems match this combination yet. Clear a filter to see more projects.
        </div>
      )}
    </div>
  );
}
