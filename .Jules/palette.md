## 2024-07-23 - Dynamic aria-expanded for visibility toggles
**Learning:** This static site uses Vanilla JS to toggle a 'hidden' class on mobile menus without updating ARIA states. Screen readers won't announce the state change when the menu opens or closes.
**Action:** When implementing or auditing toggle buttons that control content visibility (like mobile menus or accordions), always ensure they have dynamic `aria-expanded` attributes bound to the JavaScript state of the collapsible elements to ensure screen reader clarity.
