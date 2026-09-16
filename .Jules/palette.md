## 2024-05-18 - Dynamic ARIA Expansion on Menus
**Learning:** When a menu is toggled visually by removing/adding a `hidden` class via JavaScript, the semantic state for screen readers must be explicitly managed. Merely adding `aria-controls` is insufficient; `aria-expanded` must accurately reflect the visibility in real-time.
**Action:** When implementing visibility toggles (like mobile menus or dropdowns), always map the `aria-expanded` attribute directly to the boolean presence of the visibility class, and ensure it resets to `false` when the menu closes via internal link clicks.
