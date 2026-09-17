## 2024-05-18 - Dynamic ARIA Expansion on Mobile Menus
**Learning:** In this vanilla JS architecture, managing `aria-expanded` relies heavily on mapping directly to the presence of Tailwind's `hidden` class. Because `classList.contains('hidden')` is evaluated *before* the toggle, its inverted value accurately represents the new post-toggle state.
**Action:** Apply this inverted Boolean check (`String(!isOpen)`) strictly across all event listeners (including internal link clicks) to ensure screen readers always reflect the accurate menu visibility.
