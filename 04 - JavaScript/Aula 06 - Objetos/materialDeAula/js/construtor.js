class clientVip {
    //constructor = recebe valores e registra nos atributos
    constructor(nomeP,cpfP,pagamentosP){
        // _(atributo) -> não poderão ser alterados manualmentem apenas através de métodos
        this._nome = nomeP;
        this.saldo = 0;
        this.cpf = cpfP;
        this.pagamentos = pagamentosP;
    }
    sacar(valor){
        if(this.saldo < valor && valor >= 0){
            return `Operação não autorizada!`;
        } else {
            this.saldo -= valor;
            return `O saque do valor R$ ${valor} foi efetuado com sucesso!`;
        }
    }
    depositar(valor){
        if(valor <= 0){
            return `Operação não autorizada!`;
        } else {
            this.saldo -= valor;
            return `O depósito do valor R$ ${valor} foi efetuado com sucesso!`;
        }
    }
    verificarSaldo(){
        return this.saldo;
    }
}

// 
var vip1 = new clienteVip("Davinci", 999999,["Pix"]);
var vip2 = new clienteVip("Alessandra", 888888,["Pix", "cartão"]);