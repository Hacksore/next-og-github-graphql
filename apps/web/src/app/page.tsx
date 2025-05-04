import Link from "next/link";
import { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const user = searchParams.user as string || "Hacksore";
  
  return {
    title: `${user}'s GitHub Contributions`,
    description: `View ${user}'s GitHub contribution graph`,
    openGraph: {
      images: [
        {
          url: `/api/og?user=${user}`,
          width: 1200,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ searchParams }: Props) {
  const user = await searchParams.user as string || "Hacksore";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="max-w-4xl w-full space-y-12 relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent p-1">
            GitHub Graph OG Image
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Generate beautiful Open Graph images using your GitHub contribution data.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <form className="flex gap-4 w-full max-w-md">
            <input
              type="text"
              name="user"
              placeholder="Enter GitHub username"
              defaultValue={user}
              className="flex-1 px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all"
            >
              Generate
            </button>
          </form>

          <div className="relative w-full max-w-4xl aspect-[2/1] rounded-lg overflow-hidden">
            <img
              src={`/api/og?user=${user}`}
              alt={`${user}'s GitHub contributions`}
              className="w-full h-full object-cover"
            />
          </div>

          <Link
            href="https://github.com/Hacksore/next-og-github-graphql"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-3 text-base font-semibold text-white hover:from-emerald-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
