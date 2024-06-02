// Inicialização de variáveis
var vida = Number(document.querySelector('#vida').textContent);
var pokemon = ['litten.png', 'torracat.png', 'incerenoar.jpg'];
var pkmNome = ['Litten', 'Torracat', 'Incerenoar'];
var xp = 0;
var evolucao = 0;

// Função para curar o Pokémon
function curar() {
    vida += 10;
    vida = vida <= 100 ? vida : 100; // Garante que a vida não ultrapasse 100
    document.querySelector('#vida').textContent = vida;
}

// Função para aplicar dano ao Pokémon e possivelmente evoluir
function dano() {
    vida -= 10;
    vida = vida >= 0 ? vida : 0; // Garante que a vida não seja negativa
    document.querySelector('#vida').textContent = vida;
    evoluir(); // Tenta evoluir o Pokémon após receber dano
}

// Função para evoluir o Pokémon
function evoluir() {
    xp += 1;
    if (xp % 5 === 0) { // A cada 5 pontos de experiência, o Pokémon evolui
        evolucao += 1;
        evolucao = evolucao >= pokemon.length ? pokemon.length - 1 : evolucao; // Garante que não ultrapasse o número de evoluções
    }
    // Atualiza a imagem e o nome do Pokémon na interface
    document.querySelector('#pokemon').src = `img/${pokemon[evolucao]}`;
    document.querySelector('#pkmNome').textContent = pkmNome[evolucao];
}