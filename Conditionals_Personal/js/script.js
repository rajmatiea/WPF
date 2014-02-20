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

confirm("Enjoy your delicious Brownies with your TEAM!!");
    
    