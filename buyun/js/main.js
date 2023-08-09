$( window ).on( "load", function(){
    SwiperPic();
    $(window).resize(function(){
        SwiperPic();
    });
})

function SwiperPic(){
    var bodyW = $("body").width();
    var View = 0;
    var View2 = 0;
    if( bodyW > 1200 ){
        View = 3;
        View2 = 5;
        View3 = 4;
        View4 = 6;
    }else if( bodyW > 992 && bodyW <=1200 ){
        View = 3;
        View2 = 4;
        View3 = 3;
        View4 = 5;
    }else if( bodyW > 768 && bodyW <=992 ){
        View = 2;
        View2 = 3;
        View3 = 2;
        View4 = 4;
    }else if( bodyW <= 760 ){
        View = 1;
        View2 = 1;
        View3 = 1;
        View4 = 2;
    }
    
    var index_about = new Swiper('.index_product .list', {
        slidesPerView: View3,
        autoplay: 3000,
        paginationClickable: true,
        nextButton: '.index_product .nextZ',
        prevButton: '.index_product .prevZ',
    });
   
   
}