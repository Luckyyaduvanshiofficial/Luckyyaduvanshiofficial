## 2026-08-19 - [Mobile Menu Accessibility]
**Learning:** [When implementing toggle buttons that control content visibility, aria-expanded attributes must be dynamically updated. It is critical to map this strictly to the visibility class state and update the attribute across all code paths where visibility can change, such as closing a menu by clicking an internal link.]
**Action:** [Always ensure all event listeners that affect a component's visibility also update the corresponding ARIA attributes on the trigger button.]
