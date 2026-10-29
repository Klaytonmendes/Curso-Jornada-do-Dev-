let cargos = ["Administrador", "Médico", "Advogado", "Analista de Sistemas"];

cargos[1] = "Contador"
// Retorna o comprimento do ARRAY
let size = console.log(`O lenght `+ cargos.length);
// Adciona um valor
cargos.push("Devops");
console.log(cargos);
// Remover Último da Lista
cargos.pop();
console.log(cargos);
// Espeficar o separador dos elementos
let alunos = ["Victor", "Higor", "Pérola", "Francisco", "Caio", "Bernardo", "Lara", "Maria", "Ingrid", "Paulo", "Klayton"];
console.log(alunos.join (" - "));
// O shift() método remove o primeiro elemento da matriz e "desloca" todos outros elementos para um índice mais baixo
console.log(alunos.shift());
console.log(alunos);
// unshift()O método adiciona um novo elemento a uma matriz (no início) e "desloca" elementos mais antigos
console.log(alunos.unshift("Adcionado"));