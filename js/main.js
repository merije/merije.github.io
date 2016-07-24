function askQuestions() {
	var firstName = prompt('What is your first name?');
	var lastName  = prompt('What is your last name?');

	var fullName = firstName + " " + lastName;;
	console.log('User is called ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt (age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13)  {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase () == 'general' && lastName != 'Assembly') {
		console.log('Hello!');
	}

	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase();

	if (faveColour == 'red' ||
	    faveColour == 'green' || 
	    faveColour == 'blue' ||
	    faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}


/* 
if the user's first name is 'General' and the 
last name is NOT 'Assembly', then greet the general! 
*/

}




//when the page loads
$(function()	{

	// when the user clicks the image, ask the questions
	$('img').on('click', askQuestions);

	//when the user clicks a heading
	$('h3').on('click',function(){

		//toggle the next element
		$(this).next().slideToggle(200);
	})

})
