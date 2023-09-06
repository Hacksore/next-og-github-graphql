import { getUserContributions } from "@acme/api";

export default async function Page() {
  const response = await getUserContributions({ user: "Hacksore" });
  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
