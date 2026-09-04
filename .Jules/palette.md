
## 2026-09-04 - Dynamic ARIA Attributes Sync with Visibility Classes
**Learning:** When managing mobile menu toggle buttons with dynamic visibility classes like Tailwind's `hidden`, it's critical to update `aria-expanded` across all code paths, including when the menu is closed via clicking internal links. Simply toggling it on the button click is insufficient.
**Action:** Ensure `aria-expanded` is actively set to 'false' in event listeners that close menus (like internal anchor links), maintaining parity with the visibility state.
