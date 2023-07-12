import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from "@apollo/client/core";

export function githubClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
