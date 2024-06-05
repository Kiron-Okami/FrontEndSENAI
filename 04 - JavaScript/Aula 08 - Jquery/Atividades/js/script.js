// catalogo
var catalogo = []

catalogo.push(new produtoTurismo(`Japão`, `Visite a terra do sol nascente!`, [`metro`, `carro`, `bicicleta`], 3, 10000, `../img/japanFlag.png`))
catalogo.push(new produtoTurismo(`México`, `Visite o México!`, [`metro`, `carro`, `coiote`], 5, 300, `../img/mexicoFlag.png`))
catalogo.push(new produtoTurismo(`Brasil`, `Visite o Brasil!`, [`Cavalo`, `carro`, `moto`], 7, 1000, `../img/brasilFlag.png`))

catalogo.forEach((elemento) => {
    document.querySelector(`#catalogo`).innerHTML +=`
    <div class="card" style="width: 18rem;">
        <img src="${elemento.imagem}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">${elemento.nome}</h5>
            <p class="card-text">${elemento.descLocal}</p>
            <h5 class="text-success">R$ ${elemento.valor}</h5>
            <button href="#" class="btn btn-dark">Comprar</button>
        </div>
    </div>
    `
})
