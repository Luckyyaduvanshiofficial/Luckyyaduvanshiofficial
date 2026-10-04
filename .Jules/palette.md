## 2024-06-25 - Dynamic ARIA attributes on Mobile Menu Toggle
**Learning:** Found a missing `aria-expanded` and `aria-controls` on the mobile menu toggle button, which is essential for screen reader users to understand the state of the menu.
**Action:** Added the attributes to the HTML and ensured the `aria-expanded` state maps correctly to the presence of the visibility class (`hidden`) when opened via the toggle or closed via a navigation link.
