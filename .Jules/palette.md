## 2024-05-18 - Dynamic ARIA attributes for visibility toggles
**Learning:** When implementing or auditing toggle buttons that control content visibility (like mobile menus or accordions), always ensure they have dynamic `aria-expanded` attributes. It is critical to map this strictly to the presence of the visibility class (e.g. `hidden`) and update the attribute across *all* code paths/event listeners where visibility can change (e.g., closing a menu by clicking an internal link).
**Action:** Ensure `aria-expanded` accurately reflects visibility state across all toggle and close events.
