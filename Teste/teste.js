const container = document.querySelector('.scroll_list');
const itens = container.querySelectorAll('.item');

container.addEventListener('scroll', () => {
    const center = container.scrollTop + container.clientHeight / 2;
    let minDistance = Infinity;
    let mainIndex = -1;

    // Encontrar o item principal (em evidência)
    itens.forEach((item, idx) => {
        const boxCenter = item.offsetTop + item.clientHeight / 2;
        const distance = Math.abs(center - boxCenter);

        if (distance < minDistance) {
            minDistance = distance;
            mainIndex = idx;
        }
    });

    itens.forEach((item, idx) => {
        if (idx === mainIndex) {
            // Item em evidência
            item.style.opacity = 1;
            item.style.transform = 'scale(1)';
        } else if (idx === mainIndex - 1 || idx === mainIndex + 1) {
            // Imediatamente acima ou abaixo
            item.style.opacity = 0.5;
            item.style.transform = 'scale(0.8)';
        } else if (idx === mainIndex - 2 || idx === mainIndex + 2) {
            // Terciariamente distante
            item.style.opacity = 0.1;
            item.style.transform = 'scale(0.5)';
        } else {
            // Demais itens
            item.style.opacity = 0;
            item.style.transform = 'scale(0.05)';
        }
    });
});







// JS p verificação de campo vazio ou preenchido na pg Fale conosco da GoDrive
//Caso for usar, colocar na linha 130
document.getElementById('buttonEnviar').onclick = function() {
    const campos = document.querySelectorAll('.modal_campo');
    let preenchido = true;
    campos.forEach(campo => {
        if (campo.value.trim()) {
            preenchido = false;
        }
    });
    if (preenchido) {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
    /*alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');*/
};