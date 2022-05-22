var website1 = 'https://mlconference.ai/singapore/';
var website2 = '';



var eventContainer = document.querySelector(".events-wraper");

fetch('https://mlconference.ai/singapore')
  .then(request).then(data).catch(error)

  function request(response) {
     return response.json();
  }

   function data(datas) {
     console.log(datas);
   }

  function error(err) {
    console.log(err);
  }
