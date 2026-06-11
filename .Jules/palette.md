## 2026-06-11 - Form Submission Visual Feedback
**Learning:** Adding immediate visual feedback (loading state) and disabling submit buttons upon form submission drastically reduces user confusion and prevents duplicate submissions, especially on asynchronous requests where network latency may cause users to assume the first click didn't register.
**Action:** Always include a visual loading state (`Sending...` or a spinner) and disable the button simultaneously on form submits in interactive applications. Ensure the disabled state is visually distinguishable.
