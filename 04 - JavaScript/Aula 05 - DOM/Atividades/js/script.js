var empregado = document.querySelector("#empregado");
var filhos = document.querySelector("#filhos").value;
var salario = document.querySelector("#salario").value;
function calculo() {
    if (salario <= 806.80) {
        var cota = filhos * 41.37;
    } else if (salario >= 806.81 && salario <= 1212.64) {
        var cota = filhos * 29.16;
    } else {
        var cota = filhos * 0;
    }
    
    if (cota > 0) {
        alert(`${empregado}, seu salário família é R$${cota}!`)
    } else {
        alert(`${empregado}, você não possui salário família!`)
    }
}
