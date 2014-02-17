//Rajmatie Arjune, February 17, 2014, Conditionals Personal.

//Students are making brownies in their cooking class.

//Class recomended quantity for brownie receipe.
var brownieMix = 2; 
var eggs = 2;  
var fudge = eggs * 1;
var cakeBrownie = eggs * 3;

//Each Team will choose the quantity of brownie mix they'll require for the project.
var ingredients = prompt("How many boxes of brownies are you making?");
var type = prompt("Please enter your selection 'Fudge' or 'Cake'?");

//Based upon the option chosen the console would print the amount of eggs required to make cake or fudge brownies.
if (ingredients < 2) {
    console.log("Add " + brownieMix * eggs + " eggs to the brownie mix to make the best cake brownies");

}else if (ingredients > 2) {
    console.log("Add " + brownieMix * fudge + " eggs to the brownie mix to make chewy fudge brownies.");

}else{

//If quantity of 2 is chosen, the team could use the class receipe.
    console.log("Please follow the recipe from your class.");
}


