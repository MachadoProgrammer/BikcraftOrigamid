//Ativar link do menu de acordo com a url

const links = document.querySelectorAll('.header-menu  a');
console.log(links)


function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
       link.classList.add('ativo');
    }
}

links.forEach(ativarLink);


// Ativar items do orcamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    elemento.checked = true;
    console.log(elemento)
}


parametros.forEach(ativarProduto);


// Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');
console.log(perguntas)

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute("aria-expanded", "true");
}


function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}


perguntas.forEach(eventosPerguntas);
