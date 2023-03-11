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

const botao = document.getElementById('botao-responsivo')
const menu = document.querySelector("#menu")
const item = document.querySelector(".lista")

function ativamenu() {
    if (menu.style.display=='flex') {
        menu.style.display='none'
    } else {
        menu.style.display='flex'
    }
}

function desativamenu() {
    menu.style.display='none'
}

botao.addEventListener("click", ()=>{
    ativamenu()
})

item.addEventListener("click", ()=> {
    desativamenu()
})

function verificaMenu() {
    if (menu.style.display='none' && window.innerWidth >= 700) {
        menu.style.display='flex'
    }
}