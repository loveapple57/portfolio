// a속성제거=>위로튕김제거
$(document).on('click', 'a[href="#"]', function(e){
 e.preventDefault();
});


//svg path길이구하기
$(function(){
 $('.svgAni').find('path').each(function(i, path){
     var length = path.getTotalLength();
    // alert(length);  
 });
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 


						// 배경색변경
						$(window).on('scroll resize', function(){
							var scrollTop =$(document).scrollTop();
							bgColor();

							function bgColor(){
								if(scrollTop > 1400 ){
									$('body').addClass('on');
								} else {
									$('body').removeClass('on');
								}
								if(scrollTop > 2700 ) {
									$('body').removeClass('on');
								}
							}
						})


						// menuOpen
						$(function(){
							$('.menuOpen button.open').on('click', function(){
								$('.menuOpen .menuWrap').addClass('on');
							});
							$('.menuOpen .menuWrap .close').on('click', function(){
								$('.menuOpen .menuWrap').removeClass('on');
							});
						});

						// gnb 마우스오버, 포터스 밑줄 => span.bar
						$(function(){
							$('.gnb li a ').on('mouseenter focus', function(){
								let bar = $(this).position().left;
								let widNum = $(this).width();

								$('span.bar').css({'left': bar + 'px','width':widNum + 'px','opacity':'1'});
							});
							$ ('.gnb li a ').on('mouseleave', function(){
								$('span.bar').css({'left': 0,'width':0, 'opacity':'0'});
							});
						});