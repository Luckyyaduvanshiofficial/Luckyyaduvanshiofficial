## 2026-07-31 - Dynamic aria-expanded for toggles
**Learning:** When adding aria-expanded to visibility toggles (like mobile menus), it's critical to ensure the JavaScript updates the attribute in *all* code paths where visibility can change, including when links inside the menu are clicked to close it.
**Action:** Always map aria-expanded strictly to the presence of the hidden class (e.g. `!element.classList.contains('hidden')`) across all relevant event listeners.
