$(document).ready(function() {

//dropdown burger menu for mobile
$("#burger-nav").on("click", function() {
  $("header nav ul").toggleClass("open");
})


//to make dropdown menu dissapear when a nav item is clicked
$("header nav li a").on("click", function() {
  if($("header nav ul").hasClass("open")) {
    $("header nav ul").removeClass("open");
  }
})


//slideshow
var slideChanger = document.getElementById('slide');

function changeColor() {
  slideChanger.style.backgroundImage = "url('pics/facts/"+randomNum()+".jpg')";
}

setInterval(changeColor,10000);


  function randomNum() {
    return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
  };

});
