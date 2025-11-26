This project demonstrates the core concepts of the Next.js App Router, including file structure, layouts, nested layouts, dynamic routing, and multiple rendering techniques (CSR, SSR, SSG, ISR). Tailwind CSS is used for styling, and the project includes a dark/light mode toggle and an optional search feature.

The goal of this project is to show a clear understanding of how different rendering methods work together within a modern Next.js application.

Technologies Used

Next.js (App Router)

React

Tailwind CSS

TypeScript

JSONPlaceholder API (mock data source)

Features

Global layout with header, navigation links, and footer

Nested blog layout with sidebar categories

Dynamic routes for individual blog posts

Client-side rendering example (live clock)

Server-side rendering example (About page)

Static site generation (Blog listing)

Incremental static regeneration (Blog detail pages)

Optional dark/light mode toggle stored in local storage

Project Structure

The project follows the App Router structure provided by Next.js.

app/
  layout.tsx
  globals.css
  page.tsx

  about/
    page.tsx

  blog/
    layout.tsx
    page.tsx
    [id]/
      page.tsx

components/
  Clock.tsx
  DarkToggle.tsx
  SearchBar.tsx
Rendering Techniques Used
Client-Side Rendering (CSR)

Used in:

Home page live clock component (Clock.tsx)

Dark mode toggle

Blog search bar (optional)

Server-Side Rendering (SSR)

Used in:

About page
Fetching author information from a mock API during the server request.

Static Site Generation (SSG)

Used in:

Blog listing page
Blog posts are fetched at build time and served statically.

Incremental Static Regeneration (ISR)

Used in:

Blog detail pages
Each blog post is pre-rendered and revalidated after a set interval.

Nested Layouts

The main layout (app/layout.tsx) wraps the entire application.

The blog section has its own layout (app/blog/layout.tsx) with a sidebar that appears only in the blog pages.

Installation and Setup

Clone the repository:

git clone <repository-url>
cd nextjs-rendering-layouts

Install dependencies:

npm install

Run the development server:

npm run dev

Open the application in your browser:

http://localhost:3000
Tailwind CSS Setup

Tailwind is configured using:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

globals.css includes Tailwind directives, and tailwind.config.js is configured to scan the app and components folders.
