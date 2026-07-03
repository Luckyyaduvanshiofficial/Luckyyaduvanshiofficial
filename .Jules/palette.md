## 2024-07-03 - Focus states in Tailwind CSS
**Learning:** Tailwind's reset styles strip away default browser focus outlines. This breaks keyboard accessibility on interactive elements unless explicitly re-added.
**Action:** Always add explicit focus classes like `focus-visible:ring-2 focus-visible:ring-offset-2` to interactive elements (links, buttons) when building with Tailwind to maintain keyboard navigation visibility.
