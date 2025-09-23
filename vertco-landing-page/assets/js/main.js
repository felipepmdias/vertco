document.addEventListener('DOMContentLoaded', function() {

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.kit-item, main section h2, main section p');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });

});

// Adicione este CSS extra ao seu arquivo style.css para a animação funcionar
/*
.fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-element.visible {
    opacity: 1;
    transform: translateY(0);
}
*/