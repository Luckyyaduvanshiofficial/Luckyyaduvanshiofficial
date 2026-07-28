## 2026-07-28 - Explicit Accessibility Enhancements on Custom Toggles
**Learning:** In projects that don't rely on full JS frameworks, dynamic mobile menus lacking bound 'aria-expanded' attributes can trap screen reader users without state feedback. Furthermore, custom buttons often drop focus outlines if 'focus-visible' is missing from standard generic button styles.
**Action:** Always check that any custom dropdown or mobile menu button binds its state to 'aria-expanded' dynamically and explicitly applies 'focus-visible' utility classes to support keyboard navigators.
