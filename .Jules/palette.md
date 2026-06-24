## 2024-06-25 - Explicit Focus Indicators for Tailwind

**Learning:** Tailwind CSS completely resets the default browser focus outlines on interactive elements like buttons and links to enforce a uniform baseline across browsers. This significantly degrades keyboard accessibility out of the box because tab navigation provides no visual feedback.
**Action:** When working with Tailwind, always explicitly add `focus-visible:` classes (e.g., `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2`) to all interactive elements to ensure clear visual focus indicators for keyboard users.
