#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter First Number", type:"number", name:"FirstNumber"},
    {message: "Enter second number", type:"number", name:"SecondNumber"},
    {message: "Select one of the operators to perfom operator",
    name:"operator",
    type: "list",
    choices: ["addition" , "subtraction" , "multiplication" , "division"]},
]);
console.log(answer);

//conditional statement
if (answer.operator === "addition"){
    console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "subtraction"){
    console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "multiplication"){
console.log(answer.FirstNumber * answer.SecondNumber);
} else if(answer.operator === "division"){
    console.log(answer.FirstNumber / answer.SecondNumber);
} else {
    console.log("Please select valid operation")
}