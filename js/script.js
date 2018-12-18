// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // mengambil isi href
    var tujuan = $(this).attr('href');

    // mengambil element href yg bersangkutan
    var elementTujuan = $(tujuan);

    // memindahkan scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo')

    // console.log($('html, body').scrollTop());


    e.preventDefault();

});