class carro {
    constructor(marca, modelo, ano, cor, velMaxima, velAtual){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velMaxima = velMaxima;
        this.velAtual = velAtual;
    }
    acelerar(acrescimo){
        if (acrescimo + this.velAtual <= this.velMaxima) {
            this.velAtual += acrescimo;
            return `Velocidade atual: ${this.velAtual} Km/h`;
        } else {
            return `Aceleração inválida!`;
        }
    }
}

var figueredo = new carro("aquela-marca", "quadrado", 2012, "sim", 120, 0);