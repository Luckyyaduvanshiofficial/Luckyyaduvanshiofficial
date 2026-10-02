## 2024-10-02 - Mobile Nav aria-expanded State Tracking
**Learning:** When adding dynamic 'aria-expanded' states to mobile toggles, it's crucial to map this strictly to the presence of the visibility class ('hidden' here) and update the attribute across all event paths (like clicking an internal link to close the menu).
**Action:** Always ensure ARIA state stays perfectly synced with visual state classes when implementing custom mobile nav drawers.
