# UWB Hacks 2025 Website

https://uwbhacks.com

This is the website for UWB Hacks 2025. It uses the following technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- NodeJS
- PostgreSQL
- Vercel

---

## Getting Started

First, install all dependencies:

```bash
pnpm install .
```

Second, in the root directory, create a .env.local file. If you are part of the Hackathon planning team, ask the Digital Experience lead for the contents of that file to paste in.

Third, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Keeping consistent formatting with prettier

Before pushing your changes, please make sure to run the following command:

```bash
npx prettier --write .
```

## Branching

Ensure that you are on your own branch and do not push to origin/main
Also, please delete unused branches you are no longer using.

If you find that your local git environment has too many dead branches that are no longer on the remote repository, you can run the following command to remove them.

```bash
git remote prune origin
```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
