//Rajmatie Arjune, February 11, 2014: Expressions Personal

//How much would you spend on coffee and creamer for the year.

var coffee = 4.75;  //per lb 
var creamer = 3.50; //per bottle

var userEntry = prompt("How many bags of coffee do you buy per month?");
var userEntryTwo = prompt("How many bottles of creamer do you buy per month?");
var month = 12;

var entry = (coffee * userEntry) + (creamer * userEntryTwo);

console.log("You will spend at total of $" + entry * month);
alert("You will spend a total of $" + entry * month);



////Flying overseas on Tuesday early morning, but the local flight was mistakenly booked for the wrong date.
////Six people are travelling, therefore upgrade to Monday is inevitable with price change.
//
//var jetBlue = 375;
//var upgrade = 189;
//var people = 6;
//
//var newPrice = jetBlue + upgrade;
//var total = newPrice * people;
//
//console.log("The price change for each person was $" + newPrice +",\n and the total cost was $" + total);
//alert("The price change for each person was $" + newPrice +",\n and the total cost was $" + total);
//
