## 2026-10-07 - Dynamic aria-expanded for Toggle Buttons
**Learning:** When toggling class-based visibility (e.g., Tailwind's `hidden` class), static ARIA attributes are insufficient. The `aria-expanded` state must be dynamically updated via JS in every event listener that modifies the element's visibility.
**Action:** Always ensure `aria-expanded` is strictly mapped to the presence/absence of the visibility class and updated across all code paths, including explicit toggle actions and implicit closing actions (like clicking internal links).
