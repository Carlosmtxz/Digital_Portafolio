import { C, font } from "../theme";

/** Cloudflare Stream embed by video UID. Shows a placeholder
 *  panel until video_id is populated. */
export default function VideoEmbed({ p }) {
  if (!p.video_id) {
    return (
      <div
        style={{
          height: 360, background: C.navy, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", border: `1px solid ${C.grid}`,
        }}
      >
        <div style={{ width: 0, height: 0, borderTop: "22px solid transparent", borderBottom: "22px solid transparent", borderLeft: `36px solid ${C.safety}`, marginBottom: 14 }} />
        <div style={{ fontFamily: font.mono, fontSize: 12, color: C.sky }}>
          VIDEO PENDING — upload to Cloudflare Stream and set video_id
        </div>
      </div>
    );
  }
  return (
    <div style={{ position: "relative", paddingTop: "56.25%", border: `1px solid ${C.grid}` }}>
      <iframe
        src={`https://iframe.videodelivery.net/${p.video_id}`}
        title={`Video of ${p.name}`}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
