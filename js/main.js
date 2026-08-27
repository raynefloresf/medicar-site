// ===== Catálogo de Productos =====
const products = [
    {
        id: 1,
        title: 'Bujías NGK Iridium',
        category: 'motor',
        badge: 'Más vendido',
        description: 'Bujías de alto rendimiento para motores a gasolina. Mayor durabilidad y mejor combustión.',
        price: '$8.50',
        icon: 'fa-fire'
    },
    {
        id: 2,
        title: 'Filtro de Aceite Bosch',
        category: 'motor',
        description: 'Filtro de aceite premium con alta capacidad de filtración. Compatible con múltiples modelos.',
        price: '$12.00',
        icon: 'fa-oil-can'
    },
    {
        id: 3,
        title: 'Alternador 90A',
        category: 'electrico',
        badge: 'Nuevo',
        description: 'Alternador de 90 amperios para vehículos medianos. Garantía de 1 año.',
        price: '$145.00',
        icon: 'fa-car-battery'
    },
    {
        id: 4,
        title: 'Batería 12V 60Ah',
        category: 'electrico',
        description: 'Batería libre de mantenimiento. Alto rendimiento de arranque en frío.',
        price: '$95.00',
        icon: 'fa-bolt'
    },
    {
        id: 5,
        title: 'Pastillas de Freno Delanteras',
        category: 'frenos',
        badge: 'Oferta',
        description: 'Juego de pastillas cerámicas de bajo ruido. Excelente frenado y larga duración.',
        price: '$45.00',
        icon: 'fa-compact-disc'
    },
    {
        id: 6,
        title: 'Discos de Freno Ventilados',
        category: 'frenos',
        description: 'Par de discos ventilados con tratamiento anticorrosivo. Máxima seguridad.',
        price: '$85.00',
        icon: 'fa-circle-notch'
    },
    {
        id: 7,
        title: 'Amortiguadores Monroe',
        category: 'suspension',
        description: 'Juego de 4 amortiguadores para máxima comodidad y estabilidad en carretera.',
        price: '$220.00',
        icon: 'fa-arrows-alt-v'
    },
    {
        id: 8,
        title: 'Kit de Embrague',
        category: 'motor',
        description: 'Kit completo con disco, plato y collarín hidráulico. Calidad OEM.',
        price: '$180.00',
        icon: 'fa-cog'
    },
    {
        id: 9,
        title: 'Sensor de Oxígeno',
        category: 'electrico',
        description: 'Sensor lambda de 4 cables. Optimiza el consumo de combustible.',
        price: '$35.00',
        icon: 'fa-wave-square'
    },
    {
        id: 10,
        title: 'Aceite Motor 20W50',
        category: 'motor',
        description: 'Aceite semisintético para motor. Protección superior contra desgaste.',
        price: '$28.00',
        icon: 'fa-oil-can'
    },
    {
        id: 11,
        title: 'Luces LED H4',
        category: 'accesorios',
        badge: 'Tendencia',
        description: 'Par de luces LED de alta luminosidad. Instalación plug & play.',
        price: '$55.00',
        icon: 'fa-lightbulb'
    },
    {
        id: 12,
        title: 'Cubrevolantes Premium',
        category: 'accesorios',
        description: 'Cubrevolante de cuero genuino con costura reforzada. Ergonómico y elegante.',
        price: '$18.00',
        icon: 'fa-circle'
    }
];

// ===== Renderizar Productos =====
function renderProducts(category = 'todos') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filtered = category === 'todos' 
        ? products 
        : products.filter(p => p.category === category);

    grid.innerHTML = filtered.map(product => `
        <article class="product-card fade-in" data-category="${product.category}">
            <div class="product-image">
                <i class="fas ${product.icon}"></i>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="https://wa.me/584145550000?text=Hola%20Medicar%20Electronic,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.title)}" 
                       class="product-btn" target="_blank" rel="noopener">
                        <i class="fab fa-whatsapp"></i> Consultar
                    </a>
                </div>
            </div>
        </article>
    `).join('');

    // Animar productos al cargar
    setTimeout(() => {
        document.querySelectorAll('.product-card.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 50);
        });
    }, 50);
}

function getCategoryName(category) {
    const names = {
        motor: 'Motor',
        electrico: 'Eléctrico',
        frenos: 'Frenos',
        suspension: 'Suspensión',
        accesorios: 'Accesorios'
    };
    return names[category] || category;
}

// ===== Tabs de Productos =====
function initProductTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts(tab.dataset.category);
        });
    });
}

// ===== Menú Móvil =====
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = toggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = toggle.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
        });
    });
}

// ===== Header Scroll =====
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== Back to Top =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Nav Link Active State =====
function initNavActive() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Contador Animado =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        element.textContent = value.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(update);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                if (target) {
                    animateCounter(el, target);
                    observer.unobserve(el);
                }
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ===== Validación y Envío de Formulario =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Limpiar errores previos
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        
        const status = document.getElementById('formStatus');
        const nombre = form.nombre;
        const telefono = form.telefono;
        const email = form.email;
        const asunto = form.asunto;
        const mensaje = form.mensaje;
        
        let valid = true;

        // Validar nombre
        if (nombre.value.trim().length < 3) {
            nombre.classList.add('error');
            valid = false;
        }

        // Validar teléfono
        const phoneRegex = /^[\d\s\+\-\(\)]{7,}$/;
        if (!phoneRegex.test(telefono.value.trim())) {
            telefono.classList.add('error');
            valid = false;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('error');
            valid = false;
        }

        // Validar asunto
        if (!asunto.value) {
            asunto.classList.add('error');
            valid = false;
        }

        // Validar mensaje
        if (mensaje.value.trim().length < 10) {
            mensaje.classList.add('error');
            valid = false;
        }

        if (!valid) {
            status.className = 'form-status error';
            status.textContent = '⚠️ Por favor, completa todos los campos correctamente.';
            return;
        }

        // Construir mensaje para WhatsApp
        const vehiculo = form.vehiculo.value.trim() || 'No especificado';
        const whatsappMessage = `Hola Medicar Electronic!%0A%0A` +
            `*Nombre:* ${nombre.value.trim()}%0A` +
            `*Teléfono:* ${telefono.value.trim()}%0A` +
            `*Email:* ${email.value.trim()}%0A` +
            `*Vehículo:* ${vehiculo}%0A` +
            `*Asunto:* ${asunto.options[asunto.selectedIndex].text}%0A` +
            `*Mensaje:* ${mensaje.value.trim()}`;

        // Mostrar estado de éxito
        status.className = 'form-status success';
        status.innerHTML = '✅ ¡Mensaje preparado! Se abrió WhatsApp para enviar tu consulta.';

        // Abrir WhatsApp con el mensaje
        setTimeout(() => {
            window.open(`https://wa.me/584145550000?text=${whatsappMessage}`, '_blank');
            form.reset();
            setTimeout(() => {
                status.style.display = 'none';
            }, 5000);
        }, 800);
    });
}

// ===== Animaciones al Scroll =====
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
}

// ===== Año dinámico en footer =====
function setCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ===== Inicialización =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initProductTabs();
    initMobileMenu();
    initHeaderScroll();
    initBackToTop();
    initNavActive();
    initCounters();
    initContactForm();
    initScrollAnimations();
    setCurrentYear();
});
