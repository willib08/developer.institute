













//EXERCISE 2

let para_new = document.querySelector('p')
let bold;

funciton getBold_items(){
	bold = para_new.querySelectorAll('strong')
}
getBold_items()

function highlight(){
	for (var i = 0; i < bold.length; i++) {
		bold[i].style.color = "black"
	}
}

para_new.addEventListener('mouseover', highlight);
para_new.addEventListener('mouseover', return_normal);

