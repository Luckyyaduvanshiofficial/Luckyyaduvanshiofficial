## 2026-08-04 - Dynamic ARIA States for Toggle Buttons
**Learning:** When implementing toggle buttons that control content visibility (like mobile menus or accordions) using a class like `hidden`, the dynamic `aria-expanded` attribute must strictly map to the presence of that visibility class.
**Action:** Update the `aria-expanded` attribute across *all* code paths/event listeners where visibility can change, including secondary actions like closing a menu by clicking an internal link, to keep the ARIA state accurately synchronized with the visual state.
