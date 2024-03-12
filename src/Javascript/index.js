// JS PARA ADICIONAR UM BG NO HEADER
window.addEventListener("scroll", function () {
    let HeaderBtnSearch = document.querySelector(".HeaderBtnSearch");
    let Header = document.querySelector(".Header");
    let SeccaoIATP = document.querySelector(".SeccaoIATP");

    HeaderBtnSearch.classList.toggle('BgHeader', window.scrollY > 50)
    Header.classList.toggle('AddCordoHeader', window.scrollY > 50)
    Header.classList.toggle('AddCordoHeader', window.scrollY > 50)
    SeccaoIATP.classList.toggle('SeccaoDeIrAoTop', window.scrollY > 300)
})

// JS PARA TEMA DARK
const btnAlterarCores = document.getElementById('btnAlterarCores');
let temaAtual = localStorage.getItem('tema') || "claro";
const ThemeLogo = document.getElementById('ThemeLogo');

document.documentElement.setAttribute('theme', temaAtual);
atualizarIconeTema(temaAtual);

btnAlterarCores.addEventListener('click', function () {
    if (temaAtual === "claro") {
        document.documentElement.setAttribute('theme', 'escuro');
        temaAtual = "escuro";
    }
    else {
        document.documentElement.setAttribute('theme', 'claro');
        temaAtual = "claro";
    }
    localStorage.setItem('tema', temaAtual);
    atualizarIconeTema(temaAtual);
});

function atualizarIconeTema(tema) {
    if (tema === "claro") {
        ThemeLogo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/></svg>';
    } else {
        ThemeLogo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/></svg>';
    }
}

// JS PARA MOSTRAR O MENU
function MostrarOuOcultarMenu() {
    const MenuLogoSvg1 = document.querySelector('.MenuLogoSvg1');
    const MenuLogoSvg2 = document.querySelector('.MenuLogoSvg2');
    const MenuMobile = document.querySelector('.MenuMobile');
    const PanoDoHeader = document.querySelector('.PanoDoHeader');
    let Header = document.querySelector(".Header");


    if (MenuLogoSvg1.style.display !== 'none') {
        MenuLogoSvg1.style.display = 'none';
        MenuLogoSvg2.style.display = 'flex';
        MenuMobile.style.display = 'flex';
        PanoDoHeader.style.display = 'block';

    } else {
        MenuLogoSvg1.style.display = 'flex';
        MenuLogoSvg2.style.display = 'none';
        MenuMobile.style.display = 'none';
        PanoDoHeader.style.display = 'none';

    }
}

// JS PARA IMPEDIR QUE A IMAGEM DO INTRO SEJA BAIXADA
const NaoArastarOuBaixarImagem = document.getElementById('NaoArastarOuBaixarImagem');
NaoArastarOuBaixarImagem.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

NaoArastarOuBaixarImagem.addEventListener('touchstart', function (e) {
    e.preventDefault();
});

NaoArastarOuBaixarImagem.addEventListener('dragstart', function (e) {
    e.preventDefault();
});

// Remove a classe "avisoDeJavascript" se o JavaScript estiver habilitado
document.addEventListener('DOMContentLoaded', function () {
    const AvisoDeJavascript = document.querySelector('.AvisoDeJavascript');
    AvisoDeJavascript.style.display = 'flex';
    AvisoDeJavascript.style.display = 'none';
});

// JS PARA TROCA DE ABAS
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Ei! Volta Para Mim 😥";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})
