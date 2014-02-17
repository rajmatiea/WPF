//Rajmatie Arjune, February 16, 2014, Conditionals Worksheet.

//Last chance for gas
//MPG is 15, guage meter is 2% and tank size is 5 gallons

var carMpg = 15;
var meter = 2;
var tankSize = 5;
var empty = 0;

var userInput = prompt("What percentage does your meter show?");

if (meter > userInput) {
    console.log("We stop for gas.");
    
}else if (meter < userInput) {
    console.log("We have time, could stop later.");
    
}else{
    console.log("Stop now, we have no time.");
}
//-------------------------------------------------------------

//Grade Letter Calculator

var grade = 90;
var student;

if (grade > 85) {
    
    student = "You have earned a B average.";
    
}else{
    student = "You have earned a C average.";
}

console.log(student);

//-------------------------------------------------------------













