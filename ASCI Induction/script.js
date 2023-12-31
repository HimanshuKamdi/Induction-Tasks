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
        $('.about').toggleClass("dark");
        $('.skills').toggleClass("dark");
        $('.contact').toggleClass("dark");
        $('.animate').toggleClass("dark");

    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    var typed = new Typed(".typing", {
        strings: ["Student","Gamer","Developer", "Designer", "Ethical Hacker","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        cursorChar: '✎'

    });

    var typed = new Typed(".typing-2", {
        strings: ["Student","Gamer","Developer", "Designer", "Ethical Hacker","Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
});