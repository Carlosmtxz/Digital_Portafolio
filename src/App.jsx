import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import ProjectDetail from "./pages/ProjectDetail";
import { fetchProjects } from "./lib/supabase";
import { C, font } from "./theme";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then(({ data, source }) => {
      setProjects(data || []);
      setSource(source);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ background: C.paper, minHeight: "100vh", color: C.ink, fontFamily: font.body }}>
      <header style={{ background: C.navy, padding: "26px 32px", borderBottom: `4px solid ${C.safety}` }}>
        <div style={{ fontFamily: font.mono, fontSize: 11, letterSpacing: 2, color: C.sky, marginBottom: 4 }}>
          FOX SOLUTIONS · PROJECT ARCHIVE
        </div>
        <h1 style={{ fontFamily: font.display, fontWeight: 700, fontSize: 40, color: C.white, margin: 0, lineHeight: 1 }}>
          Installed Systems
        </h1>
      </header>

      <main style={{ maxWidth: 1080, margin: "0 auto", padding: "28px 32px" }}>
        {loading ? (
          <div style={{ fontFamily: font.mono, fontSize: 12, color: C.line }}>LOADING PROJECTS…</div>
        ) : (
          <Routes>
            <Route path="/" element={<Gallery projects={projects} />} />
            <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
          </Routes>
        )}
      </main>

      {source === "mock" && (
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px 24px", fontFamily: font.mono, fontSize: 11, color: C.line }}>
          DEMO MODE — showing built-in sample data. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to load live projects.
        </div>
      )}
    </div>
  );
}
