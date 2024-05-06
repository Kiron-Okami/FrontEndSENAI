Algoritmo "questao04"

Var
contagem: inteiro
salario, mediaFilhos, mediaSalario, maiorSalario, salarioMenor: real
salarioMenorPCT: real
Nfilhos: inteiro
totalSalario: real

Inicio

//Entrada de dados do usuário
procedimento entrada ()
inicio
        escreva("Salário: ")
        leia(salario)
        escreva("Quantidade de filhos: ")
        leia (Nfilhos)
fimProcedimento



//Calculo geral
procedimento calculo ()
inicio
      //Calculo porcentagem filhos
      mediaFilhos <- Nfilhos / contagem
      
      //Calculo porcentagem salario
      mediaSalario <- salario / contagem
      
      //Calculo porcentagem de salário < R$150
      se (salario < 150) e (contagem > 0) entao
         salarioMenor <- salarioMenor + 1
      fimse
      salarioMenorPCT <- (salarioMenor / contagem) * 100
      
      //Maior salário recebido
      se (salario > maiorSalario) entao
         maiorSalario <- salario
      fimse
      
fimprocedimento



//Tela de Dados
procedimento dados()
inicio
      escreva("-- Salario médio:", mediaSalario)
      escreval()
      escreva("-- Quantidade média de filhos:", mediaFilhos)
      escreval()
      escreva("-- Maior salário:", maiorSalario)
      escreval()
      escreval("-- Salários menor que 150:", salarioMenorPCT, "%")
      escreval()
      
fimprocedimento

//Console
repita
        escreval("********************Dados dos Habitantes********************")
        escreval()
        escreval("                         Habitante ", contagem)
        escreval()
        se (contagem > 0) entao
           calculo()
        fimse
        dados()
        contagem <- contagem + 1
        entrada()
        limpatela
ate (salario < 0)

escreval("")
escreval("Salário negativo!")
escreval()

Fimalgoritmo