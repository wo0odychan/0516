$(function () {

    const model = ['sonata', 'kona', 'ioniq'];


    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _tihs = $(this).find('.slick-current');
        _tihs.addClass('on').siblings().removeClass('on');
        // 숫자 나오게 하기
        $('#main_visual .num').text(c ? c + 1 : 1)
        ///다음 슬라이드 물건 이름 나오게 하기
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1])
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });
    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    })
})

