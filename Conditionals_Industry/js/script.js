//Rajmatie Arjune, February 19, 2014, Conditionals Industry.

//Company Director working to save resources, and has to determine whether to print memo,
//or emailing to staff is cost effective.

//Employee data to be entered by each manager, this would give the basis for end result.
var employee = prompt("Please enter the amount of employees in your Department.")

var memoPages = 5;
var manager = 1;
var paper = .019;
var ink = .065;

var quantityReq = memoPages * employee;
var print = paper * ink;

//If copies of printout is less than 30 pages, memos will be printed.
if (quantityReq + print < 30) { console.log("Memos will be printed and delivered to each Employee!");
    alert("Memos will be printed and delivered to each Employee!");

//If copies of printout is more than 30 pages, memos will be sent via email.
}else if (quantityReq + print > 30) { 
    console.log("Please provide each Employee's email addresses for Memo to be sent.");
    alert("Please provide each Employee's email addresses for Memo to be sent.");
}

confirm("Thank you for the information.\nYour department will be provided with " + employee + " instructional Memos!");

