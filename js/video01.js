$(function () {
    // 동영상 버튼 만들어서 멈추고 재생시키기
    let btn = true;
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) { $('.main_visual video').trigger('pause'); } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);
    });


    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause')
        // 동영상 멈추게 하기
    });
    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play')
        // 동영상 재생하게 하기
    });



})