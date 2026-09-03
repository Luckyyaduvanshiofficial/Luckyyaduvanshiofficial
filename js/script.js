// ---- Dark Mode Toggle ----
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;

        // Check saved preference or system preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        }

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });

        // ---- Mobile Menu Toggle ----
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // ---- Active Nav Link ----
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            const scrollPos = window.scrollY + 100;
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();

        // ---- FAQ Accordion ----
        document.querySelectorAll('.faq-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const icon = toggle.querySelector('.iconify');
                const isOpen = !content.classList.contains('hidden');

                // Close all
                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.faq-toggle .iconify').forEach(i => i.style.transform = 'rotate(0deg)');
                document.querySelectorAll('.faq-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));

                // Open clicked (if it was closed)
                if (!isOpen) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                    toggle.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // ---- Contact Form (Validation + Submission) ----
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            const contactSubmit = document.getElementById('contactSubmit');
            const submitText = document.getElementById('submitText');
            const submitLoader = document.getElementById('submitLoader');
            const formMessage = document.getElementById('formMessage');

            const setMessage = (text, type) => {
                const styles = {
                    success: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
                    error: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                };
                formMessage.className = `text-sm text-center py-2 rounded-lg ${styles[type]}`;
                formMessage.textContent = text;
                formMessage.classList.remove('hidden');
            };

            const setLoading = (isLoading) => {
                contactSubmit.disabled = isLoading;
                contactSubmit.classList.toggle('opacity-60', isLoading);
                contactSubmit.classList.toggle('cursor-not-allowed', isLoading);
                submitText.textContent = isLoading ? 'Sending...' : 'Send Message';
                if (submitLoader) submitLoader.classList.toggle('hidden', !isLoading);
            };

            const validateField = (input) => {
                const value = input.value.trim();
                if (!value) return false;
                if (input.type === 'email') {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailPattern.test(value);
                }
                if (input.minLength && value.length < Number(input.minLength)) return false;
                return true;
            };

            const validateForm = (form) => {
                const fields = Array.from(form.querySelectorAll('[required]'));
                let isValid = true;
                fields.forEach((field) => {
                    const isFieldValid = validateField(field);
                    field.style.borderColor = isFieldValid ? '' : '#ef4444';
                    if (!isFieldValid) isValid = false;
                });
                return isValid;
            };

            const clearFieldErrors = (form) => {
                form.querySelectorAll('.form-field').forEach((field) => {
                    field.style.borderColor = '';
                });
            };

            contactForm.addEventListener('submit', async (event) => {
                event.preventDefault();

                // Validate data before sending (good practice #20)
                if (!validateForm(contactForm)) {
                    setMessage('Please fill in all required fields with valid information.', 'error');
                    return;
                }

                clearFieldErrors(contactForm);
                setLoading(true);

                const formData = {
                    name: document.getElementById('contactName').value.trim(),
                    email: document.getElementById('contactEmail').value.trim(),
                    subject: document.getElementById('contactSubject').value.trim(),
                    message: document.getElementById('contactMessage').value.trim()
                };

                try {
                    // Replace with your real endpoint. Never expose API keys in frontend code.
                    // const response = await fetch('https://your-backend.com/contact', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify(formData)
                    // });
                    // if (!response.ok) throw new Error('Request failed');

                    // Demo submission (simulate network delay + loader)
                    await new Promise((resolve) => setTimeout(resolve, 1200));

                    setMessage('✓ Message sent successfully! Lucky Yaduvanshi will get back to you soon.', 'success');
                    contactForm.reset();
                } catch (error) {
                    setMessage('Something went wrong. Please try again or email contact@luckyyaduvanshi.in.', 'error');
                } finally {
                    setLoading(false);
                }
            });
        }

        // ---- Current Year ----
        const currentYearEl = document.getElementById('currentYear');
        if (currentYearEl) {
            currentYearEl.textContent = new Date().getFullYear();
        }

        // ---- Scroll Animations (Intersection Observer) ----
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for scroll animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        });

        // Make the first section visible immediately
        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }