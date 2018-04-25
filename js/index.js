//小工具
window.onscroll = function(){
    var distance = document.documentElement.scrollTop || document.body.scrollTop; //距离页面顶部的距离
    if( distance >= 150) { //当距离顶部超过300px时，显示图片
        if(distance >1050){
            document.getElementById('tool').style.position="absolute";
            document.getElementById('tool').style.bottom="135px"
        }else {
            document.getElementById('tool').style.position="fixed";
            document.getElementById('tool').style.bottom=""
            document.getElementById('tool-backtop').style.display ="block";
        }
    } else { //距离顶部小于300px，隐藏图片
        document.getElementById('tool').style.position="fixed";
        document.getElementById('tool').style.bottom=""
        document.getElementById('tool-backtop').style.display = "none";
    }

    var toTop = document.getElementById("tool-backtop"); //获取图片所在的div

    var playBgm = document.getElementById("musicfx");   //获取音乐
    var bgmpbtn = document.getElementById("bgm");
    var Bgms = 0;  //状态量


    toTop.onclick = function(){ //点击图片时触发的点击事件
        document.documentElement.scrollTop = document.body.scrollTop = 0; //页面移动到顶部
    }

    bgmpbtn.onclick = function () {     //歌曲暂停、播放
        if(Bgms == 0){
            bgmpbtn.style.backgroundPositionX= 0 + "px";
            bgmpbtn.style.backgroundPositionY= -42 + "px";
            playBgm.pause();
            Bgms = 1;
        }else if(Bgms == 1){
            bgmpbtn.style.backgroundPositionX= 0 + "px";
            bgmpbtn.style.backgroundPositionY= 1 +"px";
            playBgm.play();
            Bgms = 0;
        }
    }
}

//壁纸轮播
$(function() {
    var bannerSlider = new Slider($('#turnshow'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        activeControllerCls: 'active'
    });
    $('#turnshow .flex-prev').click(function() {
        bannerSlider.prev()
    });
    $('#turnshow .flex-next').click(function() {
        bannerSlider.next()
    });
})
//公告、留言滚动
function timer(opj){
    $(opj).find('ul').animate({
        marginTop : "-38px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}
function commentlist(apple,bear) {
    //动画形式展现第一个li
    $(apple).animate({ top: 0 + "px" }, 1500, function () {
        //动画完成时
        $(apple).find("li:last").prependTo($(apple));//将ul的最后一个剪切li插入为ul的第一个li
        bear = $(apple).find("li:first").height();//刚插入的li的高度
        $(apple).css({ top: "-" + bear - 10 + "px" });//利用css的top属性将刚插入的li隐藏在列表上方
    });
}
$(function(){
    var notice_num = $('.notice_active').find('li').length;
    if(notice_num > 1){
        var time=setInterval('timer(".notice_active")',5000);
        $('.notice_active').mousemove(function(){
            clearInterval(time);
        }).mouseout(function(){
            time = setInterval('timer(".notice_active")',5000);
        });
    }
});
$(function(){
    var comment = $(".comment_slide").find(".comment_active_ch:first").height();//第一个li的高度
    $(".comment_slide").css({ top: "-" + comment - 10 + "px" });//利用css的top属性将第一个li隐藏在列表上方

    var vistor_comment=setInterval('commentlist(".comment_slide","comment")',5000);
    $('.comment_slide').mousemove(function(){
        clearInterval(vistor_comment);
    }).mouseout(function(){
        vistor_comment = setInterval('commentlist(".comment_slide","comment")',5000);
    });
});
