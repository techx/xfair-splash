$(document).ready(function(){
    var cookie = getCookie('animate');
    var click = false;
    if (cookie !== 'false') {
        document.cookie="animate=false";
        $('.floor').delay('6500').fadeOut('1000');
        $('.bodyShadow').delay('6500').fadeOut('1000');
        $('.logo').delay('7000').fadeIn('1000');
        $('.splash').delay('8000').fadeIn('1000');
        
        setTimeout(function() {
            click = true;
            $('.camera').css({
                '-webkit-animation': 'none',
                '-moz-animation': 'none',
                'animation': 'none',
                '-webkit-transform': 'translate3d(20px, 0px, -80px)',
                '-moz-transform': 'translate3d(20px, 0px, -80px)',
                'transform': 'translate3d(20px, 0px, -80px)'
            });
            $('.airplane').css({
                'cursor': 'pointer'
            });
        }, 8000);
    } else {
        click = true;
        $('.camera').css({
            '-webkit-animation': 'none',
            '-moz-animation': 'none',
            'animation': 'none',
            '-webkit-transform': 'translate3d(20px, 0px, -80px)',
            '-moz-transform': 'translate3d(20px, 0px, -80px)',
            'transform': 'translate3d(20px, 0px, -80px)'
        });
        $('.airplane').css({
            'cursor': 'pointer'
        });
        $('.floor').hide();
        $('.bodyShadow').hide();
        $('.logo').show();
        $('.splash').show();
    }

    var cameraClass = 'angle0';
    $('.airplane').click(function() {
        if (click) {
            click = false;
            $('.airplane').css({
                'cursor': ''
            });
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
                    'animation': ''
                });
                $('.camera').addClass(newClass);
                cameraClass = newClass;
            }, 1500);

            $('.floor').delay('7000').fadeOut('1000');
            $('.bodyShadow').delay('7000').fadeOut('1000');
            $('.logo').delay('8000').fadeIn('1000');
            $('.splash').delay('8000').fadeIn('1000');

            setTimeout(function() {
                click = true;
                $('.airplane').css({
                    'cursor': 'pointer'
                });
            }, 8000);
        }
    });
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
