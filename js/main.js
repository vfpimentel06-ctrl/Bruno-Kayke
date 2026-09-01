/**
 * main.js
 * Bruno Kayke Tattoo — Interatividade & Experiência de Luxo
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // 1. HEADER GLASS & SCROLLSPY
  // ==========================================================================
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-links .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ScrollSpy para ativar o item de menu correspondente
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // ==========================================================================
  // 2. MENU MOBILE DRAWER
  // ==========================================================================
  const hamburger = document.querySelector('.hamburger');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-footer a');

  const openMobileMenu = () => {
    hamburger?.classList.add('active');
    mobileDrawer?.classList.add('active');
    mobileOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburger?.setAttribute('aria-expanded', 'true');
  };

  const closeMobileMenu = () => {
    hamburger?.classList.remove('active');
    mobileDrawer?.classList.remove('active');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
    hamburger?.setAttribute('aria-expanded', 'false');
  };

  hamburger?.addEventListener('click', () => {
    if (mobileDrawer?.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileOverlay?.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // ==========================================================================
  // 3. SMOOTH SCROLL COM COMPENSAÇÃO DE HEADER
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // 4. FILTROS DO PORTFÓLIO
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedFilter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedFilter === 'todos' || cardCategory === selectedFilter || (selectedFilter === 'realismo' && cardCategory.includes('realismo'))) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ==========================================================================
  // 5. LIGHTBOX MODAL (VISUALIZADOR DE IMAGENS COM NAVEGAÇÃO ANTERIOR/PRÓXIMO)
  // ==========================================================================
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close-btn');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryItems = [];
  let currentImageIndex = 0;

  const updateLightboxImage = (index) => {
    if (!currentGalleryItems.length) return;
    currentImageIndex = (index + currentGalleryItems.length) % currentGalleryItems.length;
    const targetItem = currentGalleryItems[currentImageIndex];
    const imgEl = targetItem.querySelector('.portfolio-img, .testimonial-print-img, img');
    const imgSrc = imgEl ? imgEl.getAttribute('src') : '';

    if (lightboxImg && imgSrc) {
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.96)';
      setTimeout(() => {
        lightboxImg.src = imgSrc;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      }, 150);
    }
  };

  const openLightbox = (element) => {
    if (element.closest('.portfolio-grid')) {
      currentGalleryItems = Array.from(document.querySelectorAll('.portfolio-grid .portfolio-card'));
    } else if (element.closest('.instagram-gallery')) {
      currentGalleryItems = Array.from(document.querySelectorAll('.instagram-gallery .instagram-photo-card'));
    } else if (element.closest('.testimonials-carousel-wrapper')) {
      currentGalleryItems = Array.from(document.querySelectorAll('.testimonial-print-card'));
    } else {
      currentGalleryItems = Array.from(document.querySelectorAll('.portfolio-card, .instagram-photo-card, .testimonial-print-card'));
    }

    currentImageIndex = currentGalleryItems.indexOf(element);
    if (currentImageIndex === -1) currentImageIndex = 0;

    updateLightboxImage(currentImageIndex);

    lightbox?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.portfolio-card, .testimonial-print-card, .instagram-photo-card').forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentImageIndex - 1);
  });
  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentImageIndex + 1);
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content-box') || e.target.classList.contains('lightbox-img-wrapper')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightboxImage(currentImageIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightboxImage(currentImageIndex + 1);
    }
  });

  // ==========================================================================
  // 6. CARROSSEL DE AVALIAÇÕES PAGINADO
  // ==========================================================================
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const testimonialCards = document.querySelectorAll('.testimonial-print-card');
  let currentTestimonialPage = 0;

  const getItemsPerPage = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  };

  const updateTestimonialCarousel = () => {
    const itemsPerPage = getItemsPerPage();
    const totalPages = Math.ceil(testimonialCards.length / itemsPerPage);
    
    if (currentTestimonialPage >= totalPages) currentTestimonialPage = 0;
    if (currentTestimonialPage < 0) currentTestimonialPage = totalPages - 1;

    const startIndex = currentTestimonialPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    testimonialCards.forEach((card, idx) => {
      if (idx >= startIndex && idx < endIndex) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px) scale(0.96)';
        card.style.display = 'none';
      }
    });
  };

  if (prevBtn && nextBtn && testimonialCards.length > 0) {
    nextBtn.addEventListener('click', () => {
      const itemsPerPage = getItemsPerPage();
      const totalPages = Math.ceil(testimonialCards.length / itemsPerPage);
      currentTestimonialPage = (currentTestimonialPage + 1) % totalPages;
      updateTestimonialCarousel();
    });

    prevBtn.addEventListener('click', () => {
      const itemsPerPage = getItemsPerPage();
      const totalPages = Math.ceil(testimonialCards.length / itemsPerPage);
      currentTestimonialPage = (currentTestimonialPage - 1 + totalPages) % totalPages;
      updateTestimonialCarousel();
    });

    window.addEventListener('resize', updateTestimonialCarousel);
    updateTestimonialCarousel();
  }

  // ==========================================================================
  // 7. VÍDEO DO ESTÚDIO (AUTOPLAY MUTED & CONTROLS)
  // ==========================================================================
  const studioVideo = document.getElementById('studio-video');
  if (studioVideo) {
    studioVideo.muted = true;
    const playPromise = studioVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log("Autoplay com som mudo aguardando interação do usuário:", err);
      });
    }
  }

  // ==========================================================================
  // 8. ANIMAÇÕES SCROLL REVEAL (FADE IN UP)
  // ==========================================================================
  const scrollAnimElements = document.querySelectorAll('.fade-in-up');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  scrollAnimElements.forEach(el => revealObserver.observe(el));

  // ==========================================================================
  // 9. CONFIGURAÇÃO DINÂMICA DE LINKS WHATSAPP
  // ==========================================================================
  if (typeof siteConfig !== 'undefined' && siteConfig.contact) {
    const defaultMsg = encodeURIComponent(siteConfig.contact.whatsappDefaultMessage);
    const defaultWaUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${defaultMsg}`;

    document.querySelectorAll('.btn-whatsapp-trigger').forEach(btn => {
      const currentHref = btn.getAttribute('href');
      if (!currentHref || currentHref.startsWith('#') || currentHref === 'https://wa.me/5511974824443') {
        btn.setAttribute('href', defaultWaUrl);
      }
    });

    const floatingWa = document.getElementById('floating-whatsapp-link');
    if (floatingWa && (!floatingWa.getAttribute('href') || floatingWa.getAttribute('href').startsWith('#'))) {
      floatingWa.setAttribute('href', defaultWaUrl);
    }
  }

  // ==========================================================================
  // 10. PROTEÇÃO CONTRA CÓPIA, SELEÇÃO E ZOOM
  // ==========================================================================
  // Bloquear clique com botão direito (Menu de Contexto)
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  // Bloquear cópia e recorte
  document.addEventListener('copy', (e) => e.preventDefault());
  document.addEventListener('cut', (e) => e.preventDefault());

  // Bloquear arrastar imagens e elementos
  document.addEventListener('dragstart', (e) => e.preventDefault());

  // Bloquear atalhos de teclado (Zoom e Cópia)
  document.addEventListener('keydown', (e) => {
    // Bloquear Ctrl + (+ / - / = / 0)
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
      e.preventDefault();
    }
    // Bloquear Ctrl + C, Ctrl + U, Ctrl + S, Ctrl + P
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
    }
    // Bloquear F12
    if (e.key === 'F12') {
      e.preventDefault();
    }
  });

  // Bloquear zoom com Ctrl + Scroll do mouse
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Bloquear pinça / gesto de zoom no mobile
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // Bloquear zoom por duplo toque no mobile
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, { passive: false });

  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('gesturechange', (e) => e.preventDefault());
  document.addEventListener('gestureend', (e) => e.preventDefault());
});
