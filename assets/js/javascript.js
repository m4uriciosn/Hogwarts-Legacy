const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.querySelector('#video');
const botaoFechar = document.querySelector('.fechar-modal');

function AlternarModal() {
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener("click", () => {
    AlternarModal();
    video.setAttribute('src', "https://www.youtube.com/embed/78CP8na1Fpo");
});

botaoFechar.addEventListener("click", () => {
    AlternarModal();
    video.setAttribute("src", "");
});