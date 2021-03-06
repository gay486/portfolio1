;(function(window,document,$,undefined){

    var vwMall={
        init:       function(){
            var that=this;
                that.headerFn();
                that.sec1Fn();
                that.sec2Fn();
                that.sec3Fn();
                that.sec4Fn();
                that.sec5Fn();
                that.sec6Fn();
        },
        headerFn:   function(){
            var cnt=0;
            var setIdH=0;
            var setIdH2=0;
            var url=null;

                function noticeFn(){
                    cnt++;
                    if(cnt>1){
                        cnt=0;
                    }
                    $('.notice li').stop().animate({top:29},0).css({zIndex:2});
                    $('.notice li').eq(cnt<0?1:cnt).stop().animate({top:0},1000).css({zIndex:1});
                }

                $('.next0-btn, .prev0-btn').on({
                    click: function(){
                        clearInterval(setIdH);
                        noticeFn();
                        controlTimeFn();
                    }
                });

                function controlTimeFn(){

                    clearInterval(setIdH);
                    clearInterval(setIdH2);

                    var cnt2=0;
                    setIdH2 = setInterval(function(){
                        cnt2++;
                        if(cnt2>10){
                            timer1Fn();
                            clearInterval(setIdH2);
                        }
                    },1000);
                }

                function timer1Fn(){
                    setIdH = setInterval(noticeFn, 3000);
                }
                timer1Fn();
                // 메인,서브 메뉴 버튼 + 스무스 스크롤 버튼
                $('.main-btn').on({
                    click: function(e){
                        e.preventDefault();
                        $(this).next().stop().slideToggle(600,'swing');
                    }
                });

                $('.sub-btn').on({
                    click: function(e){
                        e.preventDefault();
                        $(this).next().stop().slideToggle(600,'swing');
                    }
                });

                $('.smooth-btn').on({
                    click: function(){
                        url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop:$(url).offset().top},600);
                    }
                });
                        
                // 스크롤 이동시 헤더영역 올리고 goTop버튼 보이게
                $(window).scroll(function(){
                    if( $(this).scrollTop() >=30 ){
                        $('#header .wrap').addClass('addH');
                        $('.goTop').addClass('addGotop');
                    }
                    else{
                        $('#header .wrap').removeClass('addH');
                        $('.goTop').removeClass('addGotop');
                    }
                    
                // 섹션 위치에 따라 헤더 변경

                    if( $(this).scrollTop() >= $('#section2').offset().top-300 ){
                        $('.quick').addClass('addPosition');
                    }
                    if( $(this).scrollTop() < $('#section2').offset().top-300 ){
                        $('.quick').removeClass('addPosition');
                    }

                    if( $(this).scrollTop() >= $('#section4').offset().top-100 ){
                        $('.quick').addClass('addColor');
                    }
                    if( $(this).scrollTop() < $('#section4').offset().top-100 ){
                        $('.quick').removeClass('addColor');
                    }
                    if( $(this).scrollTop() >= $('#section5').offset().top+800 ){
                        $('.quick').removeClass('addColor');
                    }

                    if( $(this).scrollTop() >= $('#section5').offset().top ){
                        $('#header').addClass('addColor');
                        $('#header .left').addClass('addColor');  
                        $('#header .middle').addClass('addColor');  
                        $('#header .right').addClass('addColor');  
                    }
                    if( $(this).scrollTop() < $('#section5').offset().top ){
                        $('#header').removeClass('addColor');
                        $('#header .left').removeClass('addColor');
                        $('#header .middle').removeClass('addColor');
                        $('#header .right').removeClass('addColor');
                    }

                    if( $(this).scrollTop() >= $('#section2').offset().top ){
                        $('#header').addClass('addColorSec3');   
                    }
                    if( $(this).scrollTop() < $('#section2').offset().top ){
                        $('#header').removeClass('addColorSec3');
                    }
                    if( $(this).scrollTop() >= $('#section3').offset().top ){
                        $('#header').removeClass('addColorSec3');
                    }

                });

                // 헤더 우측 서비스 메뉴 버튼
                $('.search-icon-btn').on({
                    click: function(){
                        $(this).toggleClass('addSearch');
                        $('.svc1-wrap').stop().slideDown(500,'swing');
                    }
                });
                $('.mark-btn').on({
                    click: function(){
                        $('.svc1-wrap').stop().slideUp(500,'swing');
                    }
                });

                $('.login1-btn').on({
                    click: function(){
                        $(this).toggleClass('addSearch');
                        $('.svc2-wrap').stop().slideDown(500,'swing');
                    }
                });
                $('.close-btn').on({
                    click: function(){
                        $('.svc2-wrap').stop().slideUp(500,'swing');
                    }
                });

                $('.service-btn').on({
                    click: function(){
                        $(this).toggleClass('addSearch');
                        $('.svc3-wrap').stop().slideDown(500,'swing');
                    }
                });
                $('.mk-btn').on({
                    click: function(){
                        $('.svc3-wrap').stop().slideUp(500,'swing');
                    }
                });

        },
        sec1Fn:     function(){

        },
        sec2Fn:     function(){
            $(window).scroll(function(){
                if( $(this).scrollTop() >=50 ){
                    $('#section2').addClass('addSec2');
                }
                else{
                    $('#section2').removeClass('addSec2');
                }
            }); 
        },
        sec3Fn:     function(){
            // 섹션3 슬라이드
            var cnt=0;
            var setId=0;
            var setId2=0;
            var cnt3=0;

                function nextFn(){
                    cnt++;
                    mainSlideFn();
                }
                function prevFn(){
                    cnt--;
                    mainSlideFn();
                }
                function mainSlideFn(){
                    $('.slide-wrap').stop().animate({left:-371*cnt}, 600, function(){
                        if(cnt>13){cnt=0;}
                        if(cnt<0){cnt=13;}
                        $('.slide-wrap').stop().animate({left:-371*cnt}, 0);
                    });
                    pageChkBtn(cnt);
                }

                $('.next-btn').on({
                    click: function(){
                        if( !$('.slide-wrap').is(':animated') ){
                            nextFn();
                        }
                        timerControlFn();
                    }
                });
                $('.prev-btn').on({
                    click: function(){
                        if( !$('.slide-wrap').is(':animated') ){
                            prevFn();
                        }
                        timerControlFn();
                    }
                });

                $('.slide-wrap').swipe({
                    swipeLeft: function(){
                        if( !$('.slide-wrap').is(':animated') ){
                            nextFn();
                        }
                        timerControlFn();
                    },
                    swipeRight: function(){
                        if( !$('.slide-wrap').is(':animated') ){
                            prevFn();
                        }
                        timerControlFn();
                    }
                });

                function timerControlFn(){

                    clearInterval(setId);
                    clearInterval(setId2);
                    $('.pause-play-btn').addClass('addPlay');

                    var cnt2=0;
                    setId2 = setInterval(function(){
                        cnt2++;
                        if(cnt2>10){
                            nextFn();
                            timerFn();
                            clearInterval(setId2);
                            $('.pause-play-btn').removeClass('addPlay');
                        }
                    },1000);
                }

                function timerFn(){
                    setId = setInterval(nextFn, 3000);
                }
                timerFn();

                $(".page0-btn").each(function(index){
                    $(this).on({
                        click: function(){
                            cnt=index;    
                            mainSFn(); 
                            clearInterval(setId);  
                            $(".pause-play-btn").addClass("addPlay");
                            timerConFn();
                        }
                    });
                });

                function pageChkBtn(z){
                    z>13 ? z=0 :z;
                    $('.page0-btn').removeClass('addPageBtn');
                    $('.page0-btn').eq(z).addClass('addPageBtn');
                }

                $('.pause-play-btn').on({
                    click: function(){
                        var x = null;
                            x = $(this).hasClass('addPlay');
                            if(x==false){
                                clearInterval(setId);
                                clearInterval(setId2);
                                $(this).addClass('addPlay');
                            }
                            else if(x==true){
                                clearInterval(setId);
                                clearInterval(setId2);
                                timerFn();
                                $(this).removeClass('addPlay');
                            }
                    }
                });

                // 모달창 열기
                $('.slide').on({
                    click: function(){
                        $('.modal').stop().fadeIn(300);
                        $('html').addClass('addScroll');
                    }
                });
                // 모달창 닫기
                $('.close5-btn, .img-wrap').on({
                    click: function(){
                        $('.modal').stop().fadeOut(300);
                        $('html').removeClass('addScroll');
                    }
                });
                // 모달창 이미지 버튼
                $('.img-btn, .arrow-right-btn').on({
                    click: function(e){
                        e.stopPropagation();
                        cnt3++;
                        if(cnt3>13){
                            cnt3=0;
                        }
                        var txt = '<img src="./img/slide_' + cnt3 + '.jpg" alt="">'
                        
                        $('.img-btn').html(txt);
                    }
                });
                // 뒤로가기 버튼
                $('.arrow-left-btn').on({
                    click: function(){
                        cnt3--;
                        if(cnt3<0){
                            cnt3=13;
                        }
                        var txt = '<img src="./img/slide_' + cnt3 + '.jpg" alt="">'
                        
                        $('.img-btn').html(txt);
                    }
                });

                $(window).scroll(function(){
                    if( $(this).scrollTop() >= $('#section2').offset().top+200 ){
                        $('#section3').addClass('addSec2');
                    }
                    if( $(this).scrollTop() < $('#section2').offset().top+200 ){
                        $('#section3').removeClass('addSec2');
                    }
                }); 
        },
        sec4Fn:     function(){

            function section4Fn(){
                $('#section4').stop().animate({right:4000},30000);
            }
            setInterval(section4Fn,100);
        },
        sec5Fn:     function(){

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section3').offset().top ){
                    $('#section5').addClass('addSec2');
                }
                if( $(this).scrollTop() < $('#section3').offset().top ){
                    $('#section5').removeClass('addSec2');
                }

                if( $(this).scrollTop() >= $('#section3').offset().top+400 ){
                    $('#section5 .shop').addClass('addSec2');
                }
                if( $(this).scrollTop() < $('#section3').offset().top+400 ){
                    $('#section5 .shop').removeClass('addSec2');
                }
            }); 
        },
        sec6Fn:     function(){
            // 섹션6 슬라이드
            var cnt6=0;
            var setId6=0;
            var setId7=0;

                function nextSCFn(){
                    cnt6++;
                    mainSFn();
                }
                function prevSCFn(){
                    cnt6--;
                    mainSFn();
                }
                function mainSFn(){
                    $('.slide-wrap-sec6').stop().animate({ left:-227*cnt6 }, 600, function(){
                        if(cnt6>9){cnt6=0;}
                        if(cnt6<0){cnt6=9;}
                        $('.slide-wrap-sec6').stop().animate({ left:-227*cnt6 }, 0);
                    });
                    pageChkBtn(cnt6);
                }

                $('.next6-btn').on({
                    click: function(){
                        if( !$('.slide-wrap-sec6').is(':animated') ){
                            nextSCFn();
                        }
                        timerConFn();
                    }
                });
                $('.prev6-btn').on({
                    click: function(){
                        if( !$('.slide-wrap-sec6').is(':animated') ){
                            prevSCFn();
                        }
                        timerConFn();
                    }
                });

                $('.slide-wrap-sec6').swipe({
                    swipeLeft: function(){
                        if( !$('.slide-wrap-sec6').is(':animated') ){
                            nextSCFn();
                        }
                        timerConFn();
                    },
                    swipeRight: function(){
                        if( !$('.slide-wrap-sec6').is(':animated') ){
                            prevSCFn();
                        }
                        timerConFn();
                    }
                });

                function timeFn(){
                    setId6=setInterval(nextSCFn, 3000);
                }
                timeFn();

                function timerConFn(){

                    clearInterval(setId6);
                    clearInterval(setId7);
                    $('.page-btn').addClass('addPlay');

                    var cnt2=0;
                    setId7 = setInterval(function(){
                        cnt2++;
                        if(cnt2>10){
                            nextSCFn();
                            timeFn();
                            clearInterval(setId7);
                            $('.page-btn').removeClass('addPlay');
                        }
                    },1000);
                }

                $(".page-chk-btn").each(function(index){
                    $(this).on({
                        click: function(){
                            cnt6=index;    
                            mainSFn(); 
                            clearInterval(setId6);  
                            $(".page-btn").addClass("addPlay");
                            timerConFn();
                        }
                    });
                });

                function pageChkBtn(z){
                    z>9 ? z=0 :z;
                    $('.page-chk-btn').removeClass('addPageBtn');
                    $('.page-chk-btn').eq(z).addClass('addPageBtn');
                }

                $('.page-btn').on({
                    click: function(){
                        var x = null;
                            x = $(this).hasClass('addPlay');
                            if(x==false){
                                clearInterval(setId6);
                                clearInterval(setId7);
                                $(this).addClass('addPlay');
                            }
                            else if(x==true){
                                clearInterval(setId6);
                                clearInterval(setId7);
                                timeFn();
                                $(this).removeClass('addPlay');
                            }
                    }
                });

                
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section5').offset().top+400 ){
                    $('#section6').addClass('addSec2');
                }
                if( $(this).scrollTop() < $('#section5').offset().top+400 ){
                    $('#section6').removeClass('addSec2');
                }
            }); 
        },
        
    };

    vwMall.init();

})(window,document,jQuery);