//Rajmatie Arjune, February 23, Functions_Wacky

//Shopping online and in store for a motivational book.
//online you could pay one price, but here we'll compare once we check the price in store vs.online.
    
    var online = 16;
    var shipping = 5;
    var onlinePurchase = online + shipping;
    var inStore = prompt("what is the listed price in the store for the book?");
    var result = onlinePurchase - inStore;

    var walMart = 18;
    var barnesAndNoble = 19;
    var bookAMillion = 20;
    
function myBookOrder(onlinePurchase, inStore) {
    //prompts for user entry
    var userEntry = prompt("What price did you want to pay?");
    
    if (userEntry < inStore != userEntry < result) {
        alert("You could buy online for $14 plus $5 shippping and handling.");
        console.log("You could buy online for $14 plus $5 shippping and handling.");
        
    }else if (userEntry > 20) {
        alert("You could buy the book from Book-A-Million for $20.");
        console.log("You could buy the book from Book-A-Million for $20.");
    
    }else{
        alert("You could buy from Walmart for $18 or, \nBarnes & Noble for $19.");
        console.log("You could buy from Walmart for $18 or, \nBarnes & Noble for $19.");
        return userEntry;
    }
    
    while (userEntry > 0){
        console.log(userEntry + " Wonderful! You saved $" + result);
        userEntry--;
    }
        
}