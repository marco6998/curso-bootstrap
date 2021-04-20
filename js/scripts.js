$(document).ready(function () {
    $('#myCarousel').carousel({ interval: 5000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }

    });
});

$(document).ready(function () {
    $('#reserveButton').click(function () {
        $('#reserveModal').modal('show');
    });
});

$(document).ready(function () {
    $('#loginButton').click(function () {
        $('#loginModal').modal('show');
    });
});