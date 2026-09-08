# Public showcase review

Started September 7, completed September 8, 2026. Baseline captured from the public site; changes rendered from a production build at localhost:4342.

## Repairs

- Replaced placeholder project art and example.com demos with a readable project layout, explicit project status, actual source repositories, and the verified portfolio URL.
- Replaced the simulated message-sent form with a clearly labeled email-app link. No delivery claim and no message sent during review.
- Added persistent desktop navigation, labeled mobile disclosure with Escape handling, a skip link and main landmark, and removed nested anchor/button controls.
- Matched bundled calendar/chart/resizable adapters to installed APIs, restored build type checking, and fixed canvas type narrowing.
- Synchronized npm and pnpm locks, patched Next within major 15 to 15.5.25, and pinned the nested PostCSS dependency to patched 8.5.28 using matching package-manager overrides.

## Verification

- Fresh `npm ci --ignore-scripts`, `npm run typecheck`, `npm run build`, and `git diff --check` passed.
- `npm audit --omit=dev`: zero vulnerabilities after the patch/override.
- Browser: desktop project/contact screenshots, 390px mobile project screenshot; no horizontal overflow (390px document and viewport).
- Mobile menu: named toggle, expanded state, Escape close, and close after project navigation all verified.
- DOM: zero nested link/button controls and zero example.com anchors. No browser console errors during this review.
- Resume URL responds HTTP 200. Email URI inspected without opening an email app or sending anything.
- Independent code review of dependency adapters found no mismatches; they are not currently used by the homepage.

No Vercel deployment or merge is claimed. Personal biography and education dates require confirmation from the owner before changing them; no invented updates were made. The repo retains its pre-existing lint skip during Next build; type checking is now enforced.
