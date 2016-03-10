"use strict";

(function() {
// setup your IIFE (Immediately Invoked Function Expression)

	if (document.getElementById("about") != null) {
		console.log("About page");
	} else if (document.getElementById("projects") != null)  {
		console.log("Projects page");

	} else if (document.getElementById("contact") != null) {
		console.log("Contact page");
		//declare variables and create a reference to form elements
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		var checkMeOut = document.getElementById("checkMeOut");
		var submit = document.getElementById("submit");


		/*
		checkMeOut.onclick(function(){
			console.log("checkMeOut clicked");
		});
		*/

		//checbox event listerr
		checkMeOut.addEventListener("change", function () {

			if (checkMeOut.checked) {
				console.log("It's checked");
			} else {
				console.log("it's unchecked");
			}
		
			/*ternary form: 
			(checkMeOut.checked) ? console.log("It's checked") : console.log("it's unchecked");*/
		});
		
		submit.addEventListener("click", function(event){
			event.preventDefault();	
			console.log("Email: " + email.value);
			console.log("Password: " + password.value);
		});	

		/* alternatively, calling it by named fucntion which is slower
		checkMeOut.addEventListener("click", namedFunc);
		//notice the named function doesn't have () following it
		
		function namedFunc() {
			console.log("checkMeOut clicked")
		}
		*/



	}

})();

