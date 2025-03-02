# UWB Hacks 2025 Website

This is the website for UWB Hacks 2025. It uses (or will use) the following technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- NodeJS
- PostgreSQL
- Vercel

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install all dependencies:

```bash
pnpm install .
```

Second, in the root directory, create a .env.local file. Ask Simon for the contents of that file to paste in.

Third, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
