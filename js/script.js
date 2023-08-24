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

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }

    
}


parametros.forEach(ativarProduto);

