# Social Media Dashboard

This is a Next.js project that implements a social media dashboard with features like user profile summary, engagement statistics, recent posts, and notifications.

## Live Demo

Check out the live demo of the project at: [https://social.ofirpatish.com/](https://social.ofirpatish.com/)

## Project Structure

```
app/
├── dashboard/
│   ├── EngagementChart.tsx
│   ├── NotificationsPanel.tsx
│   ├── RecentPosts.tsx
│   ├── Stats.tsx
│   └── UserProfileSummary.tsx
├── shared/
│   ├── Layout.tsx
│   ├── Loader.tsx
│   ├── Modal.tsx
│   └── ThemeToggle.tsx
├── utils/
│   └── mockData.ts
├── providers/
│   └── index.tsx
├── page.tsx
├── layout.tsx
└── globals.css

```

## Features

- User Profile Summary
- Engagement Statistics
- Recent Posts Display
- Notifications Panel
- Dark/Light Mode Toggle
- Responsive Design

## Getting Started

First, run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Query
- Chart.js
- Framer Motion
- Hero Icons

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://react-query.tanstack.com/)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

## Deployment

This project can be deployed on various platforms that support Next.js applications, such as Vercel or Cloudflare Pages.
