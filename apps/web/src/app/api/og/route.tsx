import { ImageResponse } from "@vercel/og";
import { getUserContributions } from "@acme/api";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Color mapping based on contribution level
const getContributionColor = (level: string) => {
  switch (level) {
    case "NONE":
      return "#161b22"; // Dark background
    case "FIRST_QUARTILE":
      return "#0e4429"; // Dark green
    case "SECOND_QUARTILE":
      return "#006d32"; // Medium green
    case "THIRD_QUARTILE":
      return "#26a641"; // Bright green
    case "FOURTH_QUARTILE":
      return "#39d353"; // Brightest green
    default:
      return "#161b22"; // Default dark background
  }
};

export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const user = searchParams.get("user") || "Hacksore";
  const { data } = await getUserContributions({ user: user });

  // all 52 weeks of contributions
  const weeklyContributions =
    data.user.contributionsCollection.contributionCalendar.weeks;

  // Create a 7x52 grid (7 days x 52 weeks)
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return new ImageResponse(
    (
      <div tw="flex bg-black w-full h-full flex-col items-center justify-between p-8">
        <div tw="flex flex-col">
          {/* Title */}
          <div tw="flex text-white text-4xl">
            <span tw="font-black text-5xl">{user}</span>
          </div>
        </div>
        
        {/* Contribution Graph */}
        <div tw="flex flex-col">
          <div tw="flex flex-row">
            {/* Days of week labels */}
            <div tw="flex flex-col mr-2">
              {daysOfWeek.map((day) => (
                <div key={day} tw="flex text-gray-400 text-sm h-4 mb-1">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Contribution grid */}
            <div tw="flex flex-row">
              {weeklyContributions.map((week, weekIndex) => (
                <div key={weekIndex} tw="flex flex-col mr-1">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      tw="flex w-4 h-4 mb-1 rounded-sm"
                      style={{ backgroundColor: getContributionColor(day.contributionLevel) }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Total contributions */}
          <div tw="flex text-white text-xl mt-8">
            Total Contributions: {data.user.contributionsCollection.contributionCalendar.totalContributions}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
