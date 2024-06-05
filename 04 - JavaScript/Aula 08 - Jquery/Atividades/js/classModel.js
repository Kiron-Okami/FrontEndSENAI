class produtoTurismo {
    constructor (nome, descLocal, veiculo, duracao, valor, imagem){
        this.nome = nome
        this.descLocal = descLocal 
        this.veiculo = veiculo
        this.duracao = duracao
        this.valor = valor
        this.imagem = imagem
    }
}

var teste = new produtoTurismo(`NomeLocal`, `desc`, [`carro`], 5, 100, `src`);