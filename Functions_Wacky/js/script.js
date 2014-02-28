//Rajmatie Arjune, February 25, Functions_Wacky

//Shopping online and in store for a motivational book.
//online you could pay one price, but here we'll compare once we check the price in store vs.online.
     
function myBookOrder(onlinePurchase, inStore) {
    //prompts for user to tell us what price they are looking to pay.
    var userEntry = prompt("What price are you looking to pay for the book?");
    
    var online = 16; //Book price online.
    var shipping = 5; //Shipping charge is an additional price.
    var onlinePurchase = online + shipping; //Total price for online purchase.
    
    //Price user sees in store for the books.
    var inStore = prompt("what is the listed price in the store for the book?");
    
    //Calculating comparing prices online vs store.
    var result = onlinePurchase - inStore;
    
    if (userEntry < inStore != userEntry <= onlinePurchase) {
        alert("You could buy online for $14 plus $5 shippping and handling.");
        console.log("You could buy online for $14 plus $5 shippping and handling.");
        
    }else if (userEntry < onlinePurchase) {
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

myBookOrder();