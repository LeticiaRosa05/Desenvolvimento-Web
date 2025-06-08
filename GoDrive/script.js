window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.GDH_paralax');
    let scrollPosition = window.pageYOffset;
    if (parallax) {
        parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
    }

    const mudaCor = document.querySelector('.mudaCor');
    const sectionMs = document.querySelectorAll('.section_modal');
    const transp = document.querySelectorAll('.transparente');
    const borderS = document.querySelectorAll('.borderStyle');
    const h1s = document.querySelectorAll('h1');
    const ps = document.querySelectorAll('p');

    if (mudaCor && sectionMs.length > 0) {
        const mudaCorTop = mudaCor.getBoundingClientRect().top;
        if (mudaCorTop <= 0) {
            sectionMs.forEach(sectionM => sectionM.style.backgroundColor = '#2c2c2c');
            h1s.forEach(h1 => h1.style.color = '#e9e7e7');
            ps.forEach(p => p.style.color = '#e9e7e7');
        } else {
            sectionMs.forEach(sectionM => sectionM.style.backgroundColor = '#f3f3f3');
            h1s.forEach(h1 => h1.style.color = '#2c2c2c');
            ps.forEach(p => p.style.color = '#2c2c2c');
        }
    }

    if (mudaCor && transp.length > 0) {
        const transpTop = transp[0].getBoundingClientRect().top;
        if (transpTop <= 500) {
            transp.forEach(t => t.style.backgroundColor = 'rgba(44, 44, 44, 0.88)');
            borderS.forEach(t => t.style.borderColor = '#096300');
            h1s.forEach(h1 => h1.style.color = '#e9e7e7');
            ps.forEach(p => p.style.color = '#e9e7e7');
        } else {
            transp.forEach(t => t.style.backgroundColor = 'transparent');
            borderS.forEach(t => t.style.borderColor = 'transparent');
            h1s.forEach(h1 => h1.style.color = 'transparent');
            ps.forEach(p => p.style.color = 'transparent');
        }
    }
});

const imagens = document.querySelectorAll('.item');

imagens.forEach(img => {
    img.style.transition = "transform 0.2s ease";

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
document.getElementById('buttonEnviar').onclick = function() {
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
};

window.onclick = function(event) {  /* fecha o modal se clicar fora dele */
    var modal = document.getElementById('modalContato');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};