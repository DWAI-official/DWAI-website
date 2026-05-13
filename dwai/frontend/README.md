# Deaf Women Aloud Initiative (DWAI) Website

This is the official website for the Deaf Women Aloud Initiative (DWAI), built with a modern, performant, and scalable web architecture. This document serves as a guide for developers to understand the project structure, architecture, and development workflow.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **UI**: [React](https://react.dev/) & [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Data Fetching & State**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started

### 1. Prerequisites

- Node.js (v18 or later)
- `pnpm`, `npm`, or `yarn`

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd dwai-website/frontend
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the `frontend` directory by copying the example file:

```bash
cp .env.example .env.local
```

Then, fill in the required values. You can get these from your Sanity project dashboard.

```env
# .env.local

# Find these in your Sanity project settings
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"

# Create a read token for enabling Draft Mode previews
SANITY_API_READ_TOKEN="your-sanity-read-token"

# Used for validating preview URLs from Sanity Studio
SANITY_PREVIEW_SECRET="generate-a-strong-secret-string"
```

### 4. Running the Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

---

## Architecture Deep Dive

The primary goal of this architecture is to deliver a fast user experience by minimizing API calls and leveraging Server-Side Rendering (SSR), while maintaining a clean and scalable codebase.

### Data Fetching Strategy: SSR with React Query Hydration

We use a "Render-as-you-fetch" pattern to load global site data (e.g., navigation, footer, hero content).

1.  **Server-Side Prefetching**: When a user requests a page, the `app/layout.js` Server Component is rendered. It creates a `QueryClient` instance and uses `prefetchQuery` to fetch all essential data from Sanity.
2.  **Consolidated Query**: To optimize performance, we use a single, consolidated GROQ query (`globalDataQuery` in `lib/queries.js`). This fetches data for the hero, partners, teams, etc., in **one network request**, avoiding multiple round-trips to the Sanity API.
3.  **Hydration**: The data fetched on the server is "dehydrated" and embedded into the initial HTML payload sent to the browser using Next.js and React Query's `<HydrationBoundary>`.
4.  **Client-Side Takeover**: The browser renders the HTML instantly, showing the complete page content with no loading spinners. The client-side `GlobalDataProvider` then "hydrates" this server-fetched data into React Query's client-side cache. React Query seamlessly takes over, managing background re-fetching, caching, and `staleTime` as configured.

This approach provides the performance benefits of SSR (fast Time to First Contentful Paint) with the powerful caching and developer experience of React Query.

### Sanity Integration

- **Client**: The Sanity client is configured in `lib/sanity.js`. It is set to use the CDN in production for faster responses and fresh data in development.
- **Queries**: All GROQ queries are centralized in `lib/queries.js`. This keeps data-fetching logic separate from the UI components.
- **Draft Mode**: The project supports Sanity's Draft Mode for previewing unpublished content. The `app/api/draft/route.js` file contains the logic to enable and disable preview sessions.

### Code Organization

- **/app**: Core application structure using the Next.js App Router.
  - `layout.js`: The root layout, responsible for server-side data prefetching.
  - `providers.js`: Sets up client-side providers like `QueryClientProvider`.
  - `page.js`: The main entry point for the homepage.
- **/components**: Reusable React components. These components are data-agnostic and receive props.
- **/context**: Global React Context providers.
  - `GlobalDataContext.js`: A crucial file that provides the server-prefetched global data to any component in the tree via the `useGlobalData()` hook.
- **/lib**: Contains core business logic and third-party service integrations.
  - `sanity.js`: Sanity client configuration.
  - `queries.js`: Central repository for all GROQ queries.

---

## Deployment

This application is optimized for deployment on **Vercel**.

1.  Connect your Git repository to a new Vercel project.
2.  Vercel will automatically detect the Next.js framework.
3.  Add the environment variables from your `.env.local` file to the Vercel project settings under "Environment Variables".

Vercel's Edge Network will cache static assets and server-rendered pages, ensuring fast delivery to users worldwide.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server (requires a build first).
- `npm run lint`: Lints the codebase for errors and style issues.