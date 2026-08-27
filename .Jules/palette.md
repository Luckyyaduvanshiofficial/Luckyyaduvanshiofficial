## 2024-05-14 - Syncing aria-expanded state on Mobile Menus
**Learning:** It is critical to map `aria-expanded` strictly to the visibility class (like `hidden`) and update the attribute across *all* code paths where visibility can change, such as when closing a menu by clicking an internal link, to maintain screen reader context.
**Action:** Always verify all event listeners that affect element visibility to ensure corresponding ARIA attributes are updated synchronously. Additionally, ensure icon buttons have proper keyboard focus indicators using `focus-visible` classes.
