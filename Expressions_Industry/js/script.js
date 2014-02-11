//Rajmatie Arjune, February 10, 2014: Expressions Industry

//Retirement planning for the year 2014.
//Employee and employer's contribution.

var months = 12;
var contribution = 0; //this value to be filled in by contributor

var userName = prompt("What is your Name?");
var company = prompt("What is your company name?");
var contAmount = prompt("What amount in dollars do you contribute per month?")
var employerContri = 15; //employee's contribution is 15%

//Based upon employee's input their yearly earings would be printed to the console and displayed in the alert.
alert(userName+", your earnings from employer for the year is $" + employerContri/100 * contAmount * months);
alert("And, earnings from your contribution for the year is $" + contAmount * months);

console.log("Earnings from employer for the year is $" + employerContri/100 * contAmount * months);
console.log("Earnings from your contribution for the year is $" + contAmount * months);




