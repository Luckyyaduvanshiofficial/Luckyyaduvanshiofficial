## 2026-07-04 - Mobile Menu Icon Toggling with Iconify
**Learning:** Iconify dynamically replaces `<span class="iconify">`, removing any classes (like `hidden` or `flex`) applied to the original span during render. Direct visibility toggles on icon elements will fail.
**Action:** Always wrap Iconify icons in parent elements (e.g., `<span>` wrappers) and apply JavaScript visibility toggles or state changes to those parent wrappers rather than the icons themselves.
