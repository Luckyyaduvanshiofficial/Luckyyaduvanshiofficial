## 2024-05-24 - Dynamic ARIA state sync for internal navigation
**Learning:** In this app, mobile menu visibility is toggled not just by the menu button, but also closed implicitly when users click internal navigation links (.mobile-nav-link). If aria-expanded is only updated on the toggle button click, it falls out of sync when a link is clicked.
**Action:** Always bind aria-expanded='false' updates to the internal link click event listeners that handle the menu closing behavior.
