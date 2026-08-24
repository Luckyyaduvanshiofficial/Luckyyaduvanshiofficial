## 2026-08-24 - Dynamic Aria-Expanded for Mobile Menu
**Learning:** When a mobile menu can be closed by clicking links inside of it, the `aria-expanded` state on the menu button can easily become out of sync if it's only toggled when the button itself is clicked.
**Action:** Always ensure that `aria-expanded` is reset to 'false' across all event paths that close the menu, such as internal anchor link clicks, not just the primary toggle button click.
