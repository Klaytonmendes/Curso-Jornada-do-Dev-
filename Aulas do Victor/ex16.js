const Greet = (name, owner) => {
    ((name == owner) ? alert("Hello boss") : alert("Hello guest"));
}

let your_name = prompt ("What's your name ?");
let who_arrived = prompt("Who's arrived ?");
Greet(your_name, who_arrived);  