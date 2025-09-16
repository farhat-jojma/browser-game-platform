Update src/app/globals.css: change --muted-foreground in :root from 220 10% 40% to 220 10% 25%
Update link colors in prose components:
- src/app/[locale]/privacy-policy/PrivacyContent.jsx: change [&_a]:text-violet-400 to [&_a]:text-violet-600
- src/app/[locale]/contact/ContactContent.jsx: same
- src/app/[locale]/about/AboutContent.jsx: same
- src/app/[locale]/terms-of-service/page.jsx: same
- src/app/[locale]/components/gameplayer/ExpandableDescription.jsx: change text-violet-500 to text-violet-600
Fix search bar contrast:
- DesktopHeader.jsx: increase icon opacity to /80, placeholder to /70, button bg to /20 and /30
- MobileHeader.jsx: change search button text to gray-700
Test contrast by running the site and checking ratios
