
function login(){
    const user = "adm";
    const password = "adm";
    var loginUser = prompt(`Digite o nome de Usuário`);
    var loginPassword = prompt (`Digite sua senha`);
    if (loginUser == user && loginPassword == password) {
        alert(`Seja bem-vindo!`);
        location.href = "https://www.google.com.br";
    } else {
        alert(`Usuário ou senha incorretos!`);
        login();
    }
}

function catalogo() {
    var filmes = ["Star Wars", "A nova onda do imperador", "O resgate do soldado Ryan", "Gato de Botas 2"];
    for(var i=0; i < filmes.length; i++) {
        itensCatalogo.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${filmes[i]}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        //Digitei manualmente, não copiei e colei do material :T
    }
}