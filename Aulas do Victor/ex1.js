let value1A = Number.parseFloat(prompt('Digite o primeiro valor: '));
let value1B = Number.parseFloat(prompt('Digite o segundo valor: '));
let value2A = Number.parseFloat(prompt('Digite o valor que você quer comparar: '));
let x;
let confirmation = Number.parseInt(prompt('Digite 1: Para inversamente proporcional\nDigite 2: Para diretamente proporcional'));

switch (confirmation) {

case 1: x = (value1A * value1B) / value2A;
alert('Receba teu número, Lana: ' + x);
console.log('Receba teu número, Lara: ' + x);
break;

case 2: x = (value2A * value1B) / value1A;
alert('Receba teu número Victor: ' + x);
console.log('Receba teu número, Caio: ' + x);
break;
}