## 2026-07-15 - Dynamic ARIA States for Navigation Toggles
**Learning:** When using standard button elements to toggle hidden navigation content (like mobile menus or accordions), simple visual toggles (like adding/removing a 'hidden' class) don't communicate state to screen readers.
**Action:** Always bind the `aria-expanded` attribute of the toggle button directly to the JavaScript state of the collapsible element. In Tailwind projects, ensure the interactive toggle also has clear keyboard focus indicators (`focus-visible:ring-2`) to combat the default outline resets.
