Algoritmo "Questao1"

Var
alunoNota: vetor [1..5] de real
mediaTurma: real
contagem, acimadaMedia: inteiro

Inicio
//Entrada das notas dos alunos
contagem <- 1
enquanto (contagem <= 5) faca
         escreva("Insira a nota do", contagem, "º aluno: ")
         leia (alunoNota[contagem])
         escreval()
         contagem <- contagem + 1
fimEnquanto
limpatela

//Cálculo das médias
contagem <- 1
enquanto (contagem <= 5) faca
         mediaTurma <- alunoNota[contagem] + mediaTurma
         contagem <- contagem + 1
fimEnquanto
mediaTurma <- mediaTurma / 5
contagem <- 1

//Quantidade de alunos acima da média
enquanto (contagem <= 5) faca
         se (alunoNota[contagem] > mediaTurma) entao
            acimadaMedia <- acimadaMedia + 1
         fimse
         contagem <- contagem + 1
fimEnquanto

//RESULTADO
escreva("Média da turma: ", mediaTurma)
escreval()
escreva("Alunos acima da média: ", acimadaMedia)



Fimalgoritmo