// a속성제거=>위로튕김제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
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



// menuOpen
$(function(){
   $('.menuOpen button.open').on('click', function(){
     $('.menuOpen .menuWrap').addClass('on');
   });
   $('.menuOpen .menuWrap .close').on('click', function(){
     $('.menuOpen .menuWrap').removeClass('on');
   });
 });
