document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                // Adjust for fixed header
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. WhatsApp Order Form Logic (Tesler's Law Application)
    const orderForm = document.getElementById('orderForm');
    if(orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const nome = document.getElementById('nome').value.trim();
            const data = document.getElementById('data').value;
            const servico = document.getElementById('servico').value;
            const observacao = document.getElementById('observacao').value.trim();
            
            if(!nome || !data || !servico) {
                alert("Por favor, preencha os campos obrigatórios.");
                return;
            }
            
            // Data format (YYYY-MM-DD -> DD/MM/YYYY)
            const arrayData = data.split('-');
            const dataFormatada = arrayData.length === 3 ? `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}` : data;

            // Target number from prompt
            const telefone = "550000000000"; // Assuming the original placeholder, adjust if needed
            
            // Mount the message structure cleanly
            const mensagem = `Olá, me chamo *${nome}*.
Gostaria de fazer um pedido na gráfica! 💎

📋 *Serviço desejado:* ${servico}
📅 *Prazo / Data:* ${dataFormatada}
📝 *Observações:* 
${observacao ? observacao : "Nenhuma obs adicional."}`;

            // Encode string for URL
            const encodeMessage = encodeURIComponent(mensagem);
            
            // WhatsApp Web / App API Link
            const url = `https://wa.me/${telefone}?text=${encodeMessage}`;
            
            // Submit form logic - open WhatsApp
            const submitBtn = orderForm.querySelector('.btn-whatsapp');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = "Redirecionando...";
            submitBtn.style.opacity = "0.8";
            
            setTimeout(() => {
                window.open(url, '_blank');
                // Reset button after delay
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = "1";
                orderForm.reset();
            }, 800);
        });
    }

    // ============================================
    // LIGHTBOX AND PORTFOLIO LOGIC (FROM SITE 01)
    // ============================================
    const portfolioImages = [
        "assets/branding.png", "assets/cards.png", "assets/catalogs.png", "assets/branding.png",
        "assets/cards.png", "assets/catalogs.png", "assets/branding.png", "assets/cards.png",
        "assets/catalogs.png", "assets/branding.png", "assets/cards.png", "assets/catalogs.png",
        "assets/branding.png", "assets/cards.png", "assets/catalogs.png", "assets/branding.png",
        "assets/cards.png", "assets/catalogs.png", "assets/branding.png", "assets/cards.png"
    ];

    let currentImageIndex = 0;

    window.openLightbox = function(index) {
        currentImageIndex = index;
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');

        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');

        updateLightboxContent();

        // Trigger animation
        setTimeout(() => {
            img.classList.remove('scale-95', 'opacity-0');
            img.classList.add('scale-100', 'opacity-100');
        }, 50);

        document.body.style.overflow = 'hidden';
    }

    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');

        img.classList.remove('scale-100', 'opacity-100');
        img.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            lightbox.classList.remove('flex');
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    window.changeLightbox = function(dir) {
        currentImageIndex = (currentImageIndex + dir + portfolioImages.length) % portfolioImages.length;
        const img = document.getElementById('lightbox-img');

        img.classList.add('opacity-0');
        setTimeout(() => {
            updateLightboxContent();
            img.classList.remove('opacity-0');
        }, 200);
    }

    function updateLightboxContent() {
        const img = document.getElementById('lightbox-img');
        const counter = document.getElementById('lightbox-counter');
        if(img && counter) {
            img.src = portfolioImages[currentImageIndex];
            counter.textContent = `${currentImageIndex + 1} / ${portfolioImages.length}`;
        }
    }

    // Handle Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') changeLightbox(1);
        if (e.key === 'ArrowLeft') changeLightbox(-1);
    });

    // Dynamic Status Calculation
    function updateStatus() {
        const now = new Date();
        const day = now.getDay(); // 0-6
        const hour = now.getHours();
        const minute = now.getMinutes();
        const timeVal = hour * 100 + minute; // e.g. 14:30 -> 1430

        const badge = document.getElementById('status-badge');
        const dayItems = document.querySelectorAll('.day-item');

        if(!badge) return;

        let isOpen = false;

        // Simple logic: Seg-Sex (1-5) 08-18, Sab (6) 08-12
        if (day >= 1 && day <= 5) {
            if (timeVal >= 800 && timeVal < 1800) isOpen = true;
        } else if (day === 6) {
            if (timeVal >= 800 && timeVal < 1200) isOpen = true;
        }

        // Update Badge
        if (isOpen) {
            badge.textContent = 'Aberto Agora';
            badge.className = 'px-3 py-1 rounded-full text-xs font-medium bg-[#22C55E]/15 text-[#22C55E]';
        } else {
            badge.textContent = 'Fechado';
            badge.className = 'px-3 py-1 rounded-full text-xs font-medium bg-border-subtle text-text-muted';
        }

        // Highlight Current Day Line
        dayItems.forEach(item => {
            const itemDayAttr = item.getAttribute('data-day');
            if ((itemDayAttr == "1" && day >= 1 && day <= 5) || (itemDayAttr == day)) {
                item.classList.add('bg-accent-subtle', 'rounded-lg', 'px-3', '-mx-3');
                item.querySelector('span:first-child').classList.add('text-accent-primary', 'font-bold');
                if (isOpen && !item.querySelector('.dot')) {
                    const dot = document.createElement('span');
                    dot.className = 'dot w-2 h-2 rounded-full bg-accent-light mr-2 inline-block animate-pulse';
                    item.querySelector('span:first-child').prepend(dot);
                }
            }
        });
    }

    updateStatus();
    setInterval(updateStatus, 60000);

    // Testimonial Carousel Logic
    let currentSlide = 0;
    const track = document.getElementById('testimonial-track');
    const totalReviews = 5;

    window.moveCarousel = function(dir) {
        if(!track) return;
        const isMobile = window.innerWidth < 768; // Tailwind md breakpoint is 768px
        const itemsPerPage = isMobile ? 1 : 3;
        const maxSlides = totalReviews - itemsPerPage;

        currentSlide += dir;

        // Loop array
        if (currentSlide < 0) currentSlide = 0;
        if (currentSlide > maxSlides) currentSlide = maxSlides;

        const gap = 24; // gap-6 é 24px
        // Pega o primeiro elemento de card, ignorando marcações fixas ou tags de script
        const firstCard = track.querySelector('div.bg-surface-card');
        if (!firstCard) return;
        
        const cardWidth = firstCard.offsetWidth;
        const offset = currentSlide * (cardWidth + gap);

        track.style.transform = `translateX(-${offset}px)`;
    }

    window.addEventListener('resize', () => {
        currentSlide = 0;
        if (track) track.style.transform = `translateX(0)`;
    });

    // Price Modal Logic
    const pricesMock = {
        "Impressões em Geral": 45, "Adesivos e Rótulos": 90, "Apostilas": 15, "Blocos e Talões": 25,
        "Cartões de Visita": 49, "Panfletos": 85, "Cartazes": 30, "Livretos": 120, "Placas": 60,
        "Agendas": 35, "Cadernos": 28, "Banners": 45, "Brindes Corporativos": 150, "Cardápios": 40,
        "Canecas": 25, "Quadros": 65, "Tags e Etiquetas": 40, "Impressão de Fotos": 5, "Envelopes": 35,
        "Pastas": 125, "Crachás": 12, "Convites": 150, "Calendários": 20, "Comandas": 45
    };

    window.showServicePrice = function(serviceName) {
        const modal = document.getElementById('price-modal');
        const modalCard = document.getElementById('price-modal-card');
        const titleEl = document.getElementById('price-modal-title');
        const valueEl = document.getElementById('price-modal-value');

        if(modal && titleEl && valueEl) {
            titleEl.textContent = serviceName;
            const price = pricesMock[serviceName] || 50; // Random fallback
            valueEl.textContent = price;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Animation
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.classList.add('opacity-100');
                modalCard.classList.remove('scale-95');
                modalCard.classList.add('scale-100');
            }, 10);
            
            document.body.style.overflow = 'hidden';
            
            // Pre-select service in form if they click Go
            const formSelect = document.getElementById('servico');
            if(formSelect) {
                // simple check
                Array.from(formSelect.options).forEach(opt => {
                    if(opt.value.includes(serviceName) || serviceName.includes(opt.value)) {
                        formSelect.value = opt.value;
                    }
                });
            }
        }
    };

    window.closePriceModal = function() {
        const modal = document.getElementById('price-modal');
        const modalCard = document.getElementById('price-modal-card');
        
        if(modal) {
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
            modalCard.classList.remove('scale-100');
            modalCard.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.remove('flex');
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }
    };

    // Smooth Scroll active link
    window.addEventListener('scroll', () => {
        const sections = ['home', 'services', 'portfolio', 'about-services', 'stats', 'catalog', 'testimonials', 'location', 'pedido'];
        let current = '';

        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop - 120;
                if (window.scrollY >= sectionTop) {
                    current = id;
                }
            }
        });

        document.querySelectorAll('nav a').forEach(a => {
            if(a.classList) a.classList.remove('text-accent-mid');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('text-accent-mid');
            }
        });
    });

    // Intersection Observer for Reveal Animations (from Site 01)
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); 
            }
        });
    };

    if(typeof IntersectionObserver !== 'undefined') {
        const revealObserver = new IntersectionObserver(revealCallback, {
            threshold: 0.1
        });

        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }
});
