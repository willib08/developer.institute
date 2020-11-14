let solar = document.querySelector('body')

let planets = ['neptune', 'uranus', 'saturn', 'jupiter', 'mars','earth', 'venus', 'mercury'];

let div = document.createElement('div')
console.log(div)

for( var i = 0; i< planets.length; i++){
	var newdiv = document.createElement('div') //creating new div
	newdiv.innerHTML = planets[i] //each planet will have a div
	div.appendChild(newdiv) //putting the new div inside a parent div
	newdiv.setAttribute('class', 'planet') //setting a class to each div
}

function randn(min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.round(num);
}
randn(100, 255), randn(100, 255), randn(100, 255)
for rgb colors(132, 205, 195)

// if(newdiv.innerHTML = 'neptune'){
// 	newdiv.style.backgroundColor = 'red'
// } else if(newdiv.innerHTML = 'uranus'){
// 	newdiv.style.backgroundColor = 'pink'
// 	} else if(newdiv.innerHTML = 'saturn'){
// 	newdiv.style.backgroundColor = 'yellow'
// 	} else if(newdiv.innerHTML = 'jupiter'){
// 	newdiv.style.backgroundColor = 'blue'
// 	} else if(newdiv.innerHTML = 'mars'){
// 	newdiv.style.backgroundColor = 'brown'
// 	} else if(newdiv.innerHTML = 'earth'){
// 	newdiv.style.backgroundColor = 'green'
// 	} else if(newdiv.innerHTML = 'venus'){
// 	newdiv.style.backgroundColor = 'purple'
// 	} else if(newdiv.innerHTML = 'mercury'){
// 	newdiv.style.backgroundColor = 'grey'
// }
solar.appendChild(div)