## Overview

- `/` - Home page.
- `/[slug]` - Static pre-rendered pages using [Contentful](https://www.contentful.com). (e.g. `/stack`, `/about`)
- `/writing` - Writing page.
- `/writing/[slug]` - Static pre-rendered writing pages using [Contentful](https://www.contentful.com).
- `/journey` - Journey page.
- `/workspace` - Workspace page.
- `/bookmarks` - Bookmarks page.
- `/bookmarks/[id]` - Static pre-rendered bookmarks pages using [Raindrop](https://raindrop.io/).
- `/api` - API routes.

## Running Locally

```bash
$ git clone https://github.com/suyalcinkaya/onur.dev.git
$ cd onur.dev
$ bun i
$ bun dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/suyalcinkaya/onur.dev/blob/master/.env.example).

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Contentful](https://www.contentful.com)
- [Raindrop](https://raindrop.io)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)