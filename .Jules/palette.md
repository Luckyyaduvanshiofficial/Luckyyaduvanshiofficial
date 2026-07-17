
## 2026-07-17 - Focus Rings and Dynamic aria-expanded for Toggle Buttons
**Learning:** When using Tailwind CSS, default browser focus rings are removed, making toggle buttons completely inaccessible via keyboard navigation if explicit `focus-visible:` styles aren't added. Furthermore, when binding `aria-expanded` to toggle buttons (like a mobile menu), it's crucial to bind its state dynamically via JavaScript when the menu's visibility changes (e.g. from the menu toggle and mobile links), rather than keeping it static.
**Action:** Always add explicit `focus-visible:ring-2` utility classes to interactive elements when styling with Tailwind, and ensure `aria-expanded` attributes are kept in sync with the actual JS-driven visibility state of the elements they control.
