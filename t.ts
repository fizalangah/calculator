// import inquirer from 'inquirer';
// let input1 = await inquirer.prompt({
//     name: "sum1",
//     type: "number",
//     message: "enter number 1"
// });
// let input2 = await inquirer.prompt({
//     name: "sum2",
//     type: "number",
//     message: "enter number 2"
// })
// let input3 = await inquirer.prompt({
//     name: "operations",
//     type: "number",

   
// })
// // let total1:number = input1.sum1 + input2.sum2
// // let total2:number = input1.sum1 - input2.sum2
// // let total3:number = input1.sum1 * input2.sum2
// // let total4:number = input1.sum1 / input2.sum2

// // console.log(total4);

 /// HOMEWORK;
// //BMI CALCULATOR;
// import inquirer  from "inquirer";
// let input1 = await inquirer.prompt({
//     name: "weightInKg",
//     type: "number",
//     message: "Enter your weight"
// });
// let input2 = await inquirer.prompt({
//     name: "heightInMeters",
//     type: "number",
//     message: "Enter your height"
// })
// let bmi:number = input1.weightInKg / (input2.heightInMeters * input2.heightInMeters);
// console.log(bmi);

////import inquirer  from "inquirer";

//   

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