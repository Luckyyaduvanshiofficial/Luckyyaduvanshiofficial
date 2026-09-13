## 2024-10-24 - Interactive Elements Accessibility
**Learning:** In this app's Tailwind and vanilla JS setup, default browser focus outlines are reset making elements invisible to keyboard navigation, and visibility toggle classes (like `hidden`) are not automatically synchronized with `aria-expanded` attributes across multiple event paths (e.g., closing a menu via internal links).
**Action:** Always add `focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:outline-none` to interactive elements and explicitly update `aria-expanded` in all relevant JS event listeners.
