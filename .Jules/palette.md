## 2024-10-24 - Dynamic aria-expanded for visibility toggles
**Learning:** In this app, content visibility states (like the mobile menu) can be changed via multiple disparate code paths (e.g., toggle button click vs. internal link click), making it easy for ARIA states to fall out of sync with visual states if not explicitly managed everywhere.
**Action:** Always map the `aria-expanded` attribute strictly to the presence of the visibility class (e.g., `hidden`) and update it across all code paths where visibility can change.
