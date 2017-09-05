window.onscroll=function(){changeMenu()}

function changeMenu()
{
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    // At specifiv position do what you want 
    if(scrollBarPosition > 500) {
      document.querySelector('.navbar').style.opacity = "1";
      document.querySelector('.picture').classList.remove("bw-pic");
      document.querySelector('.h1-intro').style.color = "#80C9F1";
    }
    else {
      document.querySelector('.navbar').style.opacity = "0";
      document.querySelector('.picture').classList.add("bw-pic");
      document.querySelector('.h1-intro').style.color = "black";
      

    }
}





var typing = "To finish your project";
var typingArray = typing.split("");
var looptimer;

function typeLoop() {
  if (typingArray.length > 0) {
    document.getElementById("type-text").innerHTML += typingArray.shift();
  } else {
    clearTimeout(loopTimer);
  }
  loopTimer = setTimeout("typeLoop()", 70);
};

setInterval(typeLoop, 2000);

var typing2 = "Let's get to work";
var typingArray2 = typing2.split("");
var looptimer;

function typeLoop2() {
  if (typingArray2.length > 0) {
    document.getElementById("type-text2").innerHTML += typingArray2.shift();
  } else {
    clearTimeout(loopTimer2);
  }
  loopTimer2 = setTimeout("typeLoop2()", 70);
};

setInterval(typeLoop2, 5000);


const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = mins / 60 * 360 + seconds / 60 * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = hour / 12 * 360 + mins / 60 * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (secondsDegrees >= 360) {
    secondHand.style.transition = "none";
  }
}

setInterval(setDate, 1000);

setDate();



$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "1";
  var template_id = "template_JUtkKEqq";

  myform.find(".submit-btn").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("Email sent!");
       myform.find(".submit-btn").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find(".submit-btn").text("Send");
    });
  return false;
});



   
