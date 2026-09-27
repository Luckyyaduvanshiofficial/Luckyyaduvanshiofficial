## 2024-05-24 - Mobile Menu ARIA Synchronization
**Learning:** When toggling component visibility (like mobile menus) via Tailwind's 'hidden' class in vanilla JavaScript, ARIA attributes ('aria-expanded') often become desynchronized if not explicitly managed across all event paths (e.g. closing via internal links).
**Action:** Always map 'aria-expanded' directly to the inverse of the 'hidden' state post-toggle, and ensure it resets to 'false' during any state-clearing actions.
