import { ImageResponse } from "@vercel/og";
import { getUserContributions } from "@acme/api";

export const runtime = "edge";
export async function GET() {
  const user = "Hacksore";
  const { data } = await getUserContributions({ user: user });

  const weeklyContributions =
    data.user.contributionsCollection.contributionCalendar.weeks;
  const contributionsPerWeek = weeklyContributions.map(
    (week) => week.contributionDays
  );

  return new ImageResponse(
    (
      <div tw="flex bg-black w-full h-full flex-row items-center justify-center">
        <div tw="flex container mx-auto p-4">
          <div tw="flex grid grid-cols-7 gap-2">
            {contributionsPerWeek.map((week) =>
              week.map((day) => {
                return (
                  <div style={{ width: 16, height: 16, background: day.color }}/>
                ) 
              })
            )}
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
