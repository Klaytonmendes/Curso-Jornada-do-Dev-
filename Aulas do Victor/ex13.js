let array = [];
const reverseSeq = (n) => {
    for (let i = n; i >= 1; i--) {
        array.push(i);
    }
    return (array);
}

let num = Number(prompt("Choosen a number: "));
reverseSeq(num);