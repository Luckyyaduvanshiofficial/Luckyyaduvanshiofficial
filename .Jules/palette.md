## 2023-10-24 - Dynamic ARIA Attributes Sync
**Learning:** When adding `aria-expanded` attributes to toggle buttons (like mobile menus) that close automatically on secondary actions (like clicking a link inside the menu), it is critical to map the attribute update across *all* code paths/event listeners where the visibility state changes, not just the toggle button's primary click handler.
**Action:** Always inspect the JS for multiple event listeners modifying visibility classes (e.g., `.hidden`) and ensure `aria-expanded` is strictly synchronized in all places.
