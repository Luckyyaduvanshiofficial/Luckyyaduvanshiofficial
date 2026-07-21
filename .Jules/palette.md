## 2026-07-21 - [Dynamic aria-expanded on Mobile Menus]
**Learning:** When implementing or auditing toggle buttons that control content visibility (like mobile menus or accordions), always ensure they have dynamic `aria-expanded` attributes bound to the JavaScript state of the collapsible elements to ensure screen reader clarity. Also ensure the button has `aria-controls`.
**Action:** Update `js/script.js` and `index.html` to dynamically toggle `aria-expanded` on the mobile menu button.
