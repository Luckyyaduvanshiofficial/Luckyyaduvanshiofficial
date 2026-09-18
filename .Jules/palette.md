## 2024-10-24 - Accessibility: Mobile Menu ARIA Toggles
**Learning:** When adding accessibility attributes like `aria-expanded` to visibility-toggling elements, remember to map the dynamic attribute state strictly to the presence of the visibility class (e.g. `hidden`) and ensure it updates across *all* code paths where visibility can change, such as when closing a menu by clicking an internal link.
**Action:** Add `aria-expanded` dynamic toggles in any existing script logic that modifies element visibility (e.g., mobile navs, accordions).
