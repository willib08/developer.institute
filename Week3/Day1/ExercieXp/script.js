// // For each of the questions, find 2 WAYS of accessing :
// // 1. The div DOM node?
// // 2. The ul DOM node?
// // 3. The second li (with Pete)? 

// //objective 1, option 1
// // var div = document.getElementsByTagName("div");
// // console.log(div[0]);


// //objective 1, option 2
// // var div1 = document.querySelector('div');
// // 	console.log(div1);


// //objective 2, option 1
// // var ul = document.querySelector("ul");
// // console.log(ul);

// //objective 2,option 2

// // var body = document.querySelector('body');
// // var unorder = body.children[1];
// // console.log(unorder);


// //var body = document.querySelector('ul');
// // var unorder3 = body.lastElementChild;
// // console.log(body);

// //objective 3, option 1
// // var ul = document.querySelector('ul');
// // var name1 = ul.children[1];
// // console.log(name1);

// //EXERCISE 1 XP CHANGE THE NAVBAR

//Exercise 1
​
// let div = document.getElementById("navBar")
// div.setAttribute("id", "socialNetworkNavigation")
​
// let ul = document.querySelector("ul")
// let listitem = document.createElement("li")
// let text = document.createTextNode("Logout")
// listitem.appendChild(text)
// ul.appendChild(listitem)
​
// let retrieve = ul.firstElementChild
// let retrieve2 = ul.lastChild
// console.log(retrieve)
// console.log(retrieve2)
​
// let test = retrieve.firstElementChild
// console.log(test.innerHTML)
​
// Exercise 2
​
// let ul2 = document.querySelector("ul");
// console.log(ul2);
// ul2.lastElementChild.innerHTML = "Richard";
​
// let ul3 = document.querySelectorAll("ul")[1];
// console.log(ul3);
// ul2.firstElementChild.innerHTML = "Tali";
// ul3.firstElementChild.innerHTML = "Lea";
​
// let newitem = document.createElement("li");
// let hey = document.createTextNode("Hey students");
// newitem.appendChild(hey);
// ul2.appendChild(newitem);
// let newitem2 = document.createElement("li");
// let heyo = document.createTextNode("Hey students");
// newitem2.appendChild(heyo);
// ul3.appendChild(newitem2);
​
// let sarah = ul3.children[1]
// // ul3.removeChild(sarah);
// sarah.remove();
​
// ul2.classList.add("student_list");
// ul3.classList.add("student_list");
​
// ul2.classList.add("university");
// ul2.classList.add("attendance");
​
​
//Exercise 3
​
// let navbar = document.querySelector(".Header")
// navbar.style.backgroundColor = "yellow"
// let name2 = document.querySelector(".user-profile-link")
// name2.innerText = "The Boss!"
​
​
// Exercise 4
​
​
// let div = document.querySelector("div")  // locating the element
// div.style.backgroundColor = "lightblue"
// div.style.padding = "2em"
// ​
// let ul = document.querySelector("ul")  //parent element
// let john = ul.firstElementChild // first child out of 2
// // ul.removeChild(john)
// ​
// let pete = ul.firstElementChild
// pete.style.border = "dashed lightblue 4px"
// ​
// let body = document.querySelector("body")
// body.style.fontSize = "60px"
// ​
// let pete2 = ul.lastElementChild
// let x = john.innerHTML
// let y = pete2.innerText
// ​
// if (div.style.backgroundColor = "lightblue") {
// 	alert("Helloooooo " + x + " and " + y)
// }













