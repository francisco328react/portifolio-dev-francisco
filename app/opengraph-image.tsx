import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#12231f",
          color: "#eef2ea",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#b99a62" }}>{profile.city}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800 }}>{profile.name}</div>
          <div
            style={{ display: "flex", fontSize: 40, color: "#cfd8cf" }}
          >{`${profile.role} · ${profile.stack}`}</div>
        </div>
        <div style={{ display: "flex", height: 40 }}>
          <div style={{ display: "flex", flex: "0 0 52%", background: "#0b1714" }} />
          <div style={{ display: "flex", flex: 1, background: "#b99a62" }} />
        </div>
      </div>
    ),
    size,
  );
}
