document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero__content__branding');

    hero.classList.add('animate');
});

function trocarImagem(){
    var imagemDoHeader = document.getElementById("logo");
    var larguraDaTela = window.innerWidth; // Obtém a largura da tela

    if (larguraDaTela <= 768) {
        // Se a largura da tela for menor ou igual a 768px, troque a imagem
        imagemDoHeader.src = "dist/images/Netflix_N_logo.svg";
    } else {
        // Caso contrário, use a imagem padrão para desktop
        imagemDoHeader.src = "dist/images/Netflix-Logo.wine.svg";
    }
}

function trocarConteudo() {
    var video = document.getElementById("video");
    var imagem = document.getElementById("imagem");
    var larguraDaTela = window.innerWidth; // Obtém a largura da tela

    if (larguraDaTela <= 768) {
        // Se a largura da tela for menor ou igual a 768px, oculta o vídeo e mostra a imagem
        video.style.display = "none";
        imagem.style.display = "block";
    } else {
        // Caso contrário, mostra o vídeo e oculta a imagem
        video.style.display = "block";
        imagem.style.display = "none";
    }
}

window.addEventListener("load", trocarImagem,trocarConteudo);
window.addEventListener("resize", trocarImagem,trocarConteudo);