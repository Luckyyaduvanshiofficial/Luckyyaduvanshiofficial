## 2026-09-29 - Mobile Nav A11y
**Learning:** Found a missing state pattern on the `mobileMenuBtn` component. It toggles a `hidden` class on the `mobileMenu` drawer via JS, but lacked `aria-expanded` and `aria-controls` to communicate this state to screen readers.
**Action:** Always ensure that visibility toggle buttons (like mobile hamburger menus) have dynamic `aria-expanded` attributes that are strictly mapped to the JS state of the drawer they control, updating on both open and close actions (including when the menu auto-closes upon clicking an internal nav link).
