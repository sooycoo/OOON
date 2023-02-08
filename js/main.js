// 이미지슬라이드
new Swiper('.img_slide .swiper', {
    slidesPerView: 1,   //한번에 보여줄 슬라이드 개수
    loop:true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.img_slide .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    }
})

// 헤더 스크롤 효과
var lastScrollTop = 0;
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop >= 300) {
        if((scrollTop > lastScrollTop) && (lastScrollTop>0)){
          $("header").css("top","-300px");
        } else{
            $("header").css("top","0px");
        }
        lastScrollTop = scrollTop;
    }

})

// 모바일메뉴
// 햄버거메뉴 버튼 클릭시 모바일 메뉴 열림
$('#m_btn').click(function(){
    $('#m_navi_bg, #m_menu').stop().animate({
        right:0,
    },350);
    // 스크롤바 제거
    $('body').css('overflow','hidden');

    $('#m_navi_bg, #m_menu').css({
        display:'block'
    },350);
});

// 닫기 버튼 클릭시 모바일 메뉴 닫힘
$('#m_navi_bg').click(function(){
    $('#m_navi_bg,#m_menu').stop().animate({
        right:'-100%'
    },350);
    // 본문 콘텐츠 영역 스크롤바 자동
    $('body').css('overflow','auto');
})

//pc해상도에서 모바일 메뉴 닫힘
$(window).resize(function(){
    if($(this).outerWidth() > 1249){
        $('#m_navi_bg, #m_menu').css({
            right: '-100%'
        });
    }
});
// 메인메뉴 클릭시 해당 서브메뉴 열리고 다른 서브메뉴는 닫힘
$('.m_main > li > .m_item').click(function(){
    $(this).toggleClass('selected');
    $('.m_main > li > .m_item').not(this).removeClass('selected');
    
    // 서브메뉴 열림
    $(this).find('+.m_navi_sub').slideToggle('normal');
    $('.m_main > li > .m_item').not(this).fund('+.m_navi_sub').slideUp('normal');

});

// 검색버튼 모달창
$('.gnb>.main_menu .search,#search').click(function(){
    $('.black_bg').fadeIn();    
});
$('#close').click(function(){
    $('.black_bg').fadeOut();
});

// 섹션2. 피부진단 시스템
$(document).ready(function(){

    var step1Height = 900; 

    $(".system .step1").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= step1Height; 


    if(rollIt){ 
            $(".system .step1").show()
        }
    });
    
});

$(document).ready(function(){

    var step2Height = 1500; 

    $(".system .step2").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= step2Height; 


    if(rollIt){ 
            $(".system .step2").show()
        }
    });
    
});

$(document).ready(function(){

    var blueHeight = 1800; 

    $(".blue").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= blueHeight; 


    if(rollIt){ 
            $(".blue").show()
        }
    });
    
});

// 섹션3. 베스트셀러
$(document).ready(function(){

    var comHeight = 2200; 

    $(".com_ct .first,.second,.third").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= comHeight; 


    if(rollIt){ 
            $(".com_ct .first,.second,.third").show()
        }
    });
    
});



// 섹션4. 카운트다운 타이머 삽입
var dday = new Date("June 06, 2024, 0:00:00").getTime();

setInterval(function() {
    var today = new Date().getTime();
    var gap = dday-today;
    var day = Math.ceil(gap/(1000*60*60*24));
    var hour = Math.ceil(gap % (1000*60*60*24)/(1000*60*60));
    var min = Math.ceil(gap % (1000*60*60)/(1000*60));
    var sec = Math.ceil(gap % (1000*60)/1000);

    document.getElementById("countdown").innerHTML=day+" DAYS"+"<br>"+hour+" : "+min+" : "+sec;
    document.getElementById("m_countdown").innerHTML=day+" DAYS "+hour+" : "+min+" : "+sec;
}, 1000);

// 클린뷰티 - 하단 띠배너
// Zepto 라이브러리
Zepto(function($) {
    $(window).on('load', function() {
      $.each($(".move_txt"), function(index, item) {
        const wrapper = $("<div />", { class:".move_txt-wrapper"});
        const roller = $(item);
        roller.append(wrapper);
        const span = roller.find('span').first();
        wrapper.append(span);
    
        const span_width = span.get(0).offsetWidth;
        const max_width = roller.width() + span_width;
        let inner_width = span_width;
  
        while(max_width > inner_width) {
          wrapper.append(span.clone());
          inner_width += span_width;
        }
        
        anime({
          targets: wrapper.get(0),
          translateX: {
            value: '-=' + span_width + 'px',
            duration: 3000
          },
          loop: true,
          easing: 'linear'
        });
      });
    })
  });




