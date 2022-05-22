//log in and sign in section

var login = document.querySelector(".login-page");
var signin = document.querySelector(".signin-page");
var sinButton = document.querySelector("#sign-option");
var logButton = document.querySelector("#log-option");

console.log(login);
console.log(signin);
console.log(sinButton);
console.log(logButton);

function hidesign() {
  console.log("clicked");
  login.style.display = "block";
  sinButton.style.color = "rgb(100,100,100)";
  logButton.style.color = "red";
  signin.style.display = "none";
}

function hidelog() {
  console.log("clicked");
  login.style.display = "none";
  signin.style.display = "block";
  sinButton.style.color = "red";
  logButton.style.color = "rgb(100,100,100)";
}


// function call

sinButton.addEventListener('click', hidelog); //hiding login page
logButton.addEventListener('click', hidesign); //hiding sign in page
