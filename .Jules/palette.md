## 2024-10-24 - Dynamic aria-expanded for Mobile Menus
**Learning:** When toggling content visibility with CSS classes, the `aria-expanded` state must be dynamically updated across all interaction paths that affect visibility, including direct toggles and indirect closures (like clicking internal links).
**Action:** Map `aria-expanded` strictly to the inverted post-toggle state of the visibility class in all event listeners.
