import { ImageResponse } from "next/og";

export const alt = "Omar Abdesslem — Computer vision, efficient ML systems, cybersecurity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ffffff",
          color: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 23, letterSpacing: "3px" }}>
          RESEARCH & ENGINEERING
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: "-4px" }}>
            Omar Abdesslem
          </div>
          <div style={{ display: "flex", fontSize: 34, lineHeight: 1.4, maxWidth: 900 }}>
            Computer vision. Efficient ML systems. Cybersecurity.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #c4c4c4",
            paddingTop: 24,
            fontSize: 22,
            color: "#555555",
          }}
        >
          <div style={{ display: "flex" }}>Selected projects & research</div>
          <div style={{ display: "flex" }}>omar-abdesslem.ch</div>
        </div>
      </div>
    ),
    size
  );
}
