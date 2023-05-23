$(function () {
    $(window).on('scroll', function () {
        //변수를 만들어 스크롤한 양을 담음.//x
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')

        }
    });
})