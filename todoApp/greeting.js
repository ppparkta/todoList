const $loginForm = document.querySelector("#login-form");
const $logintInput = document.querySelector("#login-form input");
const $greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username) {
	$greeting.textContent = `Hello ${username}`;
	$greeting.classList.remove("hidden");
}

function onLoginSubmit(event) {
	event.preventDefault();
	const userName = $logintInput.value;
	$loginForm.classList.add("hidden");
	paintGreeting(userName);
	localStorage.setItem(USERNAME_KEY, userName);
}

if (!savedUsername) {
	$loginForm.classList.remove("hidden");
	$loginForm.addEventListener("submit", onLoginSubmit);
}
else {
	paintGreeting(savedUsername);
}