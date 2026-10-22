/* ==========================================================================
   PROJET HYCE - JavaScript Principal
   Fonctionnalités : Navigation mobile, compteurs animés, onglets, modales,
   formulaire de contact et interactions.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initCounterAnimation();
  initTabs();
  initModals();
  initContactForm();
});

// 1. Menu Mobile
function initMobileMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const overlay = document.getElementById('mobile-overlay');

  if (!burgerBtn || !mobileMenu) return;

  const toggleMenu = (open) => {
    if (open) {
      mobileMenu.classList.remove('translate-x-full');
      if (overlay) overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('translate-x-full');
      if (overlay) overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  burgerBtn.addEventListener('click', () => toggleMenu(true));
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenu(false));
  if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

  // Fermer le menu lors du clic sur un lien
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}

// 2. Header au scroll
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('py-3', 'shadow-2xl');
      header.classList.remove('py-5');
    } else {
      header.classList.remove('py-3', 'shadow-2xl');
      header.classList.add('py-5');
    }
  });
}

// 3. Animation des compteurs numériques
function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.floor(easeProgress * target);

          el.innerText = currentVal.toLocaleString('fr-FR') + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            el.innerText = target.toLocaleString('fr-FR') + suffix;
          }
        };

        requestAnimationFrame(updateCount);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

// 4. Gestion des onglets
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('[data-tab-target]');
    const contents = container.querySelectorAll('[data-tab-content]');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');

        buttons.forEach(b => {
          b.classList.remove('active', 'border-orange-500', 'text-white', 'bg-orange-500/10');
          b.classList.add('text-gray-400', 'border-transparent');
        });
        btn.classList.add('active', 'border-orange-500', 'text-white', 'bg-orange-500/10');
        btn.classList.remove('text-gray-400', 'border-transparent');

        contents.forEach(c => {
          if (c.getAttribute('data-tab-content') === targetId) {
            c.classList.remove('hidden');
          } else {
            c.classList.add('hidden');
          }
        });
      });
    });
  });
}

// 5. Modales (Bio d'équipe, etc.)
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-open]');
  const modalClosers = document.querySelectorAll('[data-modal-close]');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalClosers.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.hyce-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });
  });

  // Clic en dehors
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('hyce-modal')) {
      e.target.classList.add('hidden');
      e.target.classList.remove('flex');
      document.body.style.overflow = '';
    }
  });
}

// 6. Formulaire de contact
function initContactForm() {
  const form = document.getElementById('contact-form');
  const responseBox = document.getElementById('contact-response');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Envoyer';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Envoi en cours...
      `;
    }

    const formData = new FormData(form);

    try {
      // Envoi vers Web3Forms (service gratuit) ou fallback
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        if (responseBox) {
          responseBox.classList.remove('hidden', 'bg-red-500/10', 'border-red-500/30', 'text-red-400');
          responseBox.classList.add('bg-green-500/10', 'border-green-500/30', 'text-green-400', 'p-4', 'rounded-xl', 'border');
          responseBox.innerHTML = "✅ Merci ! Votre message a bien été envoyé à l'équipe HYCE (Projet.hyce@estaca.eu). Nous vous répondrons très rapidement.";
        }
        form.reset();
      } else {
        throw new Error(data.message || "Erreur lors de l'envoi");
      }
    } catch (err) {
      // Fallback gracieux si pas de clé Web3Forms encore configurée
      if (responseBox) {
        responseBox.classList.remove('hidden');
        responseBox.classList.add('bg-blue-500/10', 'border-blue-500/30', 'text-blue-300', 'p-4', 'rounded-xl', 'border');
        responseBox.innerHTML = `
          <p class="font-medium">Merci pour votre message !</p>
          <p class="text-sm text-gray-300 mt-1">Vous pouvez également nous écrire directement à : <a href="mailto:Projet.hyce@estaca.eu" class="text-orange-400 underline font-semibold">Projet.hyce@estaca.eu</a></p>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });
}
