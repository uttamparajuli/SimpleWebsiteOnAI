






  // aditional css styles
  var body = document.querySelector("body");
  var currentWidth;
  function update() {
    currentWidth = window.innerWidth;
    console.log(currentWidth);
  }

  function updatenav() {
    if(currentWidth > 600px) {
      navation.style.display = "block";
    }
  }


//navigation section

var hideNave = document.querySelector(".hide-nave");
var hideNav = document.querySelector(".hide-nav");
var navation = document.querySelector(".navation");
navation.style.backgroundColor = "black";
var stat = false;

function tooglenav() {
  if(stat == false) {
    hideNave.style.display = "none";
    navation.style.display = "block";
    stat = true;
  } else if(stat == true) {
    hideNave.style.display = "flex";
    hideNave.style.alignItems = "center";
    navation.style.display = "none";
    stat = false;
  }
}


// function call

hideNave.addEventListener('click', tooglenav);  //hide navigation
hideNav.addEventListener('click', tooglenav);   //hide navigation


// body.addEventListener('resize',update());
// body.addEventListener('resize',updatenav());
