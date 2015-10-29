
$(window).load(function() {
    $('.flexslider').flexslider();
});

$(document).ready(function(){

    $('#main .animated').animate({
        top: "+=20",
        opacity: 1
    }, 1500);

    $(function(){
        var windowWidth = $(window).width();
        console.log(windowWidth);
        if (windowWidth > 760) {
                var s = skrollr.init({
                forceHeight: false,
                constants: {
                    foobar: function() {
                        return $(window).height() - 80;
                    }
                }
            });
            skrollr.menu.init(s, {
                animate: true,
                easing: 'sqrt'
            });
        } else {
            $('section.about .container').css("position", "relative");
            $('section.about .container .wrapper #aboutcontent').css("width", "80vw");
            $('section.main .container').css("position", "absolute");
            $('section.main .triangle-contrast').css("position", "absolute");
        }
    });

    $('body').css('height','auto');

    $('#btn-student').click(function(){
        var height = $('#student').offset().top;
        window.scrollTo(height, {axis:'y'});
    });
});
