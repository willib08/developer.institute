// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it



// let a = 1+ 2;  //4

// switch (a) {
// case 3:
// alert( 'Too small' );
// break;
// case 4:
// break;
// case 5:
// alert( 'Too large' );
//  break;
// default:
// alert( "I don't know such values" );
// }



//Create a stuctured html file linked to a JS file

//1. Create an object that has properties "username" and "password". Fill those values in with strings.

//2. Create an array which contains the object you have made above and name the array "database".

//3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


// let person = {

//   username: 'Buckles',
//   password: 'notyourbusiness'
// }

// //console.log(person);

// var database = [person];

// //console.log(database)

// var newsfeed = [];

// let isaac = {
//    username:'isaac1',
//    timeline: 'Coding with Javascript'
// }
// let shai = {
//    username:'shaico12',
//    timeline: 'teacher\'s pet'
// }
// let sheryl = {
   
//    username:'sheryledery55',
//    timeline: 'no more corona'
// }
// newsfeed.push(isaac, shai, sheryl);
// console.log(newsfeed);


//EXERCISE 1:SIMPLE IF/ELSE STATEMENT
//1.Create 2 variables, x and y. Each of them has a different numeric value.
//2.Write an if/else statement that checks the biggest number.
//If x equals 5 and y equals 2, the program should display: "x is the biggest number"

// let x = 5
// let y = 2
// if ( x > y){
//   console.log ( x + " is bigger than " + y) 


//EXERCISE 2:Chihuaha
//Create a variable newDog that is equal to the string “Chihuahua”.
//Check and display how many letters are in newDog.
//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just use 2 console.log).
//Check if the variable newDog equals to “Chihuahua”
//if it does, display ‘I love Chihuahua, it’s my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’

// var newDog = "Chihuahua";
// //console.log(newDog.length);
// //console.log(newDog.toLocaleUpperCase());
// //console.log(newDog.toLocaleLowerCase());
// if (newDog == "Chihuahua"){
// console.log("I love Chihuahua, its my favorite dog breed");
// } else {
//   console.log("I dont care, i prefer cats");
// }


//Exercise 3: Even Or Not Even   !!DO THIS!!!!
//Ask a number to the user, and save it to a variable.
//Check if the variable is an even number
//If it is, display: “x is an even number’. 
//Where x is the actual number of the user.
//If it isn’t, display “x is not an even number’. 
//Where x is the actual number of the user

//var num = prompt("enter a number", 5)
    //if(num%2==0){
      //console.log("even")
          //}
    //else{
      //console.log("odd")
          //}

// Exercise 4: Group Chat  ~THIS DOESNT WORK~
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// Using the array above, console.log the number of users 
// in a group conversation based on the following rules:
// If there is no one, display “no one is online”.
// If there is 1 person, display “<name_user> is online”.
// If there are 2 people, display “<name_user1> and <name_user2> 
// are online”.
// If there are n>2 people, display the first two names and 
// add “and n-2 more are online”.
// For example, if there are 5 users, it should display:

// name_user1, name_user2 and 3 more are online

 // let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
 //   if (users.length === 0){
 //    console.log("no one is online");
 // }
 // else if(users.length === 1){
 //    console.log(users[0]+" is online");
 // }
 // else if(users.length === 2){
 //     console.log(users[0]+ " and " + users[1] +" are online");
 // }
 // else if(users.length > 2){
 //     console.log(users[0]+ " , ” + users[1]+ " and " + (users.length -2)+ "are online);
 // }


//EXERCISE 1 gold: THE WORLD TRANSLATOR

// Ask the user which language he speaks.
// Create a few conditions :
// If he speaks French : display “Bonjour”
// If he speaks English : display “Hello”
// If he speaks Hebrew : display “Shalom”
// If he doesn’t speak any of these 3 
// languages: display ‘01110011 01101111 01110010 01110010 01111001’

// let language = prompt ("what language do you speak?")
// switch(language){
//   case "french": console.log("Bonjour");
//   break;
//   case "english": console.log("Hello");
//   break;
//   case "hebrew": console.log("Shalom");
//   break;

//   default: console.log("01110011 01101111 01110010 01110010 01111001")
// }


//Exercise 2 : The Grade Assigner
//Ask the user for his grade
// If the score is bigger than 90, console.log “A”
// If the score is between 80 and 90 (included), console.log “B”
// If the score is between 70(included) and 80 (included), console.log “C”
// If the score is lower than 70, console.log “D”

//  var grade = prompt ("what is your score?")
//  if (grade > 90){
//   console.log("A");
//  }
// else if (grade > 80 &&  grade <=90){
//   console.log("B");
// } else if (grade > 70 && grade <=80){
//   console.log("C");
// } else if (grade < 70){
//   console.log("D");
// }

// Exercise 3 : Verbing
// Create a variable, it must be a verb.
// If the length of this string is at least 3, it should add ‘ing’ to its end, unless it already ends in ‘ing’, in which case it should add ‘ly’ instead.
// If the string length is less than 3, it should leave it unchanged.
// Example:
// The string is : "swim" , your program should console.log : "swimming"
// The string is : "swimming", your program should console.log : "swimmingly"
// The string is : "go" your program should console.log : "go"

 // var word = "go";
 // if(word.length >= 3){
 //   if (word.endsWith("ing")){
 //     word = word + "ly"
 //   } else {
 //     word = word + "ing"
 //   }
 // } console.log(word)
 // alert(word);

//Exercise 1 : Age Difference XP Ninja
// Given the birthdates of two people, find the date when 
// the younger one is exactly half the age of the other.
// Notes: The dates are given in the format YYYY


 // let dob1 = new Date(1980, 4, 28);
 // let dob2 = new Date(1989, 3, 4);
 // let yearsDiff = dob2.getFullYear() - dob1.getFullYear();
 // let finalyear = dob2.getFullYear() + yearsDiff;
 // let month = dob2.getMonth();
 // let day = dob2.getUTCDate();
 // let finaldate = new Date(finalyear, month, day);
 // console.log(finaldate)


// Exercise 2 : Zip Codes
// Harder exercise
// Hint : Use Regular Expression

// You are working in a PostOffice and you need the 
// zip code of the clients in order to send them letters.
// Ask your client for his zip code and console.log “good” 
// or “error” based on the following rules.
// A valid zip code is as follows:
// Zip codes consist of 5 consecutive digits
// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

var zipcode = prompt ("can i have your zipcode please?")
  if (zipcode.length > 0){
      console.log("good");
  }
 
   
 
  



