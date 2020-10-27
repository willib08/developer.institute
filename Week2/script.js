
//Exercise 1

    //console.log5 + "34" =====534
    //console.log(5 - "4"); =====1
    //console.log(10 % 5); =====0
    //console.log(5 % 10); =====5
    //console.log("Java" + "Script"); =====Javascript
    //console.log(" " + " "); ===== space space
    //console.log(" " + 0); ===== space 0
    //console.log(true + true); ===== 2
    //console.log(true + false); =====1
    //console.log(false + true); =====1
    //console.log(false - true); ===== -1
    //console.log(3 - 4); ===== -1
    //console.log("Bob" - "bill"); ===== NaN


//Exercise2

    //let me =["my", "favorite", "color", "is", "blue"];
    //let sentence = me.join (" ");
    //console.log(sentence);

 //Exercise3

   //let str1 = 'mix';
   //let str2 = 'pod';
   //let newword= str2.slice(0,2) + str1.slice(2,3) + " " + str1.slice(0,2) + str2.slice(2,3);
   //console.log(newword);
   //let newWord should be equal to 'pod mix'

//Exercise4  

  //let nr1 = (prompt('number'))
  //let nr2 = (prompt('number'))
  //let sum = alert(nr1 * nr2)
  //console.log(sum)


//Exercise5   !this one does not work! FIND THE SOLUTION!

  //You’re given a string of words. You need to find the word “Nemo”, and return a string like this: “I found Nemo at [the order of the word you find nemo]!”.
  //Bonus : If you can’t find Nemo, console.log “I can’t find Nemo :(“.
  //Hint : use an if/else statement
  //Examples
  //"I am finding Nemo !" ➞ "I found Nemo at 4!"
 //var sentence= "I am finding Nemo!"
 //var position = sentence.search("nemo")
 //var nemo= sentence.split(" ")
 //var position= nemo.indexof("nemo")
 //console.log("I found Nemo at " + position)


 //Exercise6 Ninja1
    //console.log(5 >= 1) ===== true
    //console.log(0 === 1) ===== false
    //console.log(4 <= 1) ===== false
    //console.log(1 != 1) =====false
    //console.log("A" > "B") ===== false
    //console.log("B" < "C") ===== true
    //console.log("a" > "A") ===== true
    //console.log("b" < "A") ===== false
    //console.log(true === false) ===== false
    //console.log(true != true) ===== false

//Exercise7 Ninja2    
    //let c;
    //let a = 34;
    //let b = 21;
    //a = 2;
    //a + b;
    //console.log(a+b)  result : 23
    //console.log(c)   result: undefined
    //console.log(3 + 4 + '5'); ===== 75

//Exercise8 Ninja3
    //Ask the user for a string of numbers separated by
    //a comma and space, 
    //return the product of the numbers.
    //Hint: use some string methods
    //"2, 3"➞ 6
    //var numbers = prompt ("pick two numbers to add using a comma and space");
    //var slice = numbers.split(", ");
    //console.log(slice[0]*slice[1]);

//Exercise9 Ninja4
    //Hint: if statement (tomorrow’s lesson)
    //Ask the user for a number, 
    //return a string of the word “Boom”, which varies in the following ways:

    //The string should include n number of “o”s, unless n is below 2 (in that case, return “boom”).
    //If n is evenly divisible by 2, add an exclamation mark to the end.
    //If n is evenly divisible by 5, return the string in ALL CAPS.
    //If n is evenly divisible by both 2 and 5, 
    //return the string in ALL CAPS and add an exclamation mark to the end.
    //The example below should help clarify these instructions.
    //Examples
    //4  ➞ "Boooom!"
    // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
    //1 ➞ "boom"
    // 1 is lower than 2, so we return "boom" 

     //var num= prompt("pick a number")
     //var boom;
     //if(num>2){
    //boom="b"+"o".repeat(num)+"m" 
    //}
    //else{
    //boom="boom"
    //}
    //if(num % 2 == 0){
    //boom=boom+"!"
    //}
    //else if (num % 5 == 0){
    //boom=boom.toUpperCase()
    //}
   //console.log (boom)


//Daily Challenge
//1. remove Banana from the array
//let fruit = ["Banana", "Apples", "Oranges", "Blueberries"];      YAY!
//let newfruit = fruit.shift(0);
//console.log(fruit)

//2.Sort the array in order
//let fruit = ["Banana", "Apples", "Oranges", "Blueberries"];      YAY!
//console.log(fruit[1], fruit[0], fruit[3],fruit[2]);

//3. Put kiwi at the end of the array.
//let fruit = ["Banana", "Apples", "Oranges", "Blueberries"];      YAY!
//fruit.push("kiwi");
//console.log(fruit);

//4.Remove Apples from the array. Don't use the same method as in Q1.   FAIL
//let fruit = ["Banana", "Apples", "Oranges", "Blueberries"];
//let favorite = fruit.slice(0,2);
//console.log(favorite);

//5a.Sort the array in reverse order.
//let fruit = ["Banana", "Apples", "Oranges", "Blueberries"];     YAY!
//let newfruit = fruit.reverse();
//console.log(fruit);

//5b.Access the item “Oranges”.
//let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]] 
//let newfruit = moreFruits.slice (2)
//console.log(newfruit);




