# Next.js Migration Guide

## Changes Made

1. **Created Next.js App Router Structure**
   - `app/` directory with pages
   - `app/layout.jsx` - Root layout with global styles and providers
   - Individual page files in `app/[route]/page.jsx` format

2. **Updated Package.json**
   - Removed `react-router-dom` and `react-scripts`
   - Added `next` and `eslint-config-next`
   - Updated scripts to use Next.js commands

3. **Created Next.js Config**
   - `next.config.js` with image optimization settings

## Remaining Tasks

### 1. Update Link Components
Replace all `react-router-dom` Link imports with Next.js Link:
- Change: `import { Link } from "react-router-dom";`
- To: `import Link from "next/link";`
- Update usage: `<Link to="/path">` → `<Link href="/path">`

### 2. Update Router Hooks
- Remove `useLocation`, `useNavigate`, `useParams` from react-router-dom
- Use Next.js alternatives:
  - `usePathname()` from `next/navigation`
  - `useRouter()` from `next/navigation`
  - `useSearchParams()` from `next/navigation`

### 3. Update Components Using Router
Files that need Link updates:
- src/components/Header/Header.jsx
- src/components/HeaderTwo/HeaderTwo.jsx
- src/components/HeaderThree/HeaderThree.jsx
- src/components/MobileMenu/MobileMenu.jsx
- And 16+ other component files

### 4. Update ScrollToTop Component
- Remove react-router-dom dependency
- Use Next.js navigation hooks instead

### 5. Update WowInit Component
- Replace useLocation with usePathname from next/navigation

## Running the App

```bash
npm install
npm run dev
```

The app will run on http://localhost:3000

