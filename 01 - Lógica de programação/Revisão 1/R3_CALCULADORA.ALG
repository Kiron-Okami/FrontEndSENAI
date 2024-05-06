Algoritmo "calculadora"

Var
N1, N2: real
operador: caractere
resultado: real

Inicio
//Entrada dos dados da calculadora
escreval("Escreva o primeiro número:")
leia(N1)
escreval()

escreval("Escreva qual operação quer fazer:")
escreval("+ - * /")
escreval
leia(operador)
escreval()

escreval("Escreva o segundo número")
leia(N2)
limpatela

//Calculadora
se (operador = "+") entao
        resultado <- N1 + N2
        escreval(N1, " ", operador, N2, " =", resultado)
   senao
        se (operador = "-") entao
             resultado <- N1 - N2
             escreval(N1, " ", operador, N2, " =", resultado)
        senao
             se (operador = "*") entao
                  resultado <- N1 * N2
                  escreval(N1, " ", operador, N2, " =", resultado)
             senao
                  se (operador = "/") entao
                       resultado <- N1 / N2
                       escreval(N1, " ", operador, N2, " =", resultado)
                  senao
                       escreval("Operação inválida!")
fimse
fimse
fimse
fimse

//escreval(N1, " ", operador, N2, " =", resultado)


Fimalgoritmo