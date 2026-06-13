## 2026-06-13 - Focus Styles on Input Forms
**Learning:** Found that custom forms often use classes to override browser focus outlines (focus:outline-none) but must replace them with custom visible outlines for keyboard navigation accessibility.
**Action:** Always ensure that if `focus:outline-none` is used, a custom focus ring is visibly applied (e.g., `focus:ring-2 focus:ring-brand-teal`). This was already properly implemented in the inputs, but good to remember.

## 2026-06-13 - Visual Form Field Requirements
**Learning:** Forms often rely solely on the HTML5 `required` attribute which provides no visual cue until submission fails, leading to poor UX. Adding simple `*` or `(Optional)` text significantly reduces cognitive load.
**Action:** Add explicit visual indicators for required/optional fields using accessible patterns (e.g., `aria-hidden="true"` on the asterisk and `aria-required="true"` on the input) to support both sighted users and screen readers.
