// Functions
function animacao1(){
    $(`#caixa`).slideUp(500);
}

function animacao2(){
    $(`#caixa`).slideDown(500);
}

function animacao2(){
    $(`#caixa`).slideDown(500);
}

function animacao3(){
    $("#caixa").animate({ borderRadius : "100%", width : "100px", height : "100px" })
    $("#caixa").css("background-color", "red")
}

function animacao4(){
    $(`#caixa`).animate({width: "100%"}).animate({width: "300px"})
}

function animacao5(){
    $(`#caixa`).animate({ rotate : "360deg" },{ duration : 2000 , complete : () => {
        $(`#caixa`).text("Secret Text")
        alert(`HUE`)
    } })
}

// Script
$("#botoes").html(`
<button onclick="animacao1()" type="button">Fechar</button>
<button onclick="animacao2()" type="button">Abrir</button>
<button onclick="animacao3()" type="button">Animação 3</button>
<button onclick="animacao4()" type="button">Animação 4</button>
<button onclick="animacao5()" type="button">Animação 5</button>
`)