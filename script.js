// Interatividade Básica - Tech Place Store

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling para links internos
    const navLinks = document.querySelectorAll('.nav-links a, .btn-secondary, .footer-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Fecha o menu mobile se estiver aberto
                    const navLinksContainer = document.querySelector('.nav-links');
                    if (navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        document.body.style.overflow = 'auto'; // Restaura rolagem
                    }
                }
            }
        });
    });

    // Menu Mobile - Toggle class "active"
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');

            // Trava a rolagem da página quando o menu estive aberto
            if (navLinksContainer.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Fecha o menu ao clicar fora dele na área escura (se implementado) ou redimensionar a tela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Opção extra: fechar clicando fora (no próprio nav-links antes dos itens)
    navLinksContainer.addEventListener('click', (e) => {
        if (e.target === navLinksContainer && window.innerWidth <= 992) {
            navLinksContainer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
