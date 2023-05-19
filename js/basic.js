$(function () {

    // 누르면 올라가게 하기//
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })

}) 