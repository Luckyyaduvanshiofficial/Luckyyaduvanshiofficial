## 2026-07-18 - Dynamic ARIA Attributes for Collapsible Menus
**Learning:** When implementing collapsible elements like mobile menus, adding static `aria-expanded` is insufficient; it must be dynamically bound to the JavaScript state of the collapsible element for screen reader clarity. Additionally, interactive toggle buttons need explicit `focus-visible` classes to override Tailwind's default focus ring resets.
**Action:** Ensure `aria-expanded` is dynamically updated in JS toggle logic and always apply explicit keyboard focus classes like `focus-visible:ring-2` to custom UI buttons.
