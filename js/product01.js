$(function () {
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        // 슬라이드 사진 n개 넣기//
        slidesToShow: 5,
        // 반응형으로 사이트 화면을 줄였을 때 슬라이드 사진 하나만 돌아가기//
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }]
    });
    // 슬라이드 화살표//
    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });
})