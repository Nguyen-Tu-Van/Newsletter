$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
  });

  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 4000,
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

  $('.project').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});

//Get the button
let mybutton = document.getElementById("myBtn");

// scrolls down 20px , show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//clicks on the button top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//sign up
function signup()
{
  alert("Please enter your email where newsletter !");
}
//check mail validate
function checkMail()
{
  let email=document.forms["sign"].email.value;
  let regemail = /^([a-zA-Z0-9_\.\-])+\@gmail.com+$/;
   if(!regemail.test(email))
  {
   alert("Email không hợp lệ.\n abc@gmail.com");
   document.forms["sign"].email.focus();
   return false;
  }
  alert("You have successfully registered !")
  return true;
}
