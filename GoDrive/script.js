window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.GDH_paralax');
    let nF_parallax = document.querySelector('.GDnF_paralax');
    let scrollPosition = window.pageYOffset;
    if (parallax) {
        parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
    }
    if (nF_parallax) {
        nF_parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
    }

    const mudaCor = document.querySelector('.mudaCor');
    const sectionMs = document.querySelectorAll('.section_modal');
    const campoM = document.querySelectorAll('.modal_campo');
    const transp = document.querySelectorAll('.transparente');
    const borderS = document.querySelectorAll('.borderStyle');
    const borderCSS = document.querySelectorAll('.borderStyleCSS');
    const h1s = document.querySelectorAll('h1');
    const ps = document.querySelectorAll('p');

    if (mudaCor && sectionMs.length > 0) { /* página index */
        const mudaCorTop = mudaCor.getBoundingClientRect().top;
        if (mudaCorTop <= 0) {
            sectionMs.forEach(sectionM => sectionM.style.backgroundColor = '#2c2c2c');
            campoM.forEach(campoM => campoM.style.backgroundColor = '#222222');
            h1s.forEach(h1 => h1.style.color = '#e9e7e7');
            ps.forEach(p => p.style.color = '#e9e7e7');
        } else {
            sectionMs.forEach(sectionM => sectionM.style.backgroundColor = '#f3f3f3');
            campoM.forEach(campoM => campoM.style.backgroundColor = '#e8e7e7');
            h1s.forEach(h1 => h1.style.color = '#2c2c2c');
            ps.forEach(p => p.style.color = '#2c2c2c');
        }
        borderCSS.forEach(bCSS => {
            bCSS.style.backgroundColor = '#222222';
            bCSS.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
            bCSS.addEventListener('mouseover', () => {
                bCSS.style.backgroundColor = "#17d80544";
                bCSS.style.color = "#222222";
                bCSS.style.fontWeight = "bold";
            });
            bCSS.addEventListener('mouseout', () => {
                if (bCSS.id === 'buttonContato') {
                    bCSS.style.backgroundColor = "#222222";
                    bCSS.style.color = "#3ce02a"; // verde
                } else {
                    bCSS.style.backgroundColor = "#222222";
                    bCSS.style.color = "#e9e7e7"; // branco
                }
            });            
            bCSS.addEventListener('click', () => {
                bCSS.style.transform = "scale(0.85)";
                bCSS.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                setTimeout(() => {
                    bCSS.style.transform = "scale(1)";
                    bCSS.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
                }, 110); /* volta ao normal em 110ms */
            });
        });
    }

    if (mudaCor && transp.length > 0) {  /* página faleConosco */
        const transpTop = transp[0].getBoundingClientRect().top;
        if (transpTop <= 700) {
            transp.forEach(t => t.style.backgroundColor = 'rgba(44, 44, 44, 0.88)');
            campoM.forEach(campoM => campoM.style.backgroundColor = 'rgba(34, 34, 34, 0.95)');
            borderS.forEach(t => t.style.borderColor = '#096300');
            borderCSS.forEach(bCSS => {
                bCSS.style.backgroundColor = '#222222';
                bCSS.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
                bCSS.addEventListener('mouseover', () => {
                    bCSS.style.backgroundColor = "#17d80544";
                });
                bCSS.addEventListener('mouseout', () => {
                    bCSS.style.backgroundColor = "#222222";
                });
                bCSS.addEventListener('click', () => {
                    bCSS.style.transform = "scale(0.80)";
                    bCSS.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    setTimeout(() => {
                        bCSS.style.transform = "scale(1)";
                        bCSS.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
                    }, 110); /* volta ao normal em 110ms */
                });
            });
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

const imagens = document.querySelectorAll('.item'); /* zoom na lista de características da empresa, pg index; carros na pg Nossa frota */
const carrosE = document.querySelectorAll('.carrosEscala');

imagens.forEach(img => {
    img.style.transition = "transform 0.2s ease";

    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.2)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});

carrosE.forEach(carros => {
    carros.style.transition = "transform 0.3s ease";

    carros.addEventListener('mouseover', () => {
        carros.style.transform = "scale(1.15)";
    });

    carros.addEventListener('mouseout', () => {
        carros.style.transform = "scale(1)";
    });
});

document.getElementById('buttonContato').onclick = function() {
    document.getElementById('modalContato').style.display = 'flex';
};
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modalContato').style.display = 'none';
};
document.getElementById('buttonEnviar').onclick = function() {
    /*alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');*/
};

window.onclick = function(event) {  /* fecha o modal se clicar fora dele */
    var modal = document.getElementById('modalContato');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};