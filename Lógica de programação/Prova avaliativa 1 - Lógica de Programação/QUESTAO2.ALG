Algoritmo "Questao2"

Var
salario, horasTrabalhadas, salarioPHora, horaExtra: real

Inicio
//Entrada de dados
escreva("Salário por hora trabalhada: ")
leia(salarioPHora)
escreval()
escreva("Horas trabalhadas em um mês: ")
leia (horasTrabalhadas)


//Calculo
se (horasTrabalhadas <= 160) entao
   salario <- horasTrabalhadas * salarioPhora
fimse

//Hora extra
se (horasTrabalhadas > 160) entao
   salario <- 160 * salarioPHora
   horasTrabalhadas <- horasTrabalhadas - 160
   salarioPHora <- salarioPHora / 2
   horaExtra <- horasTrabalhadas * salarioPHora
   salario <- horaExtra + salario
fimse
limpatela
escreva("O salário do funcionário será: ", salario)

Fimalgoritmo