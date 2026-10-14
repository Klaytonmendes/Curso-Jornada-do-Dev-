function basicOp (operation, value1, value2) {
    let result = 0;

    switch (choice) {
    case "+": 
    let sum = "+"
    result = value1 + value2;
    return alert(`'${sum}', ${value1}, ${value2} --> ${result}`);
    break;

    case "-": 
    let minus = "-"
    result = value1 - value2;
    return alert(`'${minus}', ${value1}, ${value2} --> ${result}`);
    break;

    case "*": 
    let times = "*"
    result = value1 * value2;
    return alert(`'${times}', ${value1}, ${value2} --> ${result}`);
    break;

    case "/":
    let division = "/";
    result = value1 / value2;
    return alert(`'${division}', ${value1}, ${value2} --> ${result}`);
    break;
}   
}

let choice = prompt("What the operation you want?");

let num1 = Number.parseInt(prompt("Choose a number"));
let num2 = Number.parseInt(prompt("Choose a outher number"));
basicOp(choice, num1, num2);

