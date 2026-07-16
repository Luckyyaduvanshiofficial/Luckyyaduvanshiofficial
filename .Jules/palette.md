## 2024-07-16 - Dynamic aria-expanded for Toggle Buttons
**Learning:** For mobile menu toggles and theme toggles in this design system, standard focus outlines are reset by Tailwind, making keyboard navigation inaccessible. Also, static `aria-expanded` values mislead screen readers on interactive collapsible components.
**Action:** Always add explicit focus styles (e.g., `focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal`) to toggle buttons and bind dynamic `aria-expanded` attributes to the JavaScript state of the collapsible elements to ensure clarity for screen readers.
