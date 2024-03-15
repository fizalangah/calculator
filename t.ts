
 / HOMEWORK;
//BMI CALCULATOR;
import inquirer  from "inquirer";
let input1 = await inquirer.prompt({
    name: "weightInKg",
    type: "number",
    message: "Enter your weight"
});
let input2 = await inquirer.prompt({
    name: "heightInMeters",
    type: "number",
    message: "Enter your height"
})
let bmi:number = input1.weightInKg / (input2.heightInMeters * input2.heightInMeters);
console.log(bmi);




import inquirer from "inquirer";
 const answer = await inquirer.prompt([{
    message: "Enter first number",
    type: "number",
    name: "firstNumber",
 },
 {
    message: "Enter second number",
    type: "number",
    name: "SecondNumber",
 },
 {
 message: "select one of the operators to perform operation",
 type: "list",
name:"operator",
 choices: ["+", "-","*","/"],
},
 
]);
// conditional statment;
if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.SecondNumber)
}else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.SecondNumber)
}else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.SecondNumber)
}else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.SecondNumber)
}else{
    console.log("select valid operator")
}
