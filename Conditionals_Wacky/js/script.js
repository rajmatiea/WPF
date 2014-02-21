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

console.log("We raised a total of $" + total);
alert("We raised a total of $" + total);

if (total <= targetAmount) {
    console.log("We cannot buy both items.");
    alert("We cannot buy both items.");

    if (total <= targetAmount) {
        console.log("Would you like us to give cash instead?");
        confirm("Would you like us to give cash as the gift instead?");

    }else (total = subTotal); {
        console.log("I think she would love the gift.");
    }
}else if (total > targetAmount)  {
    console.log("We can buy both items, and have $" + subTotal + " of extra cash for Dinner!");
    alert("We can buy both items, and have $" + subTotal + " of extra cash for Dinner!");

}else{
    console.log("You did not raise enough money for either gifts.");
}
