
// Adiciona os filmes automaticamente no index.html
class filme {
    constructor (nome, desc, capa, preco){
        this.nome = nome
        this.desc = desc
        this.capa = capa
        this.preco = preco
    }
}

var catalogo = []

catalogo.push(new filme(`Minecraft: O filme`, `Onde o único limite é a sua imaginação!`, `img/filmes/minecraft.jpg`, 29.99))
catalogo.push(new filme(`O Grinch`, `Como o Grinch roubou o natal`, `img/filmes/Grinch.jpg`, 9.99))
catalogo.push(new filme(`Star Wars IV`, `Uma nova esperança!`, `img/filmes/starwars.jpg`, 8.99))
catalogo.push(new filme(`Deadpool 3`, `Deadpool & Wolwerine`, `img/filmes/deadpool.jpg`, 25.99))
catalogo.push(new filme(`Super Mario Bros: o filme`, `Oki Dokie!`, `img/filmes/mario.jpg`, 14.99))
catalogo.push(new filme(`O filme`, `filme`, `img/filmes/movie.jpg`, 9.99))

catalogo.forEach((elemento) => {
    $(`#cartaz`).append(`
            <div class="filme card d-flex flex-column align-items-center p-4">
                <div class="filme-capa" style="background-image: url(${elemento.capa}); background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
                <h5 class="pt-2">${elemento.nome}</h5>
                <p>${elemento.desc}</p>
                <p class="text-success">R$ ${elemento.preco}</p>
                <button type="button" onclick="modal('${elemento.nome}', ${elemento.preco})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#poltronas">Ver seção</button>
            </div>
        `);
})

// Seleciona poltronas do cinema no modal com o filme em específico
var total = 0;
// var qtnPoltronas = ;
var precoAtual;

$(`.poltrona`).on(`click`, function () {
    $(this).toggleClass(`poltrona-escolhida`);
    $(`.poltrona-escolhida`).length;
    total += precoAtual * $(`.poltrona-escolhida`).length
    $(`#total`).text(total);
});

function modal(mNome, mPreco){
    $(`#filmeTitulo`).text(mNome);
    precoAtual = mPreco;
}

// Limpa o modal
function limpaModal() {
    $(`.poltrona-escolhida`).removeClass(`poltrona-escolhida`);
    total = 0;
    $(`#total`).text(total);
}