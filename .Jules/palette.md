## 2026-06-19 - Async Loading States and Screen Readers
**Learning:** When adding loading states to simulated async forms, disabling the submit button provides immediate visual feedback, but screen readers may miss the success message if it appears dynamically without proper ARIA roles.
**Action:** Always wrap dynamic form feedback messages in `role="status"` and `aria-live="polite"` containers so screen readers announce the success/error without interrupting the user.
