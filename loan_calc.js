const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
    return number.trimStart() === '' || Number(number) < 0 || Number.isNaN(Number(number));
}

prompt('Welcome to Loan Calculator!');

while (true) {
    prompt('------------------------------');

    prompt("What is the loan amount?");
    while(invalidNumber(amount)){
        prompt('Enter a positive number');
        let getLoanAmount = readline.question();
    }


    


}




prompt("What is the interest rate?");
let interestRate = readline.question();

prompt("What is the loan duration in months?");
let months = readline.question();





//ask user for loan amount 
//ask user for loan duration (month/year)
//ask user for interest rate for example 5 for 5% or 2.5 for 2.5%

//perform the operation 

//display result of operation of loan 