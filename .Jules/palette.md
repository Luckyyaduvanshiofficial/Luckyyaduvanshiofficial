## 2024-10-24 - Dynamic `aria-expanded` on Mobile Menu Toggle
**Learning:** The mobile menu toggle button lacked `aria-expanded` mapping correctly to the menu's visibility class, which limits accessibility for screen readers navigating the state changes.
**Action:** When implementing or auditing toggle buttons controlling content visibility, ensure they have dynamic `aria-expanded` attributes mapped tightly to the presence/absence of the visibility class (e.g. `hidden`) and are updated across all event handlers.
