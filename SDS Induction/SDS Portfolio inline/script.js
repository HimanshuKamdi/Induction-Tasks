$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.mode-btn').click(function(){
        $('section .title').toggleClass("dark");
        $('.navbar .menu').toggleClass("dark");
        $('.mode-btn p').toggleClass("dark");
        $('.home').toggleClass("dark");
        $('.about').toggleClass("dark");
        $('.about .about-content .left img:nth-child(1)').toggleClass("dark");
        $('.about .about-content .left img:nth-child(2)').toggleClass("dark");
        $('.skills').toggleClass("dark");
        $('.contact').toggleClass("dark");
        $('.contact .contact-content .left .icons').toggleClass("dark");

    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // this has nothing to do with the animation, just forces the window to be a size that allows a scroll
var containerHeight = $(window).height() / 2;

$('.spacer').css("height", containerHeight);

// Find the height of the previous section, half it so when you have scrolled more than half past the section, it triggers the animation
var x = $('.skills').prev().height() / 4;
console.log('x')

$(window).scroll(function() {
  // checks to see if you have scrolled far enough down to activate the animation
  if ($(window).scrollTop() >= x) {
    //find each element with the class .skill-percent
    $('.skill-percent').each(function() {
      // animate
      $(this).animate({
        //finds the width from the data-percent attribute
        width: $(this).data('percent') + '%'
      }, 3000);
    });
  }
});





    var typed = new Typed(".typing", {
        strings: ["Student","Gamer","Developer", "Designer", "Ethical Hacker","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student","Gamer","Developer", "Designer", "Ethical Hacker","Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});