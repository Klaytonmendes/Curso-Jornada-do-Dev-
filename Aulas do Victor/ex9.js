
function Palpite(palpite) {
    let number = Math.floor(Math.random() * 100);
    let cont = 1;

    while (palpite != number) {
        if (palpite < number) {
            palpite = prompt("Você precisa aumentar seu número");
        } else {
            palpite = prompt("Você precisa abaixar seu número");
        }

        cont++;
    }

    alert("Você acertou!!! Foram " + cont + " tentativas!");
}

let choice = prompt("Adivinhe um número:");
Palpite(Number(choice));
