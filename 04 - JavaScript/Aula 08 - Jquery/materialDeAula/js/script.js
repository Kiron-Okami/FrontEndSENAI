var paragrafoPrincipalMetodoAntigo = document.querySelector(`#paragrafoPrincipal`)
var pPrincipal = $("#paragrafoPrincipal").text(`Lorem`)
// alert(pPrincipal)

var nomeUsuario = prompt("Qual é o sei nome?")
$(`#nomeUsuario`).text(nomeUsuario)

// evento
pPrincipal.on(`click`, function(){
    pPrincipal.addClass("mudei");
})

$(`h6`).on(`click`, function(){
    $(`main`).addClass(`tema-escuro`);
    $(`main`).removeClass(`tema-claro`);
    $(`h3`).css(`color`, `red`);
})

$(`#fechar`).on(`click`, function(){
    $(`#propaganda`).hide(500)
    $(`#propaganda`).show(1000)
})