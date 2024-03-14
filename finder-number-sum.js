const prompt = require('prompt-sync')({ sigint: true });

const arrayInput = prompt("Please enter a set of numbers separated by spaces: ");
const answerInput = Number(prompt("Please enter an answer:"));

const number = arrayInput.split(" ").map(Number);

let result = false;

number.forEach((num1, index1) => {
    number.forEach((num2, index2) => {
        let sum = num1 + num2;
        if ( (sum === answerInput) && (index1 != index2) ) {
             result = true;
        }
    });
});

console.log('result is',result);