import { ImageResponse } from "@vercel/og";
import { getUserContributions } from "@acme/api";

export const runtime = "edge";
export async function GET() {
  const user = "Hacksore";
  const response = await getUserContributions({ user });

  const { data } = response;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          fontWeight: "bold",
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <div style={{ padding: 0, margin: 0 }}>{user}</div>
        <p style={{ padding: 0, margin: 0 }}>
          {
            data.user.contributionsCollection.contributionCalendar
              .totalContributions
          }
        </p>
        <div style={{ color: "green" }}>Contributions</div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
