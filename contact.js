

// live displaying text
var typing = document.querySelector(".textarea textarea");

function displayText(event) {
  var liveText = document.querySelector(".live-typing p");
   liveText.innerHTML = event.target.value;
}



//comments section
var commentSubmit = document.querySelector(".comment-submit");
var formDatas = document.querySelector(".comment-wraper");
var username = document.querySelector(".comment-wraper #name");
var email = document.querySelector(".comment-wraper #email");
var feedback = document.querySelector(".comment-wraper #feedback");


function comments() {
  let data = {
      name: username.value,
      email: email.value,
      feedback: feedback.value,
  };
  console.log(data);
  createComment(data);
}

function createComment(data) {
  let commentContainer = document.querySelector(".comments");
  let content = '';
  content += `
    <div class="feedback-box">
    <div class="comment-image"></div>
    <div class="user-info">
       <h3 class="name">name: ${data.name} </h3><br>
       <h3 class="email">email: ${data.email} </h3><br>
       </div>
     <div class="user-comment">
       <h4> feedback: </h4><br>
       <p>${data.feedback}</p>
       </div>
   <div>
  `;
  commentContainer.innerHTML += content;
}


// function call

commentSubmit.addEventListener('click', comments); //comments event
formDatas.addEventListener('submit',comments); //submit
typing.addEventListener('input', displayText); // live displaying text
