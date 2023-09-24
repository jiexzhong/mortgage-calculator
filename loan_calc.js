const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getUserInput(promptMessage, errorMessage) {
    while (true) {
      prompt(promptMessage);
      let userInput = readline.question();
  
      if (!isNaN(userInput) && userInput.trimStart() !== '') {
        return parseFloat(userInput);
      } else {
        prompt(errorMessage);
      }
    }
  }

prompt('Welcome to Loan Calculator!');

while (true) {
    prompt('------------------------------');

  const loanAmount = getUserInput("What is the loan amount?", "Please enter a valid numeric loan amount.");
  const interestRate = getUserInput("What is the interest rate? (Example: 5 for 5% or 2.5 for 2.5%)", "Please enter a valid numeric interest rate.");
  const months = getUserInput("What is the loan duration in months?", "Please enter a valid numeric loan duration.");

  const annualInterestRate = interestRate / 100;
  const monthlyInterestRate = annualInterestRate / 12;

  const monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), -months)));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt('Another calculation?');
  const answer = readline.question().toLowerCase();
  if (answer[0] !== 'y') break;
}

//let monthly payment = loan amount * (montly intereset rate / (1 - Math.pow((1 + monthly interest rate), (-loand duration))));




//ask user for loan amount 
//ask user for loan duration (month/year)
//ask user for interest rate for example 5 for 5% or 2.5 for 2.5%

//perform the operation 

//display result of operation of loan 