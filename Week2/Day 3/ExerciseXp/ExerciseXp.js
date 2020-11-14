// 1. Create a structured html file linked to a js file
// 2. Write a JS function that takes a parameter: myAge
// 3. Console.log the age of my mum and my dad 
//(my mum is twice my age, and my dad is 1.2 the age of my mum)
// 4. Call the function

 // function twice(name, myage){
 // 	let momsage = age * 2
	// let dadsage = momsage * 1.2
 // 	console.log(name, " is", myage, "old", " mom is ", 
 // 		"old", " Dad is", dadsage, " old")
 // }
 // //let age = prompt ("age")
 // twice("I", prompt("age"));


// Exercise 2
// 1. Create a structured html file linked to a js file
// 2. Write a JS function that takes a parameter: myAge
// 3. Return the age of my mum (my mum is twice my age)
// 4. Call the function
// 5. Console.log the age of my mum


//alert("hi");

//EXERCISE 1 Xp
// Make a keyless car EVEN BETTER!
// This is the code of the previous part of the exercise :

// let age = prompt("What is your age?");

// if (Number(age) < 18) {
//     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// Create a function called checkDriverAge() that will contain the code above. 
// Call the function and notice the benefit in having a function instead of a 
// simple if/else if/else statement.
// Instead of using prompt, make the checkDriverAge() function accept an argument
// : age, so that if you enter:
// checkDriverAge(92); it console.log “Powering On. Enjoy the ride!”

// function checkdriveage(age){
// checkdriverage(92);

// if (Number(age) < 18) {     alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }console.log("Powering on enjoy the ride!");



// Exercise 2 : Is_Blank
// Write a program to check whether a string is blank or not.

// console.log(is_Blank('')); --> true
// console.log(is_Blank('abc')); --> false

// function is_Blank(myList){
//     if (myList.length == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// function pushingToArray(newlist){
//     if (is_Blank(newlist) == true) {
//         newlist.push("a")
//     } else {
//         console.log(newlist)
//     }
// }
// pushingToArray(["blue", "yellow"])


// Exercise 3 : Abbrev_name
// Write a JavaScript function to convert a 
// string in abbreviated form.

// console.log(abbrev_name("Robin Singh")); --> "Robin S."

 // abbrev_name = function (str1) {
 //     var split_names = str1.trim().split(" ");
 //     if (split_names.length > 1) {
 //         return (split_names[0] + " " + split_names[1].charAt(0) + ".");
 //     }
 //     return split_names[0];
 // };
 // console.log(abbrev_name("Robin Singh"));


//Exercise 4 : SwapCase
// Write a JavaScript function which accept a string as input 
// and swap the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


// str = 'The Quick Brown Fox';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];
  
//   for(var x=0; x<str.length; x++)
//   {
//     if(UPPER.indexOf(str[x]) !== -1)
//     {
//       result.push(str[x].toLowerCase());
//     }
//     else if(LOWER.indexOf(str[x]) !== -1)
//     {
//       result.push(str[x].toUpperCase());
//     }
//     else 
//     {
//       result.push(str[x]);
//     }
//   }
// console.log(result.join(''));


//Exercise 5: Amazon Shopping
// Create a function called checkBasket().
// It should:
// ask the user for the item he wants
// and let him know if it’s in the basket or not
// Hint: Use the in keyword inside the conditional


//   let amazonBasket = {
//       glasses: 1,
//       books: 2,
//       floss: 100,
//  }
// let user= prompt("What would you like to order?")
// function checkBasket(basket, lookingFor) {
//   for(item in basket) {
//     console.log(item);
//      if(item === lookingFor) {
//       return `${lookingFor} is in your basket`;
//     }
//    }
//    return `${lookingFor} is not in your basket`;
// }
// console.log( checkBasket( amazonBasket, "floss"));
// console.log( checkBasket( amazonBasket, "books" ));
// console.log( checkBasket( amazonBasket, "glasses" ));


