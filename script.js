window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in-on-scroll, .slide-up-on-scroll');
    sections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
