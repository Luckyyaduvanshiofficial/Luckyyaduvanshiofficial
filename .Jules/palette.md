## 2024-08-10 - Mobile Menu ARIA Synchronization
**Learning:** In this static site layout, closing the mobile menu is handled not just by the toggle button but also via internal navigation links. This requires updating the `aria-expanded` state on the menu button whenever a link is clicked to avoid state mismatch.
**Action:** When implementing or auditing toggle buttons that control content visibility, always ensure dynamic `aria-expanded` attributes are updated across *all* code paths/event listeners where visibility can change (e.g., closing a menu by clicking an internal link).
