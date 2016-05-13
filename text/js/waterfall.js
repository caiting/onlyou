window.onload = function(){
    waterfall('main','box');
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
    window.onscroll = function(){
        if(checkscroll()){
            var main = document.getElementById('main');
            for(var i=0; i<data.data.length;i++){
                var box = document.createElement('div');
                box.className ='box';
                main.appendChild(box);
                var pic = document.createElement('div');
                pic.className = 'pic';
                box.appendChild(pic);
                var img = document.createElement('img');
                img.src = 'img/'+data.data[i].src;
                pic.appendChild(img);
            }
            waterfall('main','box');
        }
    }
};
//检测是否具备滚动加载的条件

function waterfall(parent,box){
    //取main的id
    var oparent = document.getElementById(parent);
    //获取id为main的下面的div的class为box的所有元素
    var boxs = getbyclass(oparent,box);
    //每个box的宽度
    var boxw=boxs[0].offsetWidth;
    //获取列数
    var clos = Math.floor(document.documentElement.clientWidth/boxw);
    //设置main的宽度
    oparent.style.cssText = 'width:'+clos*boxw+'px;margin:0 auto';
    var harr = [];
    for(var i = 0;i<boxs.length;i++){
        if(i<clos){
            harr.push(boxs[i].offsetHeight);
        }else{
            var minh = Math.min.apply(null,harr);
            var index=contro_tl(harr,minh);
            boxs[i].style.position='absolute';
            boxs[i].style.top=minh+'px';
            //boxs[i].style.left=index*boxw+'px';
            boxs[i].style.left = boxs[index].offsetLeft+'px';
            harr[index] += boxs[i].offsetHeight;
        }
    }
    //console.log(harr);



};
function getbyclass(parent,classname){
    var arr = new Array(),
        oelement = parent.getElementsByTagName('*');
    for(var i = 0;i<oelement.length;i++){
        if(oelement[i].className==classname){
            arr.push(oelement[i]);
        }
    }
    return arr;

};
function contro_tl(arr,val){
    for(var i in arr){
        if(arr[i]==val){
            return i;
        }
    }
}
function checkscroll(){
    var oparent = document.getElementById('main');
    var boxs = getbyclass(oparent,'box');
    var oboxl =boxs[boxs.length-1].offsetTop+Math.floor(boxs[boxs.length-1].offsetHeight/2);
    var scrollTop = document.body.scrollTop ||document.documentElement.scrollTop;
    var height= document.body.clientHeight || document.documentElement.clientHeight;
    return (oboxl<scrollTop+height) ? true:false;
}