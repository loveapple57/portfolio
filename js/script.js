// a속성제거=>위로튕김제거
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
 });







// menuOpen
$(function(){
  $('.menuOpen button.open').on('click', function(){
    $('.menuOpen .menuWrap').addClass('on');
  });
  $('.menuOpen .menuWrap .close').on('click', function(){
    $('.menuOpen .menuWrap').removeClass('on');
  });
});




// 스크롤 이벤트
$(function() {
  $('.animate').scrolla({
     mobile: true, //모바일버전시 활성화
     once: false //스크롤시 딱 한번만 하고싶을땐 true
  });    
     });


//텍스트애니메이션
$(function(){Splitting();});













gsap.registerPlugin(ScrollTrigger);
// 01. x축 스크롤
let list = gsap.utils.toArray('.fav .list li')
let listA = gsap.utils.toArray('.fav .list .a')
let listB = gsap.utils.toArray('.fav .list .b')
let listC = gsap.utils.toArray('.fav .list .c')


//02.scrollTween
let scrollTween = gsap.to(list, {
 xPercent: -100 * (list.length - 1),
 ease: 'none',
 scrollTrigger: {
  trigger:'.fav',
  pin:true,
  scrub:1,
  start:'center center',
  end:'200%',
  // markers:true
 }
});

// 스크롤시 , 박스 흔들리는 효과

gsap.to(listA, {
 y: 50,
 rotation: 10,
 scrollTrigger:{
  trigger:'.fav',
  spin:true,
  scrub:1,
  end:'200%'
 }
});

gsap.to(listB, {
 y: -50,
 rotation: 10,
 scrollTrigger:{
  trigger:'.fav',
  spin:true,
  scrub:1,
  end:'200%'
 }
});

gsap.to(listC, {
 y: -20,
 rotation: -10,
 scrollTrigger:{
  trigger:'.fav',
  spin:true,
  scrub:1,
  end:'200%'
 }
})


// coding swiper

var swiper = new Swiper('.mySwiper',{
  slidesperView: 1,
  spaceBetween:30,
  centeredSlides: true,
  loop: true,
  navigation: {
      
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
  },
});






$(window).on('scroll resize', function(){
var scrollPos = 0;
scrollPos = $(document).scrollTop();
// alert(scrollPos);
fix();

function fix() {
if(scrollPos > 12050 && $(window).width() >= 1400){$('.fix .text').addClass('on');}
else {$('.fix .text').removeClass('on');}
if(scrollPos > 13220 && $(window).width() >= 1400){$('.fix .text').removeClass('on');}
}

});




// 배경색변경
$(window).on('scroll resize', function(){
  var scrollTop =$(document).scrollTop();
  bgColor();

  function bgColor(){
    if(scrollTop > 11750 ){
      $('.NCS').addClass('on');
    } else {
      $('.NCS').removeClass('on');
    }

    if(scrollTop > 13500 ){
      $('.NCS').removeClass('on');
    }
  }



  
})























