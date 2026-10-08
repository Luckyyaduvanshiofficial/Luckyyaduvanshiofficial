## 2024-10-24 - Dynamic ARIA attributes on toggles
**Learning:** When implementing toggle buttons that control content visibility (like mobile menus or accordions), always ensure they have dynamic `aria-expanded` attributes. It is critical to map this strictly to the presence of the visibility class (e.g. `hidden`) and update the attribute across *all* code paths/event listeners where visibility can change (e.g., closing a menu by clicking an internal link).
**Action:** Add `aria-expanded` attributes to visibility toggles and ensure they are dynamically updated in JS.
