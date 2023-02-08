// 메인배너 
const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap은 밀리초x 초 단위를 사용함
    gsap.to(fadeEl, 1, {
        delay: (index + 1) *.7, // 0.7 - 1.4 - 2.1 - 2.8
        opacity:1
    })
});

// 섹션2. 스토리
$(document).ready(function(){

    var shdHeight = 1100; 
    //navHeight 의s 높이를 구하기

    $(".s_hd>p").hide();
    //스크롤시 나타날 객체 미리 숨기기

    $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
        var rollIt = $(this).scrollTop() >= shdHeight; 
// 스크롤의 정도가 sec4Height 의 값을 넘었을 때 == 윈도우 스크롤의 값이 sec4Height 의 높이와 같거나 크다

/*
scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
*/

    if(rollIt){ 
		//윈도우 스크롤 기능의 값이 sec4Height 의 높이와 같거나 크면
            $(".s_hd>p").show()
        }
        else{
            $(".s_hd>p").hide();
        }
    });
    
});

// // 스토리 본문
// 1
$(document).ready(function(){

    var storyHeight = 1400; 

    $(".img1,.txt1").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight; 


    if(rollIt){ 
            $(".img1,.txt1").show()
        }
    });
    
});
// 2
$(document).ready(function(){

    var storyHeight = 2400; 

    $(".img2,.txt2").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight; 


    if(rollIt){ 
            $(".img2,.txt2").show()
        }
    });
    
});
// 3
$(document).ready(function(){

    var storyHeight = 2800; 

    $(".img3,.txt3").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight; 


    if(rollIt){ 
            $(".img3,.txt3").show()
        }
    });
    
});
// 4
$(document).ready(function(){

    var storyHeight = 3300; 

    $(".img4,.txt4").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= storyHeight; 


    if(rollIt){ 
            $(".img4,.txt4").show()
        }
    });
    
});

// 섹션3. 클린뷰티
$(document).ready(function(){

    var ch1Height = 3700; 

    $(".clean_h1>h1").hide();

    $(window).scroll(function(){  
        var rollIt = $(this).scrollTop() >= ch1Height; 

    if(rollIt){ 
            $(".clean_h1>h1").show()
        }
        else{
            $(".clean_h1>h1").hide();
        }
    });
    
});
// 본문
$(document).ready(function(){

    var cleanHeight = 4100; 

    $(".c_txt>h1,.c_txt>ul").hide();

    $(window).scroll(function(){ 
        var rollIt = $(this).scrollTop() >= cleanHeight; 

    if(rollIt){ 
            $(".c_txt>h1,.c_txt>ul").show()
        }
    });
    
});

// 섹션4. 천연 주재료
window.onload = function() {
    var bannerLeft=0;
    var first=1;
    var last;
    var imgCnt=0;
    var $img = $(".ing_wrap img");
    var $first;
    var $last;

    $img.each(function(){   // 50px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+50;
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });

    
    if( imgCnt > 8){                //배너 8개 이상이면 이동시킴

        last = imgCnt;

        setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width()+50 );
                first++;
                last++;
                if(last > imgCnt) { last=1; }   
                if(first > imgCnt) { first=1; }
            }
        }, 30);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 

                    //깔끔하게 변경가능하다           

    }

};

