// POO (Programação Orientada a Obejto)
// class = é um molde de um Objeto
class Cliente {
    nome;
    conta;
    saldo = 0;
    pagamentos;
    cpf;
    rg;
    dataDeNascimento;
    sacar(valor){
        this.saldo -= valor;
        return `O valor de R$ ${valor} foi sacado com sucesso!`
    }
    depositar(valor){
        this.saldo -= valor;
        return `O valor de R$ ${valor} foi depositado com sucesso!`
    }
}
var cliente1 = new Cliente;
cliente1.nome = "Leo";
cliente1.conta = 1;
cliente1.pagamentos = 0;
cliente1.cpf = 88888;
cliente1.rg = 9999999;
cliente1.dataDeNascimento = "13/04/1975";


var cliente2 = new Cliente;