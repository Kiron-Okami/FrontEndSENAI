const resposta = document.getElementById("resposta");

function test1(){
    var contador = 1;
    resposta.innerHTML = "";
    while (contador <= 10){
        resposta.innerHTML += `
        <div class="produto">
            <h3>PRODUTO ${contador}</h3>
        </div>
        `
        contador++
    }
}

function test2(){
    resposta.innerHTML = "";
    let i = 1;
    do {
        resposta.innerHTML += "Front-end <br>";
        i++
    }while(i <= 10)
}

function test3(){
    for(let i = 1; i<=5; i++){
        alert(`Esse é o ${i}° alert!`)
    }
}

function test4() {
    let produtos = ["Imposto", "Pastel", "Playstation", "Pão de queijo", "Rojão", "Sorvete", "Nintendinho"];
    console.log(produtos)
    produtos.forEach(element => {
    resposta.innerHTML += `
    <h1> ${element} </h1>
    `
    });
}

function test5(){
    var filmes = ["Harry Potter", "Vingadores", "Gato de botas", "Shrek", "One Piece"]
    for(let i=0; i < filmes.length; i++){
        resposta.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${filmes[i]}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }
}