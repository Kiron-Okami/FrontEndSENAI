console.log("Hello World!");
// alert("Hello World!")
// prompt("Qual é seu nome?")
// prompt("Qual é sua senha?")
// confirm("Confirmar?")

var varTeste
varTeste = true

const constTeste = 0

function teste() {
    let letTeste = 0
}
letTeste = 1

console.log(varTeste, constTeste, letTeste)

// var nome = prompt("Qual é seu nome?");
// alert("Seja bem-vindo "+ nome + "!");
// alert(`Seja bem-vindo(a) ${nome}!`);

function somar() {
    var numero1 = parseFloat(prompt("Qual é o primeiro número?"))
    var numero2 = Number(prompt("Qual é o segundo número?"))
    var resultado = numero1 + numero2
    alert(resultado)
}