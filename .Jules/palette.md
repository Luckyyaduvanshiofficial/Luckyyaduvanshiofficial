## 2026-07-09 - Dynamic Aria-Expanded for Toggle Buttons
**Learning:** When implementing or auditing toggle buttons that control content visibility (like mobile menus or accordions), ensuring they have dynamic `aria-expanded` attributes bound to the JavaScript state of the collapsible elements is crucial for screen reader clarity, as static ARIA attributes can mislead users.
**Action:** Always ensure any toggle button updating visibility (e.g. `.hidden` class toggles in Tailwind) concurrently updates its `aria-expanded` state in the event listeners.
