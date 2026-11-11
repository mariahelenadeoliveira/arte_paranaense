document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade dos Botões de Curtir
    const botoesCurtir = document.querySelectorAll('.curtir');

    botoesCurtir.forEach((botao) => {
        botao.addEventListener('click', () => {
            const contadorSpan = botao.querySelector('span');
            let curtidas = parseInt(contadorSpan.textContent, 10) || 0;
            
            // Incrementa o número de curtidas
            curtidas++;
            contadorSpan.textContent = curtidas;

            // Efeito visual ao clicar
            botao.style.transform = 'scale(1.1)';
            setTimeout(() => {
                botao.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // 2. Funcionalidade de Alternar Tema (Modo Escuro / Claro)
    const btnTema = document.querySelector('.btn-temaa');
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('tema-escuro');
            
            // Altera o ícone do botão
            if (document.body.classList.contains('tema-escuro')) {
                btnTema.textContent = '☀️';
            } else {
                btnTema.textContent = '🌙';
            }
        });
    }
});