var valorTotal = 0
function carrinho(produto,valor) {
    console.log(`O produto ${produto} foi adicionado ao carrinho!`)
    valorTotal += valor
}

function totalCarrinho() {
    if (produto == '' || valor <= 0) {
        alert(`Opção inválida!`)
    } else {
        alert(`Total da compra: $${valorTotal}`)
        totalCarrinho()
    }
}

function zerarCarrinho() {
    valorTotal -= valorTotal
}