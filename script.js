document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENU MOBILE TOGGLE ---
    const menuToggle = document.querySelector('.menu_toggle');
    const navMenu = document.querySelector('.nav_menu');
    const navLinks = document.querySelectorAll('.nav_menu a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Troca o ícone do menu
            const icon = menuToggle.querySelector('.material-icons');
            if(navMenu.classList.contains('active')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
    }

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelector('.material-icons').textContent = 'menu';
        });
    });

    // --- 2. HEADER SCROLL EFFECT (Sombra ao rolar) ---
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // --- 3. FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq_item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq_question');
        
        question.addEventListener('click', () => {
            // Opcional: Fechar os outros ao abrir um
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    // --- 4. SMOOTH SCROLL PARA LINKS INTERNOS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Ajuste para o header fixo (80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

function enviarProZap(e) {
    e.preventDefault(); 

    const nome = document.getElementById('form_nome').value;
    const tel = document.getElementById('form_tel').value;
    const msg = document.getElementById('form_msg').value;

    const texto = `Olá, equipe do Dr. Carlos Alberto! Me chamo *${nome}* (${tel}).\n\n${msg}`;
    const textoCodificado = encodeURIComponent(texto);
    
    // Substitua pelo número real do Dr. Carlos Alberto (Apenas números com DDI + DDD)
    const numeroWhatsApp = "5511999999999"; 

    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`, '_blank');
}