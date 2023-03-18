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
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

function MenuPadrao() {
    menu.style.display='none'
    botao.style.backgroundColor='black'
    line1.style.transform='none'
    line2.style.display='block'
    line3.style.transform='none'
}

function toggleMenu() {
    if (menu.style.display=='flex') {
        MenuPadrao()
    } else {
        menu.style.display='flex'
        botao.style.backgroundColor='grey'
        line1.style.transform='translateY(6px) rotate(-45deg)'
        line2.style.display='none'
        line3.style.transform='translateY(-6px) rotate(45deg)'
    }
}

function desativamenu() {
    if (window.innerWidth <= 700) {
        MenuPadrao()
    }
}

botao.addEventListener("click", ()=> toggleMenu() )

item.addEventListener("click", ()=> desativamenu() )

function verificaMenu() {
    if (menu.style.display=='none' && window.innerWidth >= 700) {
        menu.style.display='flex'
    }
}