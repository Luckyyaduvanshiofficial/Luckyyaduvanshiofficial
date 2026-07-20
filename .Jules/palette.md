
## 2026-07-20 - Mobile Menu ARIA & Focus States
**Learning:** In Tailwind apps that remove default focus states, keyboard focus can be completely invisible on interactive toggles, breaking accessibility. Further, mobile menus often lack dynamic `aria-expanded` bindings to JS state, rendering screen readers unable to announce menu state changes.
**Action:** Add explicit `focus-visible:` classes to header toggles and bind `aria-expanded` directly to JS toggle logic to ensure visibility and clarity.
