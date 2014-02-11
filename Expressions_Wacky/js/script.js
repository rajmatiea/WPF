//Rajmatie Arjune, February 10, 2014: Expressions Wacky

//Planning class trip for 6th graders
//Teachers are to fill out the resourse list to determine the total cost per child

var kids = prompt("How many kids are signed up for the trip?");

var busRide = 1200; //bus day rate
var lunch = 14; //per child
var flags = 3.20; //flag as identitifier so no one gets lost
var blanket = 5; //to stay warm
var total = (busRide) + (lunch + flags + blanket) *kids;
var eachChild = total / kids;

console.log("The total cost for the trip is $" + total);
console.log("Permission slip reflecting $" + eachChild + " per child to be sent home.");

alert("Based upon your input the total trip is $" + total + "\nEach child would have to pay " + eachChild);
