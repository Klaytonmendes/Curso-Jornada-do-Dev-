function Consulta (saldo) {
    alert(`Seu saldo é ${saldo}`);
return
}

function Depositar (deposito, saldo) {
    saldo = deposito + saldo;
    alert(`Você depositou ${deposito} na sua conta`);
return
}

function Sacar (saque, saldo) {
    if (saldo < 0) {
        saldo = saldo - saque;
        alert(`Você retirou ${saque} da sua conta`);
    }
}

let dinheiro = 1000;
let choice = prompt("Selecione uma opção: \n consulta \n depositar \n sacar");

switch (choice) {

    case "consulta": 
        Consulta(Number(dinheiro));
        choice = prompt("Selecione uma opção: \n consulta \n depositar \n sacar");
    
    case "depositar":
        let adicionar = Number.parseFloat(prompt("Adicione seu depósito: "));
        Depositar(Number(adicionar, dinheiro));
        choice = prompt("Selecione uma opção: \n consulta \n depositar \n sacar");

    case "sacar": 
        let retirar = Number.parseFloat(prompt("Retire do seu saldo: "));
        Sacar(Number(retirar, dinheiro));
        choice = prompt("Selecione uma opção: \n consulta \n depositar \n sacar");
}
