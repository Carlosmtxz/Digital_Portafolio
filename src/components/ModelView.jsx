import { C, font } from "../theme";

/** Renders a GLB with Google's <model-viewer> web component
 *  (loaded from CDN in index.html). Shows a placeholder panel
 *  until a model_url is populated for the project. */
export default function ModelView({ p }) {
  if (!p.model_url) {
    return (
      <div
        style={{
          height: 360, border: `1px dashed ${C.line}`, background: C.white,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}
      >
        <div style={{ fontFamily: font.display, fontWeight: 600, fontSize: 20, color: C.navy, marginBottom: 6 }}>
          3D model pending
        </div>
        <div style={{ fontFamily: font.mono, fontSize: 11, color: C.line, textAlign: "center", maxWidth: 420, lineHeight: 1.6 }}>
          Export the SolidWorks assembly as STEP → Blender → decimate → GLB,
          upload to the Supabase 'models' bucket, and set model_url on this project.
        </div>
      </div>
    );
  }
  return (
    <div>
      <model-viewer
        src={p.model_url}
        alt={`3D model of ${p.name}`}
        camera-controls
        auto-rotate
        shadow-intensity="0.6"
        exposure="0.9"
        style={{ width: "100%", height: "420px", background: C.paper, border: `1px solid ${C.grid}` }}
      />
      <p style={{ fontFamily: font.mono, fontSize: 11, color: C.line, marginTop: 8 }}>
        DRAG TO ORBIT · SCROLL TO ZOOM
      </p>
    </div>
  );
}
