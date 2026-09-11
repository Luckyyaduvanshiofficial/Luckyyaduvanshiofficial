// ============================================================
// Lucky Yaduvanshi Official — Premium Portfolio Scripts
// v2.0 — Enhanced animations, micro-interactions, scroll reveals
// ============================================================

(function () {
    'use strict';

    // ---- Dark Mode Toggle ----
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');

    if (localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // ---- Mobile Menu Toggle ----
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
            // Animate hamburger to X
            const icon = mobileMenuBtn.querySelector('.iconify');
            if (icon) {
                icon.setAttribute('data-icon', isOpen ? 'lucide:menu' : 'lucide:x');
            }
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuBtn.querySelector('.iconify');
                if (icon) icon.setAttribute('data-icon', 'lucide:menu');
            });
        });
    }

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    function handleNavScroll() {
        const scrollY = window.scrollY;
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 20);
        }
        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ---- Active Nav Link (Scroll Spy) ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 120;
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

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    // ---- Scroll Reveal (Intersection Observer) ----
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const item = toggle.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('open');
                const btn = i.querySelector('.faq-toggle');
                const c = i.querySelector('.faq-content');
                if (btn) btn.setAttribute('aria-expanded', 'false');
                if (c) {
                    c.classList.remove('expanded');
                    c.style.maxHeight = '0';
                }
            });

            // Open clicked (if it was closed)
            if (!isOpen) {
                item.classList.add('open');
                toggle.setAttribute('aria-expanded', 'true');
                content.classList.add('expanded');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // ---- Contact Form ----
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const contactSubmit = document.getElementById('contactSubmit');
        const submitText = document.getElementById('submitText');
        const submitLoader = document.getElementById('submitLoader');
        const formMessage = document.getElementById('formMessage');

        const setMessage = (text, type) => {
            const styles = {
                success: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30',
                error: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/30'
            };
            formMessage.className = `text-sm text-center py-3 rounded-xl ${styles[type]}`;
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
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            }
            if (input.minLength && value.length < Number(input.minLength)) return false;
            return true;
        };

        const validateForm = (form) => {
            let isValid = true;
            form.querySelectorAll('[required]').forEach(field => {
                const valid = validateField(field);
                field.style.borderColor = valid ? '' : '#ef4444';
                if (!valid) isValid = false;
            });
            return isValid;
        };

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (!validateForm(contactForm)) {
                setMessage('Please fill in all required fields with valid information.', 'error');
                return;
            }

            setLoading(true);

            const formData = {
                name: document.getElementById('contactName').value.trim(),
                email: document.getElementById('contactEmail').value.trim(),
                subject: document.getElementById('contactSubject').value.trim(),
                message: document.getElementById('contactMessage').value.trim()
            };

            try {
                // Replace with real endpoint when ready:
                // const response = await fetch('https://your-backend.com/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // });
                // if (!response.ok) throw new Error('Request failed');

                await new Promise(resolve => setTimeout(resolve, 1200));
                setMessage('✓ Message sent successfully! Lucky Yaduvanshi will get back to you soon.', 'success');
                contactForm.reset();
            } catch (error) {
                setMessage('Something went wrong. Please try again or email contact@luckyyaduvanshi.in.', 'error');
            } finally {
                setLoading(false);
            }
        });

        // Real-time field validation on blur
        contactForm.querySelectorAll('.form-field').forEach(field => {
            field.addEventListener('blur', () => {
                if (field.hasAttribute('required')) {
                    const valid = validateField(field);
                    field.style.borderColor = valid ? '' : '#ef4444';
                }
            });
            field.addEventListener('input', () => {
                if (field.style.borderColor === 'rgb(239, 68, 68)') {
                    field.style.borderColor = '';
                }
            });
        });
    }

    // ---- Current Year ----
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();
