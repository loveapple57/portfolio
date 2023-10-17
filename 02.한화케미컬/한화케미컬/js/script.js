// 스크립트 튕기는 현상
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// splitiing.js
$(function() {
  Splitting();
});

// scrolla
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 
