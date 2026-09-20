## 2024-05-19 - Mobile Menu Toggle Accessibility
**Learning:** When using vanilla JS `classList.toggle('hidden')` to show/hide menus, screen readers are unaware of the state change without a dynamically updated `aria-expanded` attribute mapped directly to the visibility state.
**Action:** Ensure all toggle buttons controlling collapsible content have `aria-expanded` synced to the content's visibility state, including scenarios where the menu closes due to an internal link click.
