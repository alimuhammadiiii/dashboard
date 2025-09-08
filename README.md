## Dashboard (Next.js + Tailwind v4, RTL, Mock Auth)

A production-ready Next.js 15 app with an RTL Persian interface, a simple mock authentication flow, reusable UI primitives (Radix + Tailwind v4), and a responsive dashboard layout with a collapsible sidebar.

### Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **UI & Styling**: Tailwind CSS v4, Radix UI, `lucide-react`
- **Forms & Validation**: `@tanstack/react-form`, `zod`
- **State/Utilities**: `clsx`, `class-variance-authority`, `tailwind-merge`
- **Feedback**: `sonner`

### Features
- **RTL & Persian locale**: `lang="fa"`, `dir="rtl"` defined in `src/app/layout.tsx`
- **Mock authentication**: Login stores a mock user in `localStorage` and redirects to `/dashboard`
- **Protected dashboard layout**: Redirect-like guard in `src/app/dashboard/layout.tsx`
- **Reusable UI components**: Buttons, Inputs, Cards, Sidebar, Tooltip, Avatar, etc.
- **Responsive design**: Mobile-friendly layout with a collapsible sidebar

---

## Getting Started

### Requirements
- Node.js 18.18+ or 20+
- npm, pnpm, yarn, or bun

### Install
```bash
npm install
# or: pnpm install / yarn / bun install
```

### Development
```bash
npm run dev
```
Then open `http://localhost:3000`.

### Build
```bash
npm run build
```

### Start (production)
```bash
npm run start
```

### Lint
```bash
npm run lint
```

---

## How It Works

### App entry and layout
```src/app/layout.tsx``` sets the global HTML with `dir="rtl"` and imports `globals.css`. All pages inherit this.

### Public routes
- ```src/app/page.tsx``` – Landing page with links to the dashboard and login
- ```src/app/login/page.tsx``` – Login form (phone number) using `@tanstack/react-form` and `zod`

### Auth (mock) flow
- On submit, the login page saves a mock user to `localStorage` under the key `user` and navigates to `/dashboard`
- ```src/hooks/use-user.ts``` reads the stored user and exposes `user`, `loading`, and `logout`

### Protected routes
- ```src/app/dashboard/layout.tsx``` checks `useUser()`
  - If loading: shows a loading message
  - If unauthenticated: shows a transitional message to login
  - If authenticated: renders the dashboard with `AppSidebar` and page content
- ```src/app/dashboard/page.tsx``` displays user avatar, name, and email using UI primitives

### UI components
Key components live in ```src/components/ui```: `button`, `input`, `card`, `label`, `avatar`, `tooltip`, `separator`, `skeleton`, `sidebar`, `sheet`, `sonner`.

The app’s sidebar wrapper and trigger are used in the dashboard layout to provide a responsive, collapsible navigation.

---

## Project Structure
```
src/
  app/
    dashboard/
      layout.tsx      # Protected shell with sidebar
      page.tsx        # Dashboard content (user info)
    login/
      action.ts       # Server action placeholder
      page.tsx        # Login form with TanStack Form + Zod
      shared-code.ts  # Form schema/config
    globals.css       # Tailwind v4 styles
    layout.tsx        # Global HTML (fa-IR, RTL)
    page.tsx          # Landing page
  components/
    app-sidebar.tsx   # App sidebar
    ui/               # Reusable UI primitives (Radix + Tailwind)
  hooks/
    use-user.ts       # Mock auth state from localStorage
    use-mobile.ts     # Mobile detection helpers
  lib/
    utils.ts          # Utility helpers
public/
  icons/user.jpg      # Default user avatar
  fonts/              # Vazirmatn fonts
```

---

## Customization

- **Branding & text**: Update Persian copy in `src/app/**`
- **Default user avatar**: Replace `public/icons/user.jpg`
- **Theme**: Tailwind v4 is set up in `globals.css`; adjust tokens/utilities as needed
- **Sidebar items**: Edit `src/components/app-sidebar.tsx`
- **Form validation**: Update `src/app/login/shared-code.ts` (Zod schema and form options)

---

## Deployment

- **Vercel (recommended)**: Next.js runs natively. Create a project and connect this repo. Set build command to `npm run build` and output as `.next` (defaults are fine). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

- **Netlify**: A basic `netlify.toml` with SPA-style redirects is included. For full SSR/ISR support, configure Next on Netlify using the official adapter/plugin. See Netlify’s Next docs.

---

## Scripts
- **dev**: Start the development server
- **build**: Create a production build
- **start**: Start the production server
- **lint**: Run ESLint checks

---

## Notes & Limitations
- Authentication is mocked: no real backend or sessions. Replace the `mockLoginApi` in `src/app/login/page.tsx` and the `useUser` hook with your real auth logic.
- The app is RTL and Persian by default. Change `lang`/`dir` in `src/app/layout.tsx` for other locales.

---

## License
This repository is provided as-is for demonstration and internal use. Add your preferred license here.
