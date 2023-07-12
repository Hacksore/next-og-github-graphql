import type { CodegenConfig } from "@graphql-codegen/cli";

const __dirname = new URL(".", import.meta.url).pathname;

const config: CodegenConfig = {
  overwrite: true,
  documents: `${__dirname}/src/query/**/*.gql`,
  schema: {
    "https://api.github.com/graphql": {
      headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, "User-Agent": "codegen" },
    },
  },
  generates: {
    [`${__dirname}/src/__generated/graphql.ts`]: {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers", "typescript-document-nodes"],
    },
  },
};

export default config;
