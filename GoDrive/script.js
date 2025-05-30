window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.GDH_paralax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
});
