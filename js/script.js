//Form validation1 checkFunction is used to check if the member login details is valid.
function checkFunction() {
	//Add this error message in html.
	document.getElementById("errorMessage").innerHTML = "The member name or password is invlid! Please try again.";
}

//Form validation used to check if the message box is blank.
function sendFunction() {
	//Set a variable for the message box.
	var messageInputvalue = document.getElementById("messageInput").value;
	//If the message box is not blank, then call following function.
if (messageInputvalue != "") {
	//Send a message to user that the message has been sent.
	alert("Thank you for sending your message to us. We will reply to you as soon as possible!");
	} else {
	alert("Please enter your message!");//If message box is empty, send this notice to user.
	}
}

//Check if all the forms have been filled.
function submitFunction() {
	//Set varibles for those input boxes.
	var firstnameInputvalue = document.getElementById("firstName").value;
	var lastnameInputvalue = document.getElementById("lastName").value;
	var emailInputvalue = document.getElementById("emailInput").value;
	//If they are not blanck, then call the following function.
	if (firstnameInputvalue != "" && lastnameInputvalue != "" && emailInputvalue != ""  ) {
		//Send a message to user which application is complete.
		alert("Congratulations! Your applicaion is complete")
		} else {
		document.getElementById("submitMessage").innerHTML = "The form is not complete.";//If form is not complete, send this message.
		}
}

//Check if the passwords are identical.
function checkPass() {
	//Set variables for password box and a message in html.
	var passwordInputvalue = document.getElementById("passwordInput").value;
	var passwordCheckvalue = document.getElementById("passwordCheck").value;
	var message = document.getElementById("confirmMessage")
	//if the first password is same with the second and they are not blank, send "Passwords Match" to user.
	if (passwordInputvalue == passwordCheckvalue && passwordInputvalue != "" && passwordCheckvalue != "" ) {
		message.innerHTML = "Passwords Match!";
	} else if (passwordInputvalue != passwordCheckvalue && passwordInputvalue != "" && passwordCheckvalue != "" ) {
		message.innerHTML = "The passwords do not match!"; //If not matched, send this message to user.
	}

}

//Function to creat image slide			
var i = 0;
var path = new Array();

// Put images into new array.
path[0] = "images/volunteer.png";
path[1] = "images/volunteer2.png";
path[2] = "images/volunteer3.png";
path[3] = "images/volunteer4.png";
path[4] = "images/volunteer5.png";

//Function to slide the image.
function swapImage()
{
		document.slide.src = path[i];//Set the source to path.
		if(i < path.length - 1) i++; else i = 0;//If path is smaller than 1, call the following function.
		setTimeout("swapImage()",3000);//Set the speed for image sliding.
}

//Jquery function used to show user the title of the link.
$(function() {
	$( document ).tooltip();//Call the function from the Jquery library.
});
