// Task1: Calculate the Tip

let bill = 275
let tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2

console.log("Original Bill:", bill);
console.log("Tip:", tip);

// Task2: Output Details

console. log("The Original Bill was $", bill, "the tip was $", tip, "and the total value is $", bill + tip)

//Task3: Create a Function
function calcualteTip(bill){
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2
}

console.log("CalcualteTip Function Output: $", calcualteTip(100));

//Task4: Utilize Arrays
let bills = [275, 40, 430];
const tips = bills.map(bill => calcualteTip(bill));

function TotalBill(bill){
    return bill >= 50 && bill <= 300 ? bill*0.15+bill : bill*0.2+bill
}
const totals = bills.map(bill => TotalBill(bill));


console.log("bills(array)", bills);
console.log("tips(array)", tips);
console.log("totals(array)", totals);