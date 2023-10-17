// a를 클릭했을 때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
   e.preventDefault();
});

// gnb
$(function(){
  $(".innerHeader .menuOpen").on("click",function(){
      $(".gnb").addClass("on");
  });
  $(".gnb .close, section").on("click",function(){
     $(".gnb").removeClass("on");
  })
});


/*shift + alt + A : 여러줄 주석
1.JQuery -> $(function(){});로 감싸줘야한다.
2.$("선택자")로 대상을 선택한다.
3.on("이벤트명", function(){});  -> on그룹이벤트메소드로 이벤트를 작성하고 함수를 호출
4.다시 $("선택자")로 대상을 선택한 후 메소드를 적어든다.


*/

$(function(){
   $('.visual .slide').slick({
      arrows: true,  //화살표
      dots: false, //인디케이트 해제
      fade: true,//페이드효과
      autoplay:true, //자동재생
      autoplaySpeed: 4000, //재생시간
      pauseOnHover: false,
      pauseOnFocus: false   
  });
});

// fixHeader
let scrollTop = 0;
scrollFix = $(document).scrollTop();
fixHeader();

// 스크롤과 윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
   scrollFix = $(document).scrollTop();
   fixHeader();
});


// fixHeader함수

function fixHeader(){
   if(scrollFix > 150) {
      $('header').addClass('on');
   }else {
      $('header').removeClass('on');
   }
}

$(function() {
   $('.animate').scrolla({
      mobile: true, //모바일버전시 활성화
      once: true //스크롤시 딱 한번만 하고싶을땐 true
   });    
      });

// 상단이동 부드럽게
$(function(){
   $(".goTop").on("click", function(){
      const top = $('body').offset().top; // body의 top의 위치값을 변수 top한테 저장(대입)
      // offset() 함수는 원하는 선택자의 위치값을 top, left형식을 반환하여 줍니다.
      $('html, body').animate({scrollTop : (top) }, 600);
   });
});

