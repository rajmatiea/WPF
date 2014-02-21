//Rajmatie Arjune, February 19, 2014, Conditionals Wacky.

//Ten friends pooling to buy gift/gifts for their friend.
//If they collect amoungst themselves a total of $500, they will buy a guitar and camera.

var targetAmount = 500;
var friend = 10;
var camera = 255;
var guitar = 205;

//Calculation is based upon each person's contribution times 10 people.

var friendContri = prompt("How much did each person contribute?");

var total = friendContri * 10;
var items = camera + guitar;
var itemPlus = items * 2;
var extra = friendContri + subTotal;

var subTotal = total - targetAmount;

console.log("You raised a total of $" + total);
