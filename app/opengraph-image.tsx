import { ImageResponse } from "next/og";

export const alt = "Dee Creative — Imagine what your home could become. Portland, Oregon. Design + build.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#F3F0E9", color: "#252522", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "64px 72px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 25, letterSpacing: 3 }}>DEE CREATIVE · PORTLAND, OREGON</div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 90, lineHeight: 1.05 }}><span>Imagine what your</span><span>home could become.</span></div>
      <div style={{ display: "flex", borderTop: "1px solid #B6AEA1", paddingTop: 24, fontSize: 22 }}>Architectural interiors · Design + build</div>
    </div>,
    size,
  );
}
