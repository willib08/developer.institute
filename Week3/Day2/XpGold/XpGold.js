// Exercise 1 : Select A Kind Of Music
//<select id="genres">                 //put select tags into html
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>
// Show the value and the text of the selected option.   //in js
// Add an option: <option value="classic">Classic</option>.
// Make it selected.

let choice = document.querySelector('select')
console.log(choice)

//let selectedop = choice[1]
//console.log(selectedop.innerHTML)
let selectedop = choice.options[choice.selectedIndex].value;
console.log(selectedop)

let option = document.createElement('option')
option.setAttribute('value', 'classic')
option.innerHTML = 'classic'
choice.appendChild(option)

option.setAttribute('selected', 'selected')