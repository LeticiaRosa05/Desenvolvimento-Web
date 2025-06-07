window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.GDH_paralax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';

    const mudaCor = document.querySelector('.mudaCor');
    const sectionMs = document.querySelectorAll('.section_modal');
    const h1s = document.querySelectorAll('h1');
    const ps = document.querySelectorAll('p');

    if (mudaCor && sectionMs.length > 0) {
        const mudaCorTop = mudaCor.getBoundingClientRect().top;
        if (mudaCorTop <= 0) {  // muda as cores quando a tela chega na seção
            sectionMs.forEach(sectionM => sectionM.style.backgroundColor = '#2c2c2c');
            h1s.forEach(h1 => h1.style.color = '#e9e7e7');
            ps.forEach(p => p.style.color = '#e9e7e7');
        } else {
            sectionMs.forEach(sectionM => sectionM.style.backgroundColor = '#f3f3f3');
            h1s.forEach(h1 => h1.style.color = '#2c2c2c');
            ps.forEach(p => p.style.color = '#2c2c2c');
            
        }
    }
});

const imagens = document.querySelectorAll('.item'); //pega todas com a classe icon

imagens.forEach(img => {
    img.style.transition = "transform 0.2s ease"; //deixa a transição de tamanhos suave

    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.2)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});

document.getElementById('buttonContato').onclick = function() {
    document.getElementById('modalContato').style.display = 'flex';
};
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modalContato').style.display = 'none';
};
// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById('modalContato');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};