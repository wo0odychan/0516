$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: '08YG2P0DJcQ',
        containment: '#main_visual',
        showControls: false,
        playOnlyIfVisible: true,
        autoPlay: true,
    });

    $('#convideo').YTPlayer({
        videoURL: 'https://youtu.be/pZaktElDFZY',
        containment: '#bgm',
        showControls: false,
        playOnlyIfVisible: true,
        autoPlay: true,
    });
    $('#convideo2').YTPlayer({
        videoURL: 'https://youtu.be/pZaktElDFZY',
        containment: '#bgm2',
        showControls: false,
        playOnlyIfVisible: true,
        autoPlay: true,
    });
    $('#convideo3').YTPlayer({
        videoURL: 'https://youtu.be/pZaktElDFZY',
        containment: '#bgm3',
        showControls: false,
        playOnlyIfVisible: true,
        autoPlay: true,
    });

    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();

    });

})