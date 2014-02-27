//Rajmatie Arjune, February 26, Functions_Industry.

//Preparing spreadsheet for income/expenditure statement.

function mySpreadsheet() {
//Cells for spreadsheet would be determined based upon input.

    var cells = 0;
    var width = 10;
    var height = 8;
    
    var width = prompt("What is the width of your spreadsheet?");
    var height = prompt("What is the height of your spreadsheet?");
    
    var dimension = width * height;
    console.log("You will have a spreadsheet with " + dimension + " cells.");
    
    if (width <= 11 && height >= 10) {
        alert("You could try to use a smaller size spreadsheet to do your statement.");
        console.log("You could try to use a smaller size spreadsheet to do your statement.");
        
    }else if (height === 12 || width === 7) {
        alert("You will need to switch to portrait size to fit your statement.");
        console.log("You will need to switch to portrait size to fit your statement.");
        
    }else{
        alert("You could use the spreadsheet template " + dimension + " cells.");
        console.log("You could use the spreadsheet template " + dimension + " cells.");
    
    }

    return dimension;

    }

mySpreadsheet();

