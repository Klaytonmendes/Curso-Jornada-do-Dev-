const quarterOf = (month) => {
if (month == 1 || month <=3) {
    return alert("first quarter");
}
else if (month == 4 || month <= 6) {
    return alert("second quarter")
}
else if (month == 7 || month <= 9) {
    return alert("third quarter")
}
else if (month == 10 || month <= 12) {
    return alert("fourth quarter")
}
}

let mes = Number.parseInt(prompt("What the month: "));
quarterOf(mes)