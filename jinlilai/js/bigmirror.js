$(window).load(function () {
            var $box1=$('#box1');
            var $smaimg=$('#box1 img');
            var $box2=$('#box2');
            var $bigimg=$('#box2 img');
            var $move=$('#box1 .move');
            $('#box1').mousemove(function (e) {
                $('#box1 .move').css('display','block');
                $('#box2').css('display','block');
//               console.log(e.pageX+" "+e.pageY)
//               console.log($box1.offset().top)
                var x=e.pageX-$box1.offset().left-$move.width()/2;
                var y=e.pageY-$box1.offset().top-$move.height()/2;
//              console.log(x+"===="+y);
                var maxX=$box1.width()-$move.width();
                var maxY=$box1.height()-$move.height();
                var bili=$box2.width()/$move.width();
                x=x>0?x:0;
                x=x<maxX?x:maxX;
                y=y>0?y:0;
                y=y<maxY?y:maxY;
//              console.log(bili)
                $('#box1 .move').css({
                    "left":x+"px",
                    "top":y+"px"
                })
//              console.log( $('#box1 .move').css('top'))
                $('#box2 img').css({
                    "marginTop":-bili*y+"px",
                    "marginLeft":-bili*x+"px"
                })
            })
            $('#box1').mouseout(function () {
                    $('#box1 .move').css('display','none');
                    $('#box2').css('display','none');
            })
})