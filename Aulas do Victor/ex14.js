const countBy = (x, n) => {
  let z = [];
  
  for (let i = 1; i <= n; i++) {
        let result = 0;
        result = i * x;
        z.push(result);
    }
   console.log(z);
}

let times = Number(prompt("Say a times number: "));
let final = Number(prompt("Say a end number: "));
countBy(times, final);