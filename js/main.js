/**
 * Everest Consultancy - Modern JavaScript
 * Fully optimized for mobile and desktop
 */

// ============================================================================
// RTL/LTR TOGGLE
// ============================================================================

class RTLToggle {
    constructor() {
        this.rtlToggle = document.getElementById('rtlToggle');
        this.mobileRtlToggle = document.getElementById('mobileRtlToggle');
        this.init();
    }

    init() {
        // Load saved direction preference
        const savedDir = localStorage.getItem('textDirection') || 'ltr';
        document.documentElement.setAttribute('dir', savedDir);

        // Desktop toggle
        if (this.rtlToggle) {
            this.rtlToggle.addEventListener('click', () => this.toggle());
        }

        // Mobile toggle
        if (this.mobileRtlToggle) {
            this.mobileRtlToggle.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
        
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('textDirection', newDir);
    }
}

// Global function for index2.html inline onclick
function toggleRTL() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('textDirection', newDir);
}

// ============================================================================
// NAVIGATION
// ============================================================================

class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.mobileClose = document.querySelector('.mobile-menu-close');
        
        this.init();
    }

    init() {
        this.handleScroll();
        this.setupMobileMenu();
        this.setupDropdowns();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (!this.navbar) return;
        
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    setupMobileMenu() {
        if (this.mobileToggle && this.mobileMenu) {
            this.mobileToggle.addEventListener('click', () => {
                // Toggle menu open/close
                const isOpen = this.mobileMenu.classList.contains('open');
                if (isOpen) {
                    this.mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                } else {
                    this.mobileMenu.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        if (this.mobileClose && this.mobileMenu) {
            this.mobileClose.addEventListener('click', () => {
                this.mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        }

        // Close menu when clicking a link
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (this.mobileMenu) {
                    this.mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.mobileMenu && this.mobileMenu.classList.contains('open')) {
                if (!this.mobileMenu.contains(e.target) && !this.mobileToggle.contains(e.target)) {
                    this.mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                }
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenu && this.mobileMenu.classList.contains('open')) {
                this.mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    setupDropdowns() {
        // Mobile dropdowns
        document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const isOpen = content.classList.contains('open');
                
                // Close all dropdowns
                document.querySelectorAll('.mobile-dropdown-content').forEach(c => {
                    c.classList.remove('open');
                });
                document.querySelectorAll('.mobile-dropdown-btn').forEach(b => {
                    b.classList.remove('active');
                });
                
                // Open clicked dropdown
                if (!isOpen) {
                    content.classList.add('open');
                    btn.classList.add('active');
                }
            });
        });
    }
}

// ============================================================================
// SCROLL ANIMATIONS
// ============================================================================

class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('[data-animate]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.setupObserver();
        } else {
            // Fallback: show all elements
            this.animatedElements.forEach(el => el.classList.add('visible'));
        }
    }

    setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        this.animatedElements.forEach(el => observer.observe(el));
    }
}

// ============================================================================
// FAQ ACCORDION
// ============================================================================

class FAQAccordion {
    constructor() {
        this.items = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question?.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                
                // Close all items
                this.items.forEach(i => i.classList.remove('open'));
                
                // Open clicked item
                if (!isOpen) {
                    item.classList.add('open');
                }
            });
        });
    }
}

// ============================================================================
// FORM VALIDATION
// ============================================================================

class FormValidation {
    constructor() {
        this.forms = document.querySelectorAll('form[data-validate]');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
            
            // Real-time validation
            form.querySelectorAll('input, textarea, select').forEach(field => {
                field.addEventListener('blur', () => this.validateField(field));
                field.addEventListener('input', () => this.clearError(field));
            });
        });
    }

    handleSubmit(e, form) {
        let isValid = true;
        
        form.querySelectorAll('[required]').forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let message = '';

        // Required check
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        }

        // Email validation
        if (isValid && type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (isValid && type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
        }

        // Min length
        const minLength = field.getAttribute('minlength');
        if (isValid && minLength && value.length < parseInt(minLength)) {
            isValid = false;
            message = `Minimum ${minLength} characters required`;
        }

        // Password match
        if (field.getAttribute('data-match')) {
            const matchField = document.getElementById(field.getAttribute('data-match'));
            if (matchField && value !== matchField.value) {
                isValid = false;
                message = 'Passwords do not match';
            }
        }

        if (!isValid) {
            this.showError(field, message);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    showError(field, message) {
        this.clearError(field);
        
        field.classList.add('error');
        field.style.borderColor = '#ef4444';
        
        const errorEl = document.createElement('span');
        errorEl.className = 'form-error';
        errorEl.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
        errorEl.textContent = message;
        
        field.parentNode.appendChild(errorEl);
    }

    clearError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        
        const errorEl = field.parentNode.querySelector('.form-error');
        if (errorEl) {
            errorEl.remove();
        }
    }
}

