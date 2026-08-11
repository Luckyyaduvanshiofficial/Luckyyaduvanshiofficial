
## 2023-10-27 - Dynamic ARIA States for Mobile Menus
**Learning:** When implementing toggle buttons that control content visibility (like mobile menus or accordions), always ensure they have dynamic `aria-expanded` attributes. It is critical to map this strictly to the presence of the visibility class (e.g., `hidden`) and update the attribute across *all* code paths/event listeners where visibility can change (e.g., closing a menu by clicking an internal link).
**Action:** When adding or auditing toggle buttons, implement JavaScript logic to update `aria-expanded` in sync with the element's visibility state, not just on toggle button clicks.
