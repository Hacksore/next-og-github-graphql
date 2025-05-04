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

### Future Vision 🚀

This project is currently a Proof of Concept (PoC), but the goal is to transform it into a reusable library that makes it super easy to add GitHub contribution graphs to your OpenGraph images.

The vision is to create a simple component that you can just drop into your `opengraph-image.tsx`:

```tsx
import { GithubGraph } from 'next-og-github-graphql';

export default function Image() {
  return (
    <div>
      <GithubGraph username="your-username" />
    </div>
  );
}
```

This would abstract away all the complexity of:
- Fetching GitHub contribution data
- Handling the GraphQL queries
- Managing the layout and styling
- Generating the image

If you're interested in helping make this vision a reality, contributions are welcome! 🎉
