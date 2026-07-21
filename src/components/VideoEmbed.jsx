import { C, font } from "../theme";

/** Video tab. Priority:
 *  1. video_url — direct MP4/WebM (e.g. "/videos/berlos.mp4" in public/videos/)
 *                 or a YouTube link (watch, share, or shorts URL)
 *  2. video_id  — Cloudflare Stream video UID
 *  3. placeholder
 */
export default function VideoEmbed({ p }) {
  // Direct file or YouTube
  if (p.video_url) {
    const yt = p.video_url.match(
      /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/
    );
    if (yt) {
      return (
        <div style={{ position: "relative", paddingTop: "56.25%", border: `1px solid ${C.grid}` }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0`}
            title={`Video of ${p.name}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <video
        src={p.video_url}
        controls
        playsInline
        style={{ width: "100%", display: "block", background: "#000", border: `1px solid ${C.grid}` }}
      />
    );
  }

  // Cloudflare Stream
  if (p.video_id) {
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

  // Placeholder
  return (
    <div
      style={{
        height: 360, background: C.navy, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", border: `1px solid ${C.grid}`,
      }}
    >
      <div style={{ width: 0, height: 0, borderTop: "22px solid transparent", borderBottom: "22px solid transparent", borderLeft: `36px solid ${C.safety}`, marginBottom: 14 }} />
      <div style={{ fontFamily: font.mono, fontSize: 12, color: C.sky }}>
        VIDEO PENDING — set video_url (MP4 in public/videos/ or YouTube link) or a Cloudflare Stream video_id
      </div>
    </div>
  );
}
