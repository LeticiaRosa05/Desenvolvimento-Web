window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.GDH_paralax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';

    const mudaCor = document.querySelector('.mudaCor');
    const section = document.querySelector('section');
    const h1s = document.querySelectorAll('h1');
    const ps = document.querySelectorAll('p');

    if (mudaCor && section) {
        const mudaCorTop = mudaCor.getBoundingClientRect().top;
        if (mudaCorTop <= 0) {  // muda as cores quando a tela chega na seção
            section.style.backgroundColor = '#2c2c2c';
            h1s.forEach(h1 => h1.style.color = '#e9e7e7');
            ps.forEach(p => p.style.color = '#e9e7e7');
        } else {
            section.style.backgroundColor = '#f3f3f3';
            h1s.forEach(h1 => h1.style.color = '#2c2c2c');
            ps.forEach(p => p.style.color = '#2c2c2c');
        }
    }
});

const imagens = document.querySelectorAll('.item'); //pega todas com a classe icon

imagens.forEach(img => {
    img.style.transition = "transform 0.2s ease"; //deixa a transição de tamanhos suave

    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.15)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});
