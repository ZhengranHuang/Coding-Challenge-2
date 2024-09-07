// Task1: Calculate the Tip

let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2

console.log("Original Bill:", bill);
console.log("Tip:", tip);

// Task2: Output Details

console. log("The Original Bill was $", bill, "the tip was $", tip, "and the total value is $", bill + tip)

//Task3: Create a Function
function calcualteTip(x){
    return x >= 50 && x <= 300 ? x*0.15 : x*0.2
}

console.log("CalcualteTip Function Output: $", calcualteTip(100));