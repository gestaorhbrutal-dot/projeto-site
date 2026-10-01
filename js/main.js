// Menu mobile: abre e fecha o menu principal
const botaoMenu = document.getElementById('menu-botao');
const menuPrincipal = document.getElementById('menu-principal');

if (botaoMenu && menuPrincipal) {
  botaoMenu.addEventListener('click', () => {
    const estaAberto = menuPrincipal.classList.toggle('esta-aberto');
    botaoMenu.setAttribute('aria-expanded', String(estaAberto));
  });

  // Fecha o menu ao clicar em um link (útil no celular)
  menuPrincipal.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuPrincipal.classList.remove('esta-aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano atual no rodapé
const anoAtual = document.getElementById('ano-atual');
if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

/*
  A partir daqui, o assistente de vendas (chat.js) será incluído
  antes do fechamento de </body> em index.html.
*/
