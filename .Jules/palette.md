## 2024-05-24 - Dynamic ARIA expanded on interactive menus
**Learning:** When managing visibility toggles (like mobile menus) that can close via multiple paths (e.g. clicking an internal link or clicking outside), developers often forget to synchronize the toggle button's `aria-expanded` state with the visibility state.
**Action:** Always map `aria-expanded` directly to the element's actual visibility (e.g. checking for the `hidden` class) and update it in *all* event listeners that change this state.
