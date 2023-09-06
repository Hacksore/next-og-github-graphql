# next-og-github-graphql

You can make your og image use your github contribution data

### Codegen
you must setup a `.env` file to have `GITHUB_TOKEN` that has access to read your data.

Then run `yarn codegen` and it will generate the schema and update.

### Usage

Now you have a fully typeafe call 😎

```ts
const response = await getUserContributions({ user: "Hacksore" });
```
