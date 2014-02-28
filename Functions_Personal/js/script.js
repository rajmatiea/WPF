//Rajmatie Arjune, February 26, Functions Personal

//Shopping online for clothes and shoe.

//Welcoming visitor to the online store.
var clothesShopping = function(){
    alert("Welcome to the Store!");

//These are the prices for our Items. Also there is a flat rate shipping charge.    
    var dress = 15.50;
    var jeans = 22.95;
    var blouse = 17.25;
    var shoes = 35.99;
    var shipping = 25;
    
//These items would be added up based upon customer quantity.     
    var subTotal = dress + jeans + blouse + shoes;
    
//Enter the quantity of items as prompted.    
    var customer = prompt("Please enter quantity of dress needed.");
    var customerOne = prompt("Please enter quantity of jeans needed.");
    var customerTwo = prompt("Please enter quantity of blouse needed.");
    var customerThree = prompt("Please enter quantity of shoes needed.");

//Your total cost is calculated with shipping charge added.    
    var totaltest = subTotal + shipping;
    var total = subTotal * customer + shipping;
    
//Your result will be printed to console as you respond. And total purchase would be displayed.    
    console.log("Your total order with shipping is $" + total);
    alert("Your total order with shipping is $" + total);
    confirm("Please confirm your total is correct!");

    //console.log(total);
    //console.log(subTotal * customer + shipping);

    return clothesShopping;
   
}

clothesShopping();