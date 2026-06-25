## 2026-06-25 - Tailwind CSS Resets Default Browser Focus Outlines
**Learning:** Tailwind CSS completely resets default browser focus outlines, which can lead to accessibility issues if custom focus indicators are not explicitly defined for interactive elements.
**Action:** Always add explicit `focus:` or `focus-visible:` classes (e.g., `focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal`) to interactive elements like buttons and links to ensure proper keyboard accessibility.
