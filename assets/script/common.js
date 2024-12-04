
$(function(){
    common.calendar();
    common.etcEvt();

});

var TOUCH = "ontouchstart" in window;
var tevent = '';
if (TOUCH){
    tevent = "touchstart";
}else{
    tevent = "click";
}


common = {
    calendar:function(){
        $(".datepicker").datepicker({
            dateFormat: "yy-mm-dd"
        });
    },
    etcEvt:function(){

        var currentDirection = ''; // 현재의 방향을 나타내는 변수
        var lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수
        $(window).scroll( $.throttle( 100, function(e) {
            var currentPos = $(this).scrollTop();
            if (currentPos > lastScrollTop){
                // 아래로 스크롤 중
                if(currentDirection != 'down') { // 마지막 방향 확인
                    currentDirection = 'down';
                    $("header").removeClass("up").addClass("down");
                    $(".mob-topbtn-wrap").addClass("on");
                    $(".fixed-item-wrap").removeClass("up").addClass("down");
                }

            } else {
                // 위로 스크롤 중
                if(currentDirection != 'up') { // 마지막 방향 확인
                    currentDirection = 'up';
                    $("header").removeClass("down").addClass("up");
                    $(".mob-topbtn-wrap").removeClass("on");
                    $(".fixed-item-wrap").removeClass("down").addClass("up");
                }
            }
            lastScrollTop = currentPos; // 방향을 구하기 위해 마지막 스크롤 지점을 저장

            if(lastScrollTop == 0){
                $("header").removeClass("down").removeClass("up");
                $(".fixed-item-wrap").removeClass("down").removeClass("up");
            }

            if($(document).height() - 150 < $(window).scrollTop() + $(window).height()) {
                $(".mob-topbtn-wrap").removeClass("on");
            }else{
                $(".mob-topbtn-wrap").addClass("on");
            }
        }));


        $("body").on("click",".btn-upload",function(){
            $(this).prev(".hidden").trigger("click");
        });
        $("body").on("change",".hidden",function(){
            $(this).prev(".inp").val($(this).val());
        });

        $("body").on("click",".resources-page-wrap .side-item-wrap dl dt a",function(){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
                $(this).parents("dt").eq(0).next("dd").slideUp(300);
            }else{
                $(this).addClass("on");
                $(this).parents("dt").eq(0).next("dd").slideDown(300);
            }
        });
        $("body").on("click",".resources-page-wrap .side-item-wrap .select-input-wrap .btn-toggle",function(){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
                $(".select-list-wrap").removeClass("on");
            }else{
                $(this).addClass("on");
                $(".select-list-wrap").addClass("on");
            }
        });
        $("body").on("mouseleave",".select-input-wrap .select-list-wrap",function(){
            $(this).removeClass("on");
            $(".resources-page-wrap .side-item-wrap .select-input-wrap .btn-toggle").removeClass("on");
        });
        $("body").on("click",".acticle-item-wrap dl dt input",function(){
            var ck = $(this).prop("checked");
            if(ck){
                $(this).parents("dt").eq(0).addClass("on");
                $(this).parents("dt").eq(0).next("dd").slideDown(300);
                $(this).parents("dt").eq(0).next("dd").find("input").prop("checked", true);
            }else{
                $(this).parents("dt").eq(0).removeClass("on");
                $(this).parents("dt").eq(0).next("dd").slideUp(300);
                $(this).parents("dt").eq(0).next("dd").find("input").prop("checked", false);
            }
        });

        $("body").on("click",".all-list-wrap li input",function(){
            var n = $(".all-list-wrap li input:checked").length;
            $(".compare-item-wrap button strong").text(n);
        });
        //.all-list-wrap li label input







        $("body").on("click", ".btn-total-nav", function(ev){
            var ck = $(".side-cont").hasClass("on");
            if(ck){
                $(".side-cont").removeClass("on");
                $(".gnb-box").removeClass("on").addClass("off");
            }else{
                $(".side-cont").addClass("on");
                $(".gnb-box").removeClass("off").addClass("on");
            }
        });

        $("body").on("mouseenter", ".gnb-box", function(ev){
            ev.preventDefault();
            //ev.stopPropagation();
            $("header").addClass("over");
            $(".wrapper").addClass("menu-active");
            setTimeout(function(){
                $("header").addClass("over").addClass("ing");
            },200)

        });
        $("body").on("mouseleave", "header", function(ev){
            ev.preventDefault();
            //ev.stopPropagation();
            $("header").removeClass("ing");
            $(".wrapper").removeClass("menu-active");
            setTimeout(function(){
                $("header").removeClass("ing").removeClass("over");
            },200)

        });
        $("body").on("mouseenter", ".off .gnb-list>li", function(ev){
            ev.preventDefault();
            $(".gnb-list>li").removeClass("on").addClass("disabled");
            $(this).addClass("on");
        });
        $("body").on("click", ".on .gnb-list>li>a", function(ev){
            ev.preventDefault();
            //ev.stopPropagation();
            var ck = $(this).parents("li").eq(0).hasClass("on");
            if(ck){
                $(this).parents("li").eq(0).removeClass("on");
            }else{
                $(".gnb-list>li").removeClass("on").addClass("disabled");
                $(this).parents("li").eq(0).addClass("on");
            }
        });

        $("body").on("click", ".btn-topbtn", function(ev){
            $("html, body").stop().animate({scrollTop: 0},200, 'easeOutQuad');
            $(".container").stop().animate({scrollTop: 0},200, 'easeOutQuad');
        });

        $("body").on("click", ".btn-mob-more", function(ev){
            var ck = $(this).hasClass("on");
            if(ck){
                $(this).removeClass("on");
                $(".wrapper").removeClass("mask");
                $(".mob-fixed-bottom ul li .slist").removeClass("on");
            }else{
                $(this).addClass("on");
                $(".wrapper").addClass("mask");
                $(".mob-fixed-bottom ul li .slist").addClass("on");
            }
            //.mob-fixed-bottom ul li .slist
        });

        $("body").on("mouseenter", ".sp-menu-list>li>a", function(ev){
            $(".sp-menu-list>li>a").removeClass("on");
            $(this).addClass("on");
        });
        $("body").on("mouseleave", "header", function(ev){
            $(".sp-menu-list>li>a").removeClass("on");
        });

        $("body").on("click", ".btn-file-upload", function(ev){
            $(this).prev(".hidden").trigger("click");
        });
        $("body").on("change", "input.hidden", function(ev){
            var _val = $(this).val();
            var _item = '<li>';
            _item += '<span>'+_val+'</span>';
            _item += '<a href="javascript:void(0)"><i class="el-icon-close"></i></a>';
            _item += '</li>';
            $(".file-result-list").append(_item);
        });
        $("body").on("click", ".file-result-list a", function(ev){
            $(this).parents("li").eq(0).remove();
        });

        $("body").on("click", ".btn-mob-filter", function(ev){
            $(".side-item-wrap").addClass("on");
            $(".wrapper").addClass("filter");
        });
        $("body").on("click", ".btn-filter-close", function(ev){
            $(".side-item-wrap").removeClass("on");
            $(".wrapper").removeClass("filter");
        });
        $("body").on("click", ".tabs-slide-wrap .swiper-container .swiper-slide a", function(ev){
            $(".tabs-slide-wrap .swiper-container .swiper-slide a").removeClass("on");
            $(this).addClass("on");
        });

        $("body").on("click", ".btn-allmenu", function(ev){
            common.popOpen(".sitemap-item-wrap");
        });
        $("body").on("click", ".btn-sitemap-close", function(ev){
            common.popClose(".sitemap-item-wrap");
        });

        $("body").on("click", ".btn-mob-gnb-close", function(){
            $("header .gnb-list>li").removeClass("on");
        });



    },
    popOpen:function(o){
        $(o).addClass("ing");
        setTimeout(function(){
            $(o).addClass("on");
        },200);
    },
    popClose:function(o){
        $(o).removeClass("on");
        setTimeout(function(){
            $(o).removeClass("ing");
        },500)
    }
}




