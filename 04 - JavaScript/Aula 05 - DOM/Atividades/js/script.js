// Calcula o salário família
function calculo() {
    // Pega valores do site
    var empregado = document.querySelector("#empregado");
    var filhos = document.querySelector("#filhos").value;
    var salario = document.querySelector("#salario").value;

    // Calculo
    if (salario <= 806.80 && salario > 0) {
        var cota = filhos * 41.37;
    } else if (salario >= 806.81 && salario <= 1212.64) {
        var cota = filhos * 29.16;
    } else {
        var cota = filhos * 0;
    }

    //Manda um alerta com o valor do salário família
    if (cota > 0) {
        alert(`${empregado}, seu salário família é R$${cota}!`)
    } else {
        alert(`${empregado}, você não possui salário família!`)
    }
}
