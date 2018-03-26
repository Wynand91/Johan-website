$(document).ready(function() {
  alert("please note that our website is not yet mobile friendly, we are working on it!");
var slideChanger = document.getElementById('slide');

function changeColor() {
  slideChanger.style.backgroundImage = "url('pics/facts/"+randomNum()+".jpg')";
  slideChanger.fadeIn(200);
}

setInterval(changeColor,10000);


  function randomNum() {
    return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  };

});
