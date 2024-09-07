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
let bills = [125, 555, 44];
const tips = bills.map(bill => calcualteTip(bill));
const totals = bills.reduce(function summarize(bills, tips, index) {
    console.log(index);
    return bills + tips;
})

console.log("bills(array)", bills);
console.log("tips(array)", tips);
console.log("totals(array)", totals);

//Task5:Test Data
//change numbers in bills array (275, 40, and 430) to (125, 555, and 44)
