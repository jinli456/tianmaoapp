$(function () {
    var caidan=$('.caidan');
    var mask=$('.mask');

    caidan.on('touchstart',function(){
        $('.tab').removeClass('leave').addClass('throu');
        $('.tab').css('display','block');
        mask.css('display','block');
        $('body').css('overflow','hidden')
        mask.addClass('throu');
    })
    mask.on('touchstart',function(){
        $('body').css('overflow','')
        $('.tab').removeClass('throu').addClass('leave');
        mask.delay(700).queue(function(){
            $(this).css('display','none').removeClass('throu').dequeue()
        })
    })
    $('.tab').on('touchstart',function(e){
        left=e.originalEvent.changedTouches[0].pageX;
    })
    $('.tab').on('touchend',function(e){
        var n=e.originalEvent.changedTouches[0].pageX;
        if(n<left&&left-n>=50){
            $('.tab').removeClass('throu').addClass('leave');
            mask.delay(800).queue(function(){
                $(this).removeClass('throu').dequeue()
            })
        }
    })


    //最上边的搜索框
    var flag=true;
    /*window.onscroll=function(){*/
    window.addEventListener("scroll",function(){
        var stop=document.documentElement.scrollTop||document.body.scrollTop;
        if(stop>=270){
            if(flag){
                flag=false;
                $('.header-content').css('background','#f42c2e')
                $('.search').css('background','#ffe9eb')
            }

        }else{
            if(!flag){
                flag=true;
                $('.header-content').css('background','linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0))')
                $('.search').css('background','#e5e5e5')
            }

        }
    })

    $(function () {
        var mySwiper = new Swiper ('#banner', {
            direction: 'horizontal',
            pagination:'swiper-pagination',
            autoplay: 3000,
            paginationClickable: true,
            slidePreview:2,

        });
        var swiper = new Swiper('.adsRight .swiper-container', {
            autoplay: 3000,
            direction: 'vertical'
        });
        var sww=new Swiper('#title-img',{
            direction:'horizontal',
            pagination:'.swiper-pagination',
            slidePreView:2,
            initialSlide:0,
            slidesPerView:2.1,


        });
    })



})