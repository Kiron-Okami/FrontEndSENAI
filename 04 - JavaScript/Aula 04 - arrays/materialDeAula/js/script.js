
// alternativo
var jogos = Array();
jogos[0] = "Mario";
jogos[1] = "Bioshock";

var filmes = [`Casa monstro `];

// Adiciona no final da lista
filmes.push("Harry Potter");

// Adiciona no início da lista
filmes.unshift("Vingadores");

// Remove o último item da lista
filmes.pop();

// Remove o primeiro item da lista
filmes.shift();

// Editar o intervalo da lista
filmes.push(`Power Rangers`)
filmes.push(`Atividade Paranormal`)
filmes.push(`Nova onda do imperador`)
filmes.push(`Planeta dos macacos`)

// splice([indice], [quantidade], [conteúdo])
filmes.splice(2, 1)
filmes.splice(2, 0, `Transformers`)
filmes.splice(3, 1, `Bob esponja`)






for(var i=0; i < filmes.length; i++) {
    itensCatalogo.innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${filmes[i]}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
}