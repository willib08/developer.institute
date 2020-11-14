













//EXERCISE 2

// let para_new = document.querySelector('p')
// let bold;

// funciton getBold_items(){
// 	bold = para_new.querySelectorAll('strong')
// }
// getBold_items()

// function highlight(){
// 	for (var i = 0; i < bold.length; i++) {
// 		bold[i].style.color = "black"
// 	}
// }

// para_new.addEventListener('mouseover', highlight);
// para_new.addEventListener('mouseover', return_normal);

//EXERCISE 3

function calculation(){
	event.preventDefault();  //stops submit from refreshing page
	let radius = document.getElementById('radius').value
	radius = Math.abs(radius);  //making a number absolute
	let volume = document.getElementById('volume').value;
	volume = (4/3) * Math.pow(radius, 3);
	volume = volume.toFixed(2) //up to 2 decimal points
	let pleasae = document.getElementById('volume')
	please.setAttribute('value', volume)
	
}
let submit = document.getElementById('submit')
submit.addEventListener('click', calculation)










