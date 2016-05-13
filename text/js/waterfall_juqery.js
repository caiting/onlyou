/**
 * Created by tt on 16/5/13.
 */
$(window).on('load',function(){
    waterfall();
    var data = {
        data: [
            {'src': '1.jpg'},
            {'src': '2.jpg'},
            {'src': '3.jpeg'},
            {'src': '4.jpeg'},
            {'src':'5.jpeg'},
            {'src':'11.jpg'},
            {'src':'22.jpg'}
        ]
    };
    $(window).on('scroll',function(){
        if(checkscroll()){
            $.each(data.data,function(key,val){
                var obox = $('<div>').addClass('box').appendTo($('#main'));
                var pic = $('<div>').addClass('pic').appendTo($(obox));
               var img= $('<img>').attr('src','img/'+$(val).attr('src')).appendTo($(pic))
            });
            waterfall();
        }
    })
});
function waterfall(){
    var $box = $('#main>.box');
    var col = $('.box').outerWidth();
    var colist = Math.floor($(window).width()/col);
    $('#main').css({'width':colist*col,'margin':'0 auto'});
    var height = [];
    $box.each(function(index,val){
        var h= $box.eq(index).outerHeight();
        if(index<colist){
            height[index] = h;
        }else{
            var minh = Math.min.apply(null,height);
            var minHei = $.inArray(minh,height);
            $(val).css({
                'position':'absolute',
                'top':minh+'px',
                'left':col*minHei+'px'
            });
            height[minHei]+=$box.eq(index).outerHeight();
        }
    });
    console.log(height);
};
function checkscroll(){
    var last = $('#main>div').last();
    var lastHe = last.offset().top+Math.floor(last.outerHeight()/2);
    var scroll = $(window).scrollTop();
    var document = $(window).height();
    return (lastHe<scroll+document)?true:false;

}