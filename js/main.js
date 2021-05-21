

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

//Popup
const Popup = document.querySelector(".popup");
const close = document.querySelector(".close");
var flag=0;       //if this flag while be 1 then the popup will not be displayed
                  //to display the popup change the value of flag to 0

if(flag == 0)
{
  window.addEventListener("load",function(){
    setTimeout(function(){
      Popup.classList.add("show");
    },5000) 
  })

  close.addEventListener("click",function(){
    Popup.classList.remove("show");
  })
}