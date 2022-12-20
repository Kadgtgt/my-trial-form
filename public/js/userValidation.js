function validateForm() {
	let val = 0;

	var fName = document.register.fName;
	var lName = document.register.lName;
	var email = document.register.email;
	var password = document.register.password;

	// Error
	var fNameError = document.getElementById("fNameerr");
	var lNameError = document.getElementById("lNameerr");
	var emailError = document.getElementById("emailerr");
	var passwordError = document.getElementById("passworderr");

	const alphabet = /^([A-Za-z]{2,25})$/;
	if (fName.value == "") {
		fName.style.border = "1px solid red";
		fNameError.textContent = "This field is required.";
		fNameError.style = "color: red; , font-size:10;";
		val++
	} else if (!fName.value.match(alphabet)) {
		fName.style.border = "1px solid red";
		fNameError.textContent = "This field is alphabetic.";
		fNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		fName.style.border = "1px solid green";
		fNameError.textContent = "";
	}

	if (lName.value == "") {
		lName.style.border = "1px solid red";
		lNameError.textContent = "This field is required.";
		lNameError.style = "color: red; , font-size:10;";
		val++
	} else if (!lName.value.match(alphabet)) {
		lName.style.border = "1px solid red";
		lNameError.textContent = "This field is alphabetic.";
		lNameError.style = "color: red; , font-size:10;";
		return false;
	} else {
		lName.style.border = "1px solid green";
		lNameError.textContent = "";
	}

	if (email.value == "") {
		email.style.border = "1px solid red";
		emailError.textContent = "This field is required.";
		emailError.style = "color: red; , font-size:10;";
		val++
	} else {
		email.style.border = "1px solid green";
		emailError.textContent = "";
	}

	if (password.value == "") {
		password.style.border = "1px solid red";
		passwordError.textContent = "This field is required.";
		passwordError.style = "color: red; , font-size:10;";
		val++
		return false;
	} else if (password.value.length < 6) {
		password.style.border = "1px solid red";
		passwordError.textContent = "The password must be at least 6 characters long";
		passwordError.style = "color: red; , font-size:10;";
		return false;
	} else if (password.value.length > 16) {
		password.style.border = "1px solid red";
		passwordError.textContent = "The password must not exceed 16 characters";
		passwordError.style = "color: red; , font-size:10;";
		return false;
	} else {
		password.style.border = "1px solid green";
		passwordError.textContent = "";
	}
}
