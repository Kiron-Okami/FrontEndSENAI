function atividade01() {
    idade = Number(prompt(`Qual é a sua idade?`))
    if (idade >= 0 && idade <= 15) {
        alert(`Criança`)
    } else if (idade > 15 && idade <= 30) {
        alert(`Jovem`)
    } else if (idade > 30 && idade <= 60) {
        alert(`Adulto`)
    } else if (idade > 60 && idade <= 150) {
        alert(`Idoso`)
    } else {
        alert(`Idade Inválida!`)
    }
}

function atividade02() {
    var real = Number(prompt(`Qual o valor a ser convertido?`))
    real *= 5.10
    alert(`R$${real}`)
}