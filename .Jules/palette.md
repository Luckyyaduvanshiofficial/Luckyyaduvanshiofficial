
## 2026-08-30 - Mobile Menu Toggle Accessibility
**Learning:** When using toggle buttons (like mobile menus) that are dynamically updated via JS (e.g. adding/removing 'hidden' classes), it's essential to track the visibility state explicitly and update the 'aria-expanded' property in all code paths where visibility can change, including unexpected paths like clicking internal menu links that close the menu automatically. Without this, screen readers get out of sync with the visual state.
**Action:** Always map 'aria-expanded' directly to the presence/absence of the specific visibility class across all event listeners modifying that class.
