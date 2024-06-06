// catalogo
var catalogo = []

catalogo.push(new produtoTurismo(`Japão`, `Visite a terra do sol nascente!`, [`metro`, `carro`, `bicicleta`], 3, 10000, `img/japanFlag.png`))
catalogo.push(new produtoTurismo(`México`, `Visite o México!`, [`metro`, `carro`, `coiote`], 5, 300, `img/mexicoFlag.png`))
catalogo.push(new produtoTurismo(`Brasil`, `Visite o Brasil!`, [`Cavalo`, `carro`, `moto`], 7, 1000, `img/brasilFlag.png`))

catalogo.forEach((elemento) => {
    $('#catalogo').append(`
    <div class="card" style="width: 18rem;">
        <img src="${elemento.imagem}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">${elemento.nome}</h5>
            <p class="card-text">${elemento.descLocal}</p>
            <h5 class="text-success">R$ ${elemento.valor}</h5>
            <button href="#" class="btn btn-primary btn-comprar">Comprar</button>
        </div>
    </div>
    `)
})

// Troca o tema do site
$(`#btnTema`).on(`click`, function(){
    if($(`body`).attr(`data-bs-theme`) == `light`){
        $(`body`).attr(`data-bs-theme`, `dark`);
    }else{
        $(`body`).attr(`data-bs-theme`, `light`);
    }
})

// calculadora de preços 
var valorTotal = 0;
$(`#catalogo`).on(`click`, `.btn-comprar`, function () {
    alert(`Viagem adicionada!`)
    valorTotal += elemento.valor;
    $(`#carrinhoLista`).append(`
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between">
            <span>${elemento.nome}</span>
            <span>R$ ${elemento.valor}</span>
        </li>
    </ul>
    `);
});

// function carrinho(elemento){
//     alert(`Viagem adicionada!`)
//     valorTotal += elemento.valor;
//     $(`#carrinhoLista`).append(`
//         <ul class="list-group">
//             <li class="list-group-item d-flex justify-content-between">
//                 <span>${elemento.nome}</span>
//                 <span>R$ ${elemento.valor}</span>
//             </li>
//         </ul>
//     `);
// }
$(`#valorTotal`).html(`R$ ${valorTotal}`);
    
function finalizar(){

}