//Exercise 6: What is in my wallet?

// Exercise 6 : What’s In My Wallet ?
// Given a total due and an array representing the amount of 
//change in your pocket, determine whether or not you are able 
//to pay for the item.
// Change will always be represented in the following order: 
//quarters, dimes, nickels, pennies.
// 


// let changeEnough=
//    Quarters  = 0.25
//    Dimes = 0.10
//    Nickels = 0.5
//    Pennies = 0.1


// let change= changeEnough("quarters", "dimes", "nickles", "pennies"){
// 	if change
// }


// let total= (5.75)



// changeEnough([25, 20, 5, 0], 4.25)

// Exercise 7 : Shopping List
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// Create an array called shoppingList with the values
//  “banana”, “orange”, and “apple”.
// Copy these two above objects into your js file
// Create a function called myBill() that takes no argument.
// Depending on the list of items that you have in your array 
// shoppingList and the prices listed in the prices object,
// return the price spent on shopping.
// Call the function myBill()
// Bonus: In the function above, only add the price if the item 
// is in stock (use the stock object).
// If the item is in stock, decrease the item’s stock by 1


// var shoppingList = ["banana", "orange", "apple"];
//  let stock = { 
//      "banana": 6, 
//      "apple": 0,
//      "pear": 12,
//      "orange": 32,
//      "blueberry":1
// }  

//  let prices = {    
//      "banana": 4, 
//      "apple": 2, 
//      "pear": 1,
//      "orange": 1.5,
//      "blueberry":10
//  }

//  function myBill(){
//  	if prices(1, 1, 0, 1, 0) = shoppingList;
//  	return myBill;
//  } 
// console.log(myBill):



// Exercise 10 : Vacations Costs
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotel_cost().
// It should ask the user for the number of nights he 
// wants to stay in the hotel.
// If the user’s answer isn’t relevant to the 
// question (ie: if he doesn’t answer, or if the answer is a string),
// ask him again.The hotel costs $140 per night. The function should return 
// the total price of the hotel.
// Define a function called plane_ride_cost().It should ask the user for his destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user’s answer isn’t relevant to the question 
// (ie: if he doesn’t answer, or if the answer is a number), ask him again.
// Define a function called rental_car_cost().
// It should ask the user for the number of days he wants to rent
// the car. If the user’s answer isn’t relevant to the question 
// (ie: if he doesn’t answer, or if the answer is a string), 
// ask him again.Calculate the cost of renting the car: the car costs $40 
// everyday.If the user rents a car for more than 10 days, he gets 
// 5% discount.
// The function should return the total price of the car.
// Define a function called total_vacation_cost() that returns 
// the total cost of the user’s vacation depending on the 3 
// functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane 
// tickets cost: $z.
// Hint: You have to call the functions 
// hotel_cost(), plane_ride_cost() and rental_car_cost() 
// inside the function total_vacation_cost.
// Call the function total_vacation_cost()
// Bonus: Instead of using a prompt inside the 3 first functions,
//  use a prompt only inside the total_vacation_cost() function. 
//  What should you implement for it to work?


// //function hotel_cost(){
// let hotel_cost= prompt("How many nights?");
// if (hotel_cost < 0){
// 	prompt("how many nights?")
// } else if (hotel_cost >= 1){
// 	return (hotel_cost * 140);
// }
//}

// //function plane_ride()
// let plane_ride= prompt("where are we going?")

// if (plane_ride = "london"){
// 	console.log($183);
// } else if (plane_ride = "paris"){
// 	console.log($220);
// } else{
// 	console.log($300);
// }

// var rental_car= prompt("how many days?")
// 	if(input < 0, " "){
// 		prompt("How many days?")
// 	} else if (input >= 1){
// 		console.log(input*40)
// 	} else if (input > 10){
// 		console.log((input* 40)/0.5);
// 		total = console.log;
// 	} return total


