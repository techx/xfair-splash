$(document).ready(function(){
    var cookie = getCookie('animate');
    if (cookie !== 'false') {
        document.cookie="animate=false";
        $('.floor').delay('8500').fadeOut('2000');
        $('.bodyShadow').delay('8500').fadeOut('2000');
        $('.logo').delay('9000').fadeIn('1000');
        $('.splash').delay('10000').fadeIn('1000');
        
        setTimeout(function() {
            $('.camera').css({
                '-webkit-animation': 'none',
                '-moz-animation': 'none',
                'animation': 'none',
                '-webkit-transform': 'translate3d(0px, 0px, -80px)',
                '-moz-transform': 'translate3d(0px, 0px, -80px)',
                'transform': 'translate3d(0px, 0px, -80px)'
            });
        }, 10000);
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

    var cameraClass = 'angle0';
    $('.airplane').click(function() {
        $('.splash').fadeOut('500');
        $('.logo').fadeOut('500');
        $('.bodyShadow').delay('500').fadeIn('500');
        $('.floor').delay('500').fadeIn('500');

        if (Math.random() >= .5) {
            newClass = 'angle1';
        } else {
            newClass = 'angle2';
        }
        
        $('.camera').removeClass(cameraClass);
        setTimeout(function() {
            $('.camera').css({
                '-webkit-animation': '',
                '-moz-animation': '',
                'animation': '',
            });
            $('.camera').addClass(newClass);
            cameraClass = newClass;
        }, 1500);

        $('.floor').delay('9000').fadeOut('1000');
        $('.bodyShadow').delay('9000').fadeOut('1000');
        $('.logo').delay('10000').fadeIn('1000');
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
