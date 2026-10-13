function Login (name, password) {

    if (name == "admin" && password == "1234") {
        return console.log("Login realidado!");
    }
    else {
        return console.log("Usuário ou senha incorretos");
    }
}

let nome = prompt("Seu nome");
let senha = prompt("Sua senha");
Login (nome, senha);