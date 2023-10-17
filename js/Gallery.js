// a속성제거=>위로튕김제거
$(document).on('click', 'a[href="#"]', function(e){
 e.preventDefault();
});


//01.scroll animation
$(function(){
 $('.animate').scrolla({
     mobile: true,
     once:false
 });
});



//텍스트애니메이션
$(function(){Splitting();});



// menuOpen
$(function(){
  $('.menuOpen button.open').on('click', function(){
    $('.menuOpen .menuWrap').addClass('on');
  });
  $('.menuOpen .menuWrap .close').on('click', function(){
    $('.menuOpen .menuWrap').removeClass('on');
  });
});








$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();
  // alert(scrollPos);
  fix();
  
  function fix() {
  if(scrollPos > 2050 && $(window).width() >= 1400){$('.fix .text').addClass('on');}
  else {$('.fix .text').removeClass('on');}
  if(scrollPos > 3820 && $(window).width() >= 1400){$('.fix .text').removeClass('on');}
  }
  
  });


















$(function(){

 gsap.registerPlugin(ScrollTrigger);

 ScrollTrigger.matchMedia({
     '(min-width: 1024px)': function(){

//02.가로스크롤
let list =  gsap.utils.toArray('.coding ul li');
let scrollTween = gsap.to(list, {
 xPercent: -100 * (list.length - 1), 
 ease: 'none',
 scrollTrigger: {
     trigger: '.coding',
     pin: true,
     scrub:1,
     start: 'center center',
     end:'300%', 
    // markers: true
 }
});

//03.imgBox모션
gsap.utils.toArray('.imgBox').forEach(function(imgBox){
  gsap.timeline({
     scrollTrigger: {
         trigger: imgBox,
         containerAnimation: scrollTween,
         start:'center right',
         end:'center center',
         scrub: true,
         //markers: true
     }
  })
  .to(imgBox, {'clip-path':'inset(0%)','ease':'none','duration':'1'},0)


 //  03-2 imgBox가 작아지는 애니메이션 -> 화면 중앙에서 작아지기 시작해서 왼쪽에서 끝나는 애니메이션
 gsap.timeline({
     scrollTrigger: {
         trigger: imgBox,
         containerAnimation: scrollTween,
         start:'center center',
         end:'center left',
         scrub: true,
        // markers: true
     }
  })
  .to(imgBox, {'clip-path':'inset(30%)','ease':'none','duration':'1'},0)
});//03.imgBox

//04.textBox모션
gsap.utils.toArray('.coding ul li .textBox').forEach(function(textBox){

 // 04-1 textBox가 커지는 애니메이션 -> 화면의 오른쪽에서 커지기 시작해서 중앙에서 끝나는 애니
  gsap.timeline({
      scrollTrigger: {
          trigger: textBox,
          containerAnimation: scrollTween,
          start:'center 70%',
          end: 'center 40%',
          scrub:true,
         // markers:true
      }
  })  
  .to(textBox, {'opacity':'1','x':'-100'},0) 

   //04-2 textBox가 작아는 애니메이션 -> 화면의 중앙에서 작아지기 시작해서 왼쪽에서 끝나는 애니
   gsap.timeline({
     scrollTrigger: {
         trigger: textBox,
         containerAnimation: scrollTween,
         start:'center 30%',
         end:'center 20%',
         scrub:true,
        // markers: true
     }
   })
   .to(textBox, {'opacity':'0'}, 0)

  //  05.counter text
  gsap.utils.toArray('.num').forEach(function(text){
    let num = text.getAttribute('data-text')
    let counter = document.querySelector('.counter .now');
    //$처럼 지명하는것
    ScrollTrigger.create({
        trigger: text,
        start: '0 center',
        end:'100% center',
        scrub: true,
        containerAnimation: scrollTween,
        // markers: true,
        onEnter: self => counter.innerText = num,
        onEnterBack: self => counter.innerText = num
    })
  })






 })
   }//1024px해상도까지
 })//responsived.end
});// jquery.End