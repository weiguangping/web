$(function () {
    $('a').css('outline','none');
    $('a').css('border','0');
    // 导航下拉
    $('.nav li').hover(function () {
        $(this).find('dl').stop().slideDown(300);
        if($(this).index()!=0)
        $(this).find('a').eq(0).css({"background":"url('images/common/line2.jpg')"});
        else
        $(this).find('a').eq(0).css({"background":"url('images/common/line1.jpg')"});
    },function () {
        $(this).find('dl').stop().slideUp(300);
        $(this).find('a').eq(0).css({"background":""});
    })
    //首页banner轮播
    $('.banner .bd').css('left','0');
    $('.center .lun .bd').css('top','0');
    var winW=$(document).width();
    var len=$('.banner .bd li').length;
    var lun=null;
    var index=0;
    var bool=true;
    for(var i=0;i<len;i++)
    {
        $('.banner .bd li').eq(i).css('left',i*winW+'px');
    }
    $('.banner .hd li').click(function () {
        clearInterval(lun);
        var a=$(this).index();
        if(bool){
            bool=false;
            $(this).parent().children().removeClass('on').eq(a).addClass('on');
            $('.bd').stop(false,true).animate({left:-a*winW+'px'},700,function () {
                bool=true;
                move();
            });
            return index=a;
        }
    })
    move();
    function move(){
        lun=setInterval(function () {
            index++;
            if(index>=len)index=0;
            $('.banner .hd li').eq(index).addClass('on').siblings().removeClass('on');
            $('.banner .bd').stop(false,true).animate({left:-index*winW+'px'},700);
        },2000)
    }
    // 首页新闻效果
    $('.index_news .main li .box').hover(function () {
        $(this).find('div').css('background',' #3c65b7');
        $(this).find('h4 a,a span,p a').css('color',' white');
    },function () {
        $(this).find('div').css('background',' white');
        $(this).find('h4 a,a span').css('color',' #333333');
        $(this).find('p a').css('color',' #666666');
    })
    // 首页产品效果
    $('.index_product .pic li').hover(function () {
        $(this).find('.box div').stop().fadeToggle(1000);
    })
    // 产品中心遮罩
    $('.center .list li').hover(function () {
        $(this).find('.box div').stop().fadeToggle(1000);
    })
    // 产品中心遮罩
    $('.center .right').hover(function () {
        $(this).find('.zhezhao').stop().fadeToggle(1000);
    })

    // 设置产品中心轮播图位置
    var len2=$('.center .lun .bd li').length;
    var timer=null;
    var c=0;
    var bool2=true;
    $('.lun .hd li').click(function () {
        clearInterval(timer);
        var b=$(this).index();
        if(bool2){
            bool2=false;
            $(this).parent().children().removeClass('on').eq(b).addClass('on');
            $('.bd').stop(false,true).animate({top:-b*240+'px'},700,function () {
                bool2=true;
                move2();
            });
            return c=b;
        }
    })
    for(var i=0;i<len2;i++)
    {
        $('.center .lun .bd li').eq(i).css('top',i*240+'px');
    }
    // 产品中心轮播
    move2();
    function move2(){
        timer=setInterval(function () {
            c++;
            if(c>=len2)c=0;
            $('.lun .hd li').eq(c).addClass('on').siblings().removeClass('on');
            $('.center .lun .bd').stop(false,true).animate({top:-c*240+'px'},700);
        },2000)
    }
    // 语言按钮点击 
    $('.language  .chinese').click(function () {
        $(this).css('border','1px solid #3366cc')
        $(this).siblings().css('border','none')
    })
    $('.language  .english').click(function () {
        $(this).css('border','1px solid #3366cc')
        $(this).siblings().css('border','none')
    })

    $('.index_product .main .title a').click(function () {
        $(this).siblings().css('background','none');
        var index=$(this).index();
        $(this).css("background","url('images/index/line"+parseInt(index+4)+".jpg')");
    })
    $('.subnav li a').click(function () {
        $(this).parent().siblings().children().removeClass('cur');
        $(this).addClass('cur');
    })

    topdowmbtn('.pro_btn2');
    topdowmbtn('.news_btn2');
    //上下页
    function topdowmbtn(b) {
        $(b+' .prev').mousedown(function () {
            $(this).css({
                "background": "#547ccb",
                "color": "white"
            });
        })
        $(b+' .prev').mouseup(function () {
            $(this).css({
                "background": "white",
                "color": "#666666"
            });
        })
    }
    btnclick('.news_btn1');
    btnclick('.pro_btn1');
    //翻页按钮
    function btnclick(w) {
        var lena=$(w+' a').length-3;
        var on=0;
        //alert(on)
        $(w+' a').click(function () {
            on=$(w+' .on').index();
            var index=$(this).index();
            $(w+' .prev').mousedown(function () {
                if(on!=1)
                    $(this).css('background','#1934bc')
            })
            $(w+' .prev').mouseup(function () {
                $(this).css('background','#475fda')
            })
            $(w+' .next').mousedown(function () {
                if(on!=lena)
                    $(this).css('background','#1934bc')
            })
            $(w+' .next').mouseup(function () {
                $(this).css('background','#475fda')
            })

            if($(this).text()!='上一页'&&$(this).text()!='下一页'&&$(this).text()!='...')
            {
                on=index;
                $(this).addClass('on').siblings().removeClass('on');
            }
            if ($(this).text()=='上一页')
            {
                if(on<1)on=1;
                if(on>1){
                    $(w+' a').eq(on-1).addClass('on').siblings().removeClass('on');
                    on--;
                }
            }
            if ($(this).text()=='下一页')
            {
                if(on>lena)on=lena;
                if(on<lena){
                    $(w+' a').eq(on+1).addClass('on').siblings().removeClass('on');
                    on++;
                }
            }
        })

    }

    /*$('.index_product .pic li').eq(4).css({
        "position":"absolute",
        "top":310,
        "left":312
    })
    $('.index_product .pic li').eq(5).css({
        "position":"absolute",
        "top":350,
        "left":624
    })
    $('.index_product .pic li').eq(6).css({
        "position":"absolute",
        "top":410,
        "left":0
    })
    $('.index_product .pic li').eq(7).css({
        "position":"absolute",
        "top":440,
        "left":936
    })
    */
/*
    if (window.PIE) {
        $('.hd li').each(function() {
            PIE.attach(this);
        });
    }
*/


    
})