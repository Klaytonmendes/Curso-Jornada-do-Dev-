function past (h, m, s) {
let horas = 3000000;
let minutos = 60000;
let segundos = 1000;
let result;

result = h * horas + m * minutos + s * segundos;

return (result);
}
console.log(past(20, 2, 1));