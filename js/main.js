$(document).ready(function(){
    var cookie = getCookie('animate');
    if (cookie !== 'false') {
        document.cookie="animate=false"
        $('.floor').delay('8500').fadeOut('2000');
        $('.bodyShadow').delay('8500').fadeOut('2000');
        $('.logo').delay('9000').fadeIn('1000');
        $('.splash').delay('10000').fadeIn('1000');
    } else {
        $('.camera').css({
            '-webkit-animation': 'none',
            '-moz-animation': 'none',
            'animation': 'none',
            '-webkit-transform': 'translate3d(0px, 0px, -80px)',
            '-moz-transform': 'translate3d(0px, 0px, -80px)',
            'transform': 'translate3d(0px, 0px, -80px)'
        });
        $('.floor').hide();
        $('.bodyShadow').hide();
        $('.logo').show();
        $('.splash').show();
    }

    $('.airplane').click(function() {
        $('.splash').fadeOut('1000');
        $('.logo').fadeOut('1000');
        $('.bodyShadow').fadeIn('1000');
        $('.floor').fadeIn('1000');

        setTimeout(function() {
            $('#camera').removeClass('camera')
        });
        $('.camera').delay('1000').css({
            '-webkit-animation': '',
            '-moz-animation': '',
            'animation': '',
            '-webkit-transform': '',
            '-moz-transform': '',
            'transform': ''
        });
        $('#camera').delay('1000').addClass('newcamera');

        $('.floor').delay('8500').fadeOut('2000');
        $('.bodyShadow').delay('8500').fadeOut('2000');
        $('.logo').delay('9000').fadeIn('1000');
        $('.splash').delay('10000').fadeIn('1000');
    })
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
