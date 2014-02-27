//Rajmatie Arjune, February 26, Functions Personal

//Shopping online for clothes and shoe.

//Welcoming visitor to the online store.
var clothesShopping = function(){
    alert("Welcome to the Store!");

//Items and prices    
    var dress = 15.50;
    var jeans = 22.95;
    var blouse = 17.25;
    var shoes = 35.99;
    var shipping = 25;
//You have the option to buy these items.     
    var subTotal = [dress + jeans + blouse + shoes];
    
//Enter the quantity of items as prompted.    
    var customer = prompt("Please enter quantity of dress needed.");
    var customerOne = prompt("Please enter quantity of jeans needed.");
    var customerTwo = prompt("Please enter quantity of blouse needed.");
    var customerThree = prompt("Please enter quantity of shoes needed.");

//The total cost is calculated with shipping charge added.    
    var totaltest = subTotal + shipping;
    var total = subTotal * customer + shipping;

    //confirm("Your cost is $ " + customer * dress)
    //console.log("Your cost is $ " + customer + subTotal);
    
//Result will be printed to console based upon user response.    
    console.log("Your total order with shipping is $" + total);
    alert("Your total order with shipping is $" + total);
    confirm("Please confirm your total is correct!");

    console.log(total);
    console.log(subTotal * customer + shipping);

    return clothesShopping;
   
}

clothesShopping();