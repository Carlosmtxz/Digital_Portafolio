import { C, font } from "../theme";

export default function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: font.body,
        fontSize: 13,
        fontWeight: active ? 600 : 400,
        padding: "6px 12px",
        borderRadius: 3,
        border: `1.5px solid ${active ? C.navy : C.grid}`,
        background: active ? C.navy : C.white,
        color: active ? C.white : C.ink,
        cursor: "pointer",
        marginRight: 8,
        marginBottom: 8,
      }}
    >
      {label}
    </button>
  );
}
