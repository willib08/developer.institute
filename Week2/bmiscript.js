// // Exercise 4 : Checking The BMI
// // Create two objects, each one should hold a person details. 
// Here are the details: fullName, mass, height.
// // Each object should also have a property which value is a 
// function that calculates the Body Mass Index (BMI) of each person
// // Create a JS function that compare both the BMI. Display the name 
// of the person that has the biggest BMI.    BMI = kg/m2


let john= {
	fullname: "john doe",                  //two objects with their 4 properties
	mass: 210,
	height: 5.7,
	bmi(){
		return this.mass/(Math.pow(this.height, 2)); 
	}
}

let jane= {
	fullname: "jane doe",
	mass: 112,
	height: 5.1,
	bmi(){
		return this.mass/(Math.pow(this.height, 2));
	}
}



//COMPARES TWO BMIS ACCORDING TO THE TWO OBJECTS AND THEIR PROPERTIES
//THIS IS DECLARING A FUNCTION
//ARGUMENTS REPRESENT (PERSON1 AND PERSON2) WILL REPRESENT WHAT YOU ARE TRYING TO USE
//WHEN CALLING A FUNCTION

function compareBMI(person1, person2){
	if(person1.bmi() > person2.bmi()){
		alert(person1.fullname + " has a bigger BMI ");    	
	}else{
		alert(person2.fullname + " has a bigger BMI ");
	}

}

//THIS IS CALLING A FUNCTION
 compareBMI(john,jane);