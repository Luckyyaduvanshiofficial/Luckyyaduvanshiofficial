## 2026-06-28 - Restore Keyboard Accessibility in Tailwind
**Learning:** Tailwind CSS resets default browser focus outlines globally. For keyboard accessibility, interactive elements (like navigation links and buttons) lack visual focus indicators by default.
**Action:** Always explicitly add `focus-visible:` utility classes (e.g., `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2`) to interactive elements to restore visible focus states without affecting mouse users.
