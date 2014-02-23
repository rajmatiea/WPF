//Rajmatie Arjune, February 23, 2014, Functions_worksheet

//Circumference
//Calculate the circumference of a circle

//function parameters
function circleCircum(r, d) {
//variable declaration
    var r = 30;
    var d = 25;
    
//calculating the area of the cirle     
    var circumfrence = r * d;
    //print to console
    console.log("The circumference of the circle is " + circumfrence);
    //returning value
    return circumfrence;
}
//function call
circleCircum();


//Stung!
//function name and parameters
function theAmountOfBees(cow, bees) {
    //defining variable 
    var cow = 200; //weight of a cow
    var bees = 8.666666667;
    //calculating the weight of a cow by the amount of bees
    var stings = cow * bees;
    console.log("It takes " + stings + " Bee strings to kill a cow.");
    return stings;
}

theAmountOfBees();














