import { getUserContributions } from "@acme/api";

export default async function Page() {
  const response = await getUserContributions({ user: "Hacksore" });

  const weeklyContributions = response.data.user.contributionsCollection.contributionCalendar.weeks;
  const contributionsPerWeek = weeklyContributions.map((week) => week.contributionDays);

  return <pre>{JSON.stringify(contributionsPerWeek, null, 2)}</pre>;
}
