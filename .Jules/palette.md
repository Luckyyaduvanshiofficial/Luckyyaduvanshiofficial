## 2024-09-14 - Navigation Accessibility
**Learning:** In this vanilla JS app, mobile menu visibility is controlled by toggling the `hidden` class, but the trigger button lacks `aria-expanded`, leaving screen readers unaware. Additionally, Tailwind resets default focus outlines, breaking keyboard navigation visibility.
**Action:** Manually synchronize `aria-expanded` with the `hidden` class across all event listeners, and consistently apply `focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal` to interactive elements.
