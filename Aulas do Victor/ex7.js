let total = 6000;
let mypoints = Number.parseInt(prompt('Quantos pontos você possui?'));
let typetrophy = Number.parseInt(prompt('Digite 1: Para Ouro \nDigite 2: Para Prata \nDigite 3: Para Bronze'));
let miss = (total - mypoints);
let days = 0;

switch (typetrophy) {

    case 1: 
    alert('Você escolheu Ouro');
    alert('Você precisa de ' + miss + ' pontos');
    
    while (mypoints <= total) {
    days++;

    let dayOfWeek = days % 7;

    if (dayOfWeek == 0) {
        mypoints += 40;
    } else {
        mypoints += 20;
    }
}
    alert('Faltam '+days+' dias');
    goldtrophy = Math.ceil(miss / 10);
    alert('Você precisa conquistar ' +goldtrophy+ ' taças de ouro');
    break;

    case 2: 
    alert('Você escolheu Prata');
    alert('Você precisa de ' + miss + ' pontos');
    
    while (mypoints <= total) {
    days++;

    let dayOfWeek = days % 7;

    if (dayOfWeek == 0) {
        mypoints += 20;
    } else {
        mypoints += 10;
    }
}
    alert('Faltam '+days+' dias');
    silvertrophy = Math.ceil(miss / 5);
    alert('Você precisa conquistar ' +silvertrophy+ ' taças de prata');
    break;

    case 3: 
    alert('Você escolheu Bronze');
    alert('Você precisa de ' + miss + ' pontos');
    
    while (mypoints <= total) {
    days++;

    let dayOfWeek = days % 7;

    if (dayOfWeek == 0) {
        mypoints += 4;
    } else {
        mypoints += 1;
    }
}
    alert('Faltam '+days+' dias');
    bronzetrophy = Math.ceil(miss / 1);
    alert('Você precisa conquistar ' +bronzetrophy+ ' taças de bronze');
    break;
}           
