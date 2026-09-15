import { ImageResponse } from "next/og";

export const alt = "Aaron Shan — Student, builder, designer & coder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, #b7df6e 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 15%, #a9d8ff 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 75% 85%, #ffb47c 0%, transparent 55%), radial-gradient(ellipse 65% 55% at 20% 80%, #c8b2ff 0%, transparent 55%), #f6f2ea",
          fontFamily: "sans-serif",
          color: "#171717",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#b7df6e",
              boxShadow: "0 0 24px #b7df6e",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: 2 }}>
            AARON SHAN
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Student, builder,
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              fontStyle: "italic",
              color: "#44403c",
            }}
          >
            designer & coder.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#44403c",
          }}
        >
          <span>Burnaby North Secondary · Class of 2028</span>
          <span>aaronshan.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
