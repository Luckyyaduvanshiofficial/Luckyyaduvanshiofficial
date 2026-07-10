## 2024-06-25 - Dynamic ARIA Expansion for Mobile Menus
**Learning:** Toggle elements that manage the visibility of content (like mobile menus) require dynamic `aria-expanded` attributes bound to the JavaScript state to guarantee screen reader clarity, as visual toggling alone (e.g., adding/removing a 'hidden' class) does not communicate the state change contextually.
**Action:** When implementing or auditing toggle buttons that control content visibility, ensure they have an `aria-expanded` attribute that is dynamically toggled in JavaScript alongside the visual changes.
