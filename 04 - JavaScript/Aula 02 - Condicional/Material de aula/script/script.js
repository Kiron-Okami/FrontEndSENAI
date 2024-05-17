function seSenao() {
    if(false) {
        console.log(`Estou no If`)
    } else {
        console.log(`Estou no Else`)
    }
    var idade = Number(prompt(`Digite sua idade`))

    if(idade >= 18) {
        alert(`Seja bem-vindo`)
    } else {
        location.href = "https://www.google.com.br"
    }
}
function caso() {
    let escolha = prompt("escolha uma opção de A a D")
    switch(escolha){
        case "A" : alert(`Você escolheu A`); break
        case "B" : alert(`Você escolheu B`); break
        case "C" : alert(`Você escolheu C`); break
        case "D" : alert(`Você escolheu D`); break
        default: alert(`O operador é inválido!`)
    }
}
function teste() {
    alert(`Testado!`)
}