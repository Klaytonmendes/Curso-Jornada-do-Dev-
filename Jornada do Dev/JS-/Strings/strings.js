/*/ Criando uma String

let string = "Texto";

//Concatenar

let mens = "Olá ";
let mens2 = "Seja bem vindo!";
let concatenar = mens + mens2;

let nome = "Moreno";
//let mens3 = nome + mens + mens2
let mens3 = `Olá ${nome}, seja bem vindo!`

console.log(mens3);
console.log(concatenar);*/

let nome = prompt("Qual o seu nome? ");
alert(`${nome} entrou na aplicação`);
console.log(`${nome} seja bem vindo(a)!`);