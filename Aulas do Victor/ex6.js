function sayHello (name, city, state) {
 
return console.log(`Olá, ${name.join(" ")} tu fode mesmo gostoso na cidade de ${city[0]} e fode o Victor em ${state[0]}`); 
}
console.log(sayHello(["Caio", "Mattos", "Felicio"], ["São Paulo", "Bahia"], ["Hortolândia", "Cupinas"]));