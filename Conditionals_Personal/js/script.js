//Rajmatie Arjune, February 17, 2014, Conditionals Personal.

//Students have a project to make brownies in their cooking class.

//A class are divided into groups for a cooking class to make brownies.
//Items are to be chosen by the teams. Their input would calculate the type of brownies to make.

var brownieMix = 2;
var eggs = 2;
var fudge = eggs * 1;
var cakeBrownie = eggs * 2;

var result = brownieMix + eggs;
var classReceipe = brownieMix + eggs;

//Depending on teams's input, the calculation would be done based upon the givens.
var ingredients = prompt("How many boxes of brownieMix are you making?");
var ingredientsTwo = prompt("How many eggs are you using?");

//Condition to be printed to the console after input is made.
if (ingredients > ingredientsTwo) {
    console.log("Your receipe would make great Fudge brownies!");
    alert("Your receipe would make great Fudge brownies!");
    
//Choices made would result in either fudge or cake brownies.    
}else if (ingredients < ingredientsTwo || fudge > brownieMix) {
    console.log("Your receipe would make great Cake brownies!");
    alert("Your receipe would make great Cake brownies!");
    
//If choice equals to ingredients available, team would follow class receipe.    
}else{
    console.log("You could also follow the class's receipe if you like.");
    alert("You could also follow the class's receipe if you like.");
}

//Each team lead is 12 years old, and  needs to enter age to confirm order.

var userEntry = prompt("How old are you?");

var studentAge = 12;
//student's age to be entered exactly as 12, if not the user will have to retry.
if (userEntry === "12") {
    console.log("Thank you for your entry, your order will be delivered to your classroom!");
    alert("Thank you for your entry, your order will be delivered to your classroom!");     

}else{
    console.log("Sorry your age does not match our record, please try again.");
    prompt("Sorry your age does not match our record, please try again.");
    alert("Thank you for your entry, your order will be delivered to your classroom!");     
}

confirm("Enjoy your delicious Brownies with your TEAM!!");

//printing a friendly message to the console.
console.log("Enjoy your delicious Brownies with your TEAM!!");
    
    