## 2024-09-28 - Dynamic ARIA Expansion States
**Learning:** In applications mapping visibility to generic toggle classes (like Tailwind `hidden`), ARIA states (`aria-expanded`) must be meticulously mapped and inverted relative to the state evaluated before the toggle operation to maintain accurate screen reader context across all event listeners.
**Action:** When implementing JS visibility toggles, always audit and pair the toggle operation with dynamic ARIA attribute updates across all possible state change pathways (e.g., toggle buttons and internal closing links).
