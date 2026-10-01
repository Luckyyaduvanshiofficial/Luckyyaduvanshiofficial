## 2024-05-24 - Dynamic ARIA Attributes on Multi-Path Toggles
**Learning:** When implementing a mobile menu, visibility can be toggled through multiple paths (e.g., the menu button itself and internal navigation links). All these code paths must be identified and synchronized to update aria-expanded and aria-label to keep screen readers aligned with visual state.
**Action:** Always audit event listeners for all elements that can close a UI component and ensure ARIA attributes are updated uniformly across them.
