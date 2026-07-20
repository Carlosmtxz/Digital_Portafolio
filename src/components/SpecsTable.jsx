import { C, font } from "../theme";

export default function SpecsTable({ p }) {
  const rows = [
    ["Bagger configuration", p.bagger_config],
    ["Weigher type", p.weigher_type],
    ["Wicketed stations", p.stations],
    ["Rated throughput", p.bpm ? `${p.bpm} bags/min` : "—"],
    ["Product", p.product],
    ["Control panel drawing", p.dwg_number],
  ];
  return (
    <div style={{ background: C.white, border: `1px solid ${C.grid}`, padding: 22 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: font.body, fontSize: 14 }}>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} style={{ borderBottom: `1px solid ${C.grid}` }}>
              <td style={{ fontFamily: font.mono, fontSize: 12, color: C.line, padding: "10px 0", width: 220 }}>
                {k.toUpperCase()}
              </td>
              <td style={{ padding: "10px 0", fontWeight: 500, color: C.ink }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {p.notes && (
        <p style={{ fontFamily: font.body, fontSize: 14, lineHeight: 1.6, marginTop: 16, marginBottom: 0, color: C.ink }}>
          {p.notes}
        </p>
      )}
    </div>
  );
}
