/**
 * APEX Consulting Website - Main JavaScript
 * Comprehensive interactive functionality for all pages
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const debounce = (func, delay = 250) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const throttle = (func, limit = 250) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// ============================================================================
// NAVIGATION MODULE
// ============================================================================

class Navigation {
  constructor() {
    this.mobileMenuBtn = document.getElementById('mobile-menu-button');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.navbar = document.getElementById('navbar');
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupStickyNav();
    this.setupDropdowns();
    this.setupLanguageToggle();
    this.setupHomeVersionToggle();
  }

  setupMobileMenu() {
    if (!this.mobileMenuBtn || !this.mobileMenu) return;

    this.mobileMenuBtn.addEventListener('click', () => {
      this.mobileMenu.classList.toggle('hidden');
      this.mobileMenuBtn.setAttribute('aria-expanded', 
        this.mobileMenuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  setupStickyNav() {
    if (!this.navbar) return;

    const isFixed = this.navbar.classList.contains('fixed');

    const toggleNavState = () => {
      const scrolled = window.scrollY > 50;

      if (isFixed) {
        // Keep fixed navs from switching position; only adjust visual state
        this.navbar.classList.toggle('nav-alt', scrolled);
        this.navbar.classList.toggle('nav-default', !scrolled);
        this.navbar.classList.toggle('shadow-md', scrolled);
        this.navbar.classList.toggle('shadow-sm', !scrolled);
        return;
      }

      this.navbar.classList.toggle('sticky', scrolled);
      this.navbar.classList.toggle('top-0', scrolled);
      this.navbar.classList.toggle('z-40', scrolled);
      this.navbar.classList.toggle('backdrop-blur-md', scrolled);
      this.navbar.classList.toggle('shadow-md', scrolled);
      this.navbar.classList.toggle('nav-alt', scrolled);
      this.navbar.classList.toggle('nav-default', !scrolled);
    };

    toggleNavState();
    window.addEventListener('scroll', throttle(toggleNavState, 100));
  }

  setupDropdowns() {
    document.querySelectorAll('[data-dropdown]').forEach(trigger => {
      const menu = trigger.nextElementSibling;
      if (!menu) return;

      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!trigger.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });
    });
  }

  setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) return;

    langToggle.addEventListener('click', () => {
      const isRTL = document.documentElement.dir === 'rtl';
      document.documentElement.dir = isRTL ? 'ltr' : 'rtl';
      document.documentElement.lang = isRTL ? 'en' : 'ar';
      localStorage.setItem('language', isRTL ? 'en' : 'ar');
    });

    const savedLang = localStorage.getItem('language') || 'en';
    if (savedLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    }
  }

  setupHomeVersionToggle() {
    const toggles = document.querySelectorAll('[data-home-toggle]');
    if (!toggles.length) return;

    const onAltHome = window.location.pathname.toLowerCase().includes('index2');
    const target = onAltHome ? 'index.html' : 'index2.html';
    const label = onAltHome ? 'Home V1' : 'Home V2';

    toggles.forEach(btn => {
      btn.textContent = label;
      btn.addEventListener('click', (e) => {
        if (e && typeof e.preventDefault === 'function') {
          e.preventDefault();
        }
        window.location.href = target;
      });
    });
  }
}

// ============================================================================
// FORM VALIDATION MODULE
// ============================================================================

class FormValidator {
  constructor() {
    this.init();
  }

  init() {
    this.setupFormValidation();
    this.setupPasswordToggle();
  }

  setupFormValidation() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault();
        }
      });

      form.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('blur', () => this.validateField(field));
        field.addEventListener('input', () => this.validateField(field));
      });
    });
  }

  validateForm(form) {
    let isValid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!this.validateField(field)) isValid = false;
    });
    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMsg = '';

    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMsg = 'This field is required';
    } else if (type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      errorMsg = 'Please enter a valid email';
    } else if (type === 'tel' && value && !this.isValidPhone(value)) {
      isValid = false;
      errorMsg = 'Please enter a valid phone number';
    }

    this.showFieldError(field, isValid, errorMsg);
    return isValid;
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isValidPhone(phone) {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  showFieldError(field, isValid, msg) {
    const errorEl = field.parentElement.querySelector('.error-message');
    field.classList.toggle('border-red-500', !isValid);
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.toggle('hidden', isValid);
    }
  }

  setupPasswordToggle() {
    document.querySelectorAll('.password-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
        btn.textContent = input.type === 'password' ? '👁️' : '👁️‍🗨️';
      });
    });
  }
}

// ============================================================================
// MODAL MODULE
// ============================================================================

class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.init();
  }

  init() {
    if (!this.modal) return;

    this.modal.querySelector('.modal-close')?.addEventListener('click', () => this.close());
    this.modal.querySelector('.modal-overlay')?.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// ============================================================================
// ANIMATIONS MODULE
// ============================================================================

class Animations {
  static animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  static startCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.getAttribute('data-suffix') || '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.getAttribute('data-suffix') || '');
      }
    }, 16);
  }

  static fadeInOnScroll() {
    const elements = document.querySelectorAll('[data-fade-in]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }

  static setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', throttle(() => {
      parallaxElements.forEach(el => {
        const scrollPos = window.scrollY;
        el.style.transform = `translateY(${scrollPos * 0.5}px)`;
      });
    }));
  }
}

// ============================================================================
// CAROUSEL MODULE
// ============================================================================

class Carousel {
  constructor(carouselId) {
    this.carousel = document.getElementById(carouselId);
    this.track = this.carousel?.querySelector('[data-carousel-track]');
    this.slides = this.track?.querySelectorAll('[data-carousel-slide]');
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    if (!this.slides || this.slides.length === 0) return;

    this.carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', () => this.prev());
    this.carousel.querySelector('[data-carousel-next]')?.addEventListener('click', () => this.next());

    this.carousel.querySelectorAll('[data-carousel-dot]').forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    this.autoPlay();
    this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.carousel.addEventListener('mouseleave', () => this.autoPlay());
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel() {
    this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    this.carousel.querySelectorAll('[data-carousel-dot]').forEach((dot, index) => {
      dot.classList.toggle('bg-blue-600', index === this.currentIndex);
      dot.classList.toggle('bg-gray-400', index !== this.currentIndex);
    });
  }

  autoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }
}

// ============================================================================
// TABS MODULE
// ============================================================================

class Tabs {
  constructor(tabsContainer) {
    this.container = document.getElementById(tabsContainer);
    if (!this.container) return;
    this.init();
  }

  init() {
    const tabs = this.container.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => this.switchTab(tab));
    });
  }

  switchTab(tab) {
    const tabsContainer = tab.parentElement;
    tabsContainer.querySelectorAll('[role="tab"]').forEach(t => {
      t.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600');
    });

    tab.classList.add('border-b-2', 'border-blue-600', 'text-blue-600');

    this.container.querySelectorAll('[role="tabpanel"]').forEach(panel => {
      panel.classList.add('hidden');
    });

    const panelId = tab.getAttribute('aria-controls');
    document.getElementById(panelId)?.classList.remove('hidden');
  }
}

// ============================================================================
// ACCORDION MODULE
// ============================================================================

class Accordion {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    this.init();
  }

  init() {
    const items = this.container.querySelectorAll('[data-accordion-item]');
    items.forEach(item => {
      const trigger = item.querySelector('[data-accordion-trigger]');
      trigger?.addEventListener('click', () => this.toggle(item));
    });
  }

  toggle(item) {
    const content = item.querySelector('[data-accordion-content]');
    const isOpen = content.style.maxHeight;

    this.container.querySelectorAll('[data-accordion-content]').forEach(el => {
      el.style.maxHeight = '';
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================

class Toast {
  static show(title, message, type = 'info') {
    const container = document.getElementById('toast-container') || this.createContainer();
    const toast = document.createElement('div');
    toast.className = `p-4 rounded-lg shadow-lg text-white mb-2 bg-${type}-600`;

    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    toast.innerHTML = `
      <div class="flex gap-3">
        <span>${icons[type]}</span>
        <div>
          <div class="font-bold">${title}</div>
          <div class="text-sm">${message}</div>
        </div>
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
  }

  static createContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-4 right-4 z-50';
    document.body.appendChild(container);
    return container;
  }
}

// ============================================================================
// COUNTDOWN TIMER
// ============================================================================

class CountdownTimer {
  constructor(elementId, targetDate) {
    this.element = document.getElementById(elementId);
    this.targetDate = new Date(targetDate).getTime();
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      this.element.innerHTML = 'Event started!';
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.element.innerHTML = `
      <div class="grid grid-cols-4 gap-4 text-center">
        <div><div class="text-3xl font-bold">${days}</div><div class="text-sm">Days</div></div>
        <div><div class="text-3xl font-bold">${hours}</div><div class="text-sm">Hours</div></div>
        <div><div class="text-3xl font-bold">${minutes}</div><div class="text-sm">Minutes</div></div>
        <div><div class="text-3xl font-bold">${seconds}</div><div class="text-sm">Seconds</div></div>
      </div>
    `;
  }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
  new FormValidator();

  // Animations
  Animations.animateCounters();
  Animations.fadeInOnScroll();
  Animations.setupParallax();

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Global functions
  window.openModal = (id) => new Modal(id).open();
  window.closeModal = (id) => new Modal(id).close();
  window.showToast = (title, msg, type) => Toast.show(title, msg, type);
});
