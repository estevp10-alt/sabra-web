// =====================================================
// SABRA AGENCY - JAVASCRIPT INTERACTIONS
// =====================================================

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANIMATED COUNTER =====
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }

            // Animate service cards with stagger
            if (entry.target.classList.contains('service-card-flip')) {
                const cards = document.querySelectorAll('.service-card-flip');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    observer.observe(stat);
});

// Observe service cards
document.querySelectorAll('.service-card-flip').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Observe benefit cards
document.querySelectorAll('.benefit-card').forEach(card => {
    observer.observe(card);
});

// ===== PARTICLE SYSTEM =====
const particlesContainer = document.getElementById('particles-container');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// ===== FLIP CARDS MOBILE SUPPORT =====
// On mobile, tap to flip instead of hover
if (window.innerWidth <= 768) {
    document.querySelectorAll('.service-card-flip').forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('flipped');
            const inner = this.querySelector('.service-card-inner');
            if (this.classList.contains('flipped')) {
                inner.style.transform = 'rotateY(180deg)';
            } else {
                inner.style.transform = 'rotateY(0deg)';
            }
        });
    });
}

// ===== PARALLAX EFFECT ON HERO SPHERE =====
const sphere = document.querySelector('.sphere');
if (sphere) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;
        sphere.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// ===== CURSOR GLOW EFFECT (OPTIONAL - DESKTOP ONLY) =====
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== FORM VALIDATION (IF CONTACT FORM EXISTS) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        // 1. Loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // 2. Collect data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        const webhookUrl = 'https://n8n-n8n.tmt41n.easypanel.host/webhook/801733e9-3210-4edb-8842-6432cb0f6e49';
        data.source = 'Landing Dental Madrid'; // Etiqueta de origen para el CRM

        try {
            // 3. Send to webhook (Configuración estándar)
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // 4. Handle success
            if (response.ok) {
                submitButton.textContent = '✓ ¡Solicitud enviada! Te contactamos en menos de 24h';
                contactForm.reset();
                setTimeout(() => { submitButton.textContent = originalButtonText; }, 4000);

            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            // 5. Handle error
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o escríbenos directamente a contacto@sabraagency.com');
        } finally {
            // 6. Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.glass-card, .benefit-card');
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ===== DEBOUNCE UTILITY =====
function debounce(func, wait) {
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

// ===== RESIZE HANDLER =====
const handleResize = debounce(() => {
    // Recalculate any size-dependent features
    console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);

// ===== CONSOLE MESSAGE =====
console.log('%c🦷 Sabra Agency', 'font-size: 24px; font-weight: bold; color: #3B82F6;');
console.log('%cAutomatización IA para Clínicas Dentales en Madrid', 'font-size: 14px; color: #60A5FA;');
console.log('%c💡 Más pacientes. Menos gestión. Resultados desde el mes 1.', 'font-size: 12px; color: #A1A1AA;');
