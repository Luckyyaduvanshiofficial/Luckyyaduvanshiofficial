## 2024-05-18 - Tailwind resets browser focus
**Learning:** Tailwind CSS resets browser default focus rings for buttons and links, impacting keyboard accessibility. Interactive elements appear to have no focus state.
**Action:** Consistently apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2` (or similar utility classes) to buttons, links, and inputs to ensure a clear focus indicator is visible when navigating by keyboard, without affecting mouse/touch interactions.
