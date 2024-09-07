// Task1: Calculate the Tip

let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2

console.log("Original Bill:", bill);
console.log("Tip:", tip);
