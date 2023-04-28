let firstNumber = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));
let char = prompt("Enter an operatiion (+, -, *, /)")
let result;

switch(char):
    case '+': 
        result = firstNumber + secondNumber;
        break;
    case '-': 
        result = firstNumber - secondNumber;
        break;
    case '*': 
        result = firstNumber * secondNumber;
        break;
    case '/': 
        if (secondNumber === 0) {
          prompt("Error: division by zero");
        } else {
          result = firstNumber / secondNumber;
          prompt(result);
        }
        break;



