var carrinho = [];
var precoAtual = [];
var totalCarrinho = Number();
var produto = ``;

function carrinhoFunc (produto, preco) {
    const carrinhoLista = document.querySelector("#carrinhoLista")
    carrinho.push(produto);
    precoAtual.push(preco);
    totalCarrinho += preco;
    alert(`${produto} adicionado com sucesso!`);

    carrinhoLista.innerHTML = ``
    for(var i=0; i < carrinho.length; i++) {
        carrinhoLista.innerHTML +=
        `<li class="list-group-item">${carrinho[i]} R$${precoAtual[i]}</li>`
    };

    const precoTotalLinha = document.querySelector("#precoTotalLinha");
    precoTotalLinha.innerHTML = ``;
    precoTotalLinha.innerHTML = `${totalCarrinho}`;
}

function compra() {
    document.querySelector("#carrinhoLista").innerHTML = `<li class="list-group-item">Vazio</li>`;
    document.querySelector("#precoTotalLinha").innerHTML = `0`;
    alert(`Compra realizada com sucesso!`)
}