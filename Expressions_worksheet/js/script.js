//Rajmatie Arjune, February 9, 2014: Expressions Worksheet

//Calculate area of rectangle

var width = 7;
var height = 4;

//Area of rectangle is width times height times two
var area = width * height*2;
console.log("The area of the rectangle is "  +  area);


//Dog years

var Sparky = 3;
var dogYears = 7;
var age = Sparky * dogYears;
console.log("Sparky is 3 human years old which is " + age + " in dog years");


//Slice of pie part 1
var slices = 7;
var people = 30;
var pizza = 9;
var eachPerson = pizza * slices /people;
console.log("Each person ate " + eachPerson + " slices of pizza at the party");

//Slice of ie part II
var Sparky = pizza * slices %people;
console.log("Sparky got " + Sparky + " slices of pizza.");


//Average shoppping bill
var weeklyGrocery = [75, 80, 65, 90, 120];
var totalSpent = weeklyGrocery[0] + weeklyGrocery[1] + weeklyGrocery[2] + weeklyGrocery[3] + weeklyGrocery[4];
console.log("You have spent the total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $"+ totalSpent/5 + " per week.");


//Discounts
var price = 150;
var discount = 15;
//Sweater
var salesTax = 7;

var itemTaxed = price * salesTax /100 - price;
var noTax = price * discount / 100 - price;

console.log(itemTaxed);
console.log(noTax);

console.log("Your Sweater was originally $" + 150 + ", but after a 15% discount, it is now $" + noTax +" without tax, and $" + itemTaxed + " with tax.");


