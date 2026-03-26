document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = 'Top';
    scrollToTopBtn.classList.add('btn', 'btn-primary', 'scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            navbar.classList.add('scrolled');
            scrollToTopBtn.style.display = 'block';
        } else {
            navbar.classList.remove('scrolled');
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sections = document.querySelectorAll('section');
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeIn');
                }
            });
        }, options);
    
        sections.forEach(section => {
            observer.observe(section);
        });
    });
    