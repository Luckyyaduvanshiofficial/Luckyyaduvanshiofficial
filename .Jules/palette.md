## 2024-12-07 - Dynamic ARIA States for Toggle Buttons
**Learning:** When implementing toggle buttons that control content visibility (like mobile menus or accordions), it is critical to map the `aria-expanded` attribute strictly to the presence of the visibility class (e.g. `hidden`).
**Action:** Update the `aria-expanded` attribute across all code paths/event listeners where visibility can change (e.g., closing a menu by clicking an internal link), ensuring accurate representation of the post-toggle state.
