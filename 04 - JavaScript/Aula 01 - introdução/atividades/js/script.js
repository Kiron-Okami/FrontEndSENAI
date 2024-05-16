// Divide os gastos para a quantidade de clientes inserida
function exercicio1() {
   var qtnClientes = Number(prompt("Quantos clientes há na mesa?"))
   var gasto = Number(prompt("Quanto eles gastaram?"))
   var conta = gasto / qtnClientes
   alert(`Cada um deve pagar R$${conta}`)
}

// Mostra os vizinhos do número escolhido
function exercicio2() {
   var numero = Number(prompt("Digite um número"))
   alert(`${numero - 1}, ${numero}, ${numero + 1}`)
}