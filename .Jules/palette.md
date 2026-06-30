## 2024-06-30 - Iconify DOM Replacement Issue
**Learning:** Iconify replaces `<span>` tags with `<svg>` elements upon loading, which breaks JavaScript state toggles (like adding/removing 'hidden' classes) if they are applied directly to the icon element.
**Action:** Always wrap Iconify span elements in a parent container (e.g., `<span id="iconWrapper" class="inline-flex">`) and apply state toggle classes to the parent wrapper rather than the icon itself.
