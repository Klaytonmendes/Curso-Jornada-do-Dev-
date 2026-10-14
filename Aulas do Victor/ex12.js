let result = 0;
let soma = 0;
let res = [];

const Square = (array) => {
    for (let i = 0; i < array.length; i++) {
        result = 0;
        result = Math.pow(array[i], 2);
        res.push(result);
        soma += result;
}
console.log(`O novo array ao quadrado é: [${res}] \n A soma total: ${soma}`);
}

let quadrado = [2,4,6,2,6,3,6];
Square(quadrado);