// ============================================================================
// COUNTDOWN TIMER (For Coming Soon page)
// ============================================================================

class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate).getTime();
        this.elements = {
            days: document.getElementById('countdown-days'),
            hours: document.getElementById('countdown-hours'),
            minutes: document.getElementById('countdown-minutes'),
            seconds: document.getElementById('countdown-seconds')
        };
        
        if (this.elements.days) {
            this.init();
        }
    }

    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        if (distance < 0) {
            Object.values(this.elements).forEach(el => {
                if (el) el.textContent = '00';
            });
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (this.elements.days) this.elements.days.textContent = String(days).padStart(2, '0');
        if (this.elements.hours) this.elements.hours.textContent = String(hours).padStart(2, '0');
        if (this.elements.minutes) this.elements.minutes.textContent = String(minutes).padStart(2, '0');
        if (this.elements.seconds) this.elements.seconds.textContent = String(seconds).padStart(2, '0');
    }
}

// ============================================================================
// DASHBOARD SIDEBAR
// ============================================================================

class DashboardSidebar {
    constructor() {
        this.sidebar = document.querySelector('.dashboard-sidebar');
        this.toggle = document.querySelector('.sidebar-toggle');
        this.overlay = null;
        
        if (this.sidebar && this.toggle) {
            this.init();
        }
    }

    init() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'sidebar-overlay';
        this.overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 99;
            display: none;
        `;
        document.body.appendChild(this.overlay);

        this.toggle.addEventListener('click', () => this.toggleSidebar());
        this.overlay.addEventListener('click', () => this.closeSidebar());

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeSidebar();
            }
        });
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('open');
        this.overlay.style.display = this.sidebar.classList.contains('open') ? 'block' : 'none';
        document.body.style.overflow = this.sidebar.classList.contains('open') ? 'hidden' : '';
    }

    closeSidebar() {
        this.sidebar.classList.remove('open');
        this.overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ============================================================================
// PASSWORD TOGGLE
// ============================================================================

class PasswordToggle {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('[data-password-toggle]').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const input = toggle.previousElementSibling;
                const icon = toggle.querySelector('i');
                
                if (input && input.type === 'password') {
                    input.type = 'text';
                    if (icon) {
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    }
                } else if (input) {
                    input.type = 'password';
                    if (icon) {
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    }
                }
            });
        });
    }
}

// ============================================================================
// TESTIMONIAL SLIDER
// ============================================================================

class TestimonialSlider {
    constructor(container) {
        this.container = document.querySelector(container);
        if (!this.container) return;
        
        this.slides = this.container.querySelectorAll('.testimonial-slide');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        
        this.init();
    }

    init() {
        if (this.slides.length <= 1) return;
        
        this.createControls();
        this.showSlide(0);
        this.startAutoplay();
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'testimonial-controls';
        controls.style.cssText = 'display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem;';
        
        this.slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            dot.style.cssText = `
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
                background: var(--gray-300);
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            dot.addEventListener('click', () => this.showSlide(i));
            controls.appendChild(dot);
        });
        
        this.container.appendChild(controls);
        this.dots = controls.querySelectorAll('.testimonial-dot');
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        
        this.dots?.forEach((dot, i) => {
            dot.style.background = i === index ? 'var(--primary)' : 'var(--gray-300)';
        });
        
        this.currentIndex = index;
    }

    nextSlide() {
        const next = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(next);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
        
        this.container.addEventListener('mouseenter', () => {
            clearInterval(this.autoplayInterval);
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }
}

// ============================================================================
// STATS COUNTER
// ============================================================================

class StatsCounter {
    constructor() {
        this.stats = document.querySelectorAll('[data-count]');
        this.observed = new Set();
        
        if (this.stats.length) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.observed.has(entry.target)) {
                    this.observed.add(entry.target);
                    this.animateCount(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.stats.forEach(stat => observer.observe(stat));
    }

    animateCount(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }
}

// ============================================================================
// INITIALIZE
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new Navigation();
    new ScrollAnimations();
    new SmoothScroll();
    new RTLToggle();
    
    // Page-specific
    new FAQAccordion();
    new FormValidation();
    new PasswordToggle();
    new DashboardSidebar();
    new StatsCounter();
    
    // Countdown for coming soon page (set your launch date)
    new CountdownTimer('2026-06-01');
    
    // Testimonial slider
    new TestimonialSlider('.testimonial-slider');
    
    console.log('Everest Consultancy - All systems initialized');
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Debounce function
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit = 250) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        ScrollAnimations,
        FAQAccordion,
        FormValidation,
        CountdownTimer,
        DashboardSidebar,
        RTLToggle,
        debounce,
        throttle
    };
}
