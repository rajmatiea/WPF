//Rajmatie Arjune, February 11, 2014: Expressions Personal

//How much would you spend on coffee and creamer for the year?
//You could consider cheaper option that is available.

var coffee = 4.75;  //per lb 
var creamer = 3.50; //per bottle

var userEntry = prompt("How many bags of coffee do you buy per month?");
var userEntryTwo = prompt("How many bottles of creamer do you buy per month?");
var month = 12;

var entry = (coffee * userEntry) + (creamer * userEntryTwo);


console.log("You will spend a total of $" + entry * month + " for the year.");
alert("You will spend a total of $" + entry * month + " for the year.");

alert("You have the option to choose a cheaper brand. Do you want to continue? \nClick OK to continue, or just exit the page to abort.")

var input = prompt("Zak's coffee is $2.50 per lb. How many would you like?");
var zakcoffee = 2.50;
var zakTotal = (input * zakcoffee);

console.log("If you buy from Zak's you will spend total of $" + zakTotal * month);
alert("If you buy from Zak's you will spend a total of $" + zakTotal * month);

var coffeeSub = coffee * userEntry;
var savings = coffeeSub - zakTotal

console.log("You will save a total of $" + savings * month);

confirm("You will save a total of $" + savings * month);
confirm("Thank you for your order! \nHave a nice day!");


