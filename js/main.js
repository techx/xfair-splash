$(document).ready(function(){
    var cookie = getCookie('animate');
    var click = false;
    var size = '-80px';
    var offset = '-8vh';
    if ($(window).width() <= 736) {
        size = '-400px';
        offset = '-12vh';
    }

    if (cookie !== 'false') {
        document.cookie="animate=false";
        $('.floor').delay('4500').fadeOut('500');
        $('.bodyShadow').delay('4500').fadeOut('500');
        $('.logo').delay('5000').fadeIn('500');
        $('#show').delay('5500').fadeIn('500');
        $('#info').delay('5500').fadeIn('500');
        
        setTimeout(function() {
            click = true;
            $('.camera').css({
                '-webkit-animation': 'none',
                '-moz-animation': 'none',
                'animation': 'none',
                '-webkit-transform': 'translate3d(20px, ' + offset + ', ' + size + ')',
                '-moz-transform': 'translate3d(20px, ' + offset + ', ' + size + ')',
                'transform': 'translate3d(20px, ' + offset + ', ' + size + ')'
            });
            $('.airplane').css({
                'cursor': 'pointer'
            });
        }, 6000);
    } else {
        click = true;
        $('.camera').css({
            '-webkit-animation': 'none',
            '-moz-animation': 'none',
            'animation': 'none',
            '-webkit-transform': 'translate3d(20px, ' + offset + ', ' + size + ')',
            '-moz-transform': 'translate3d(20px, ' + offset + ', ' + size + ')',
            'transform': 'translate3d(20px, ' + offset + ', ' + size + ')'
        });
        $('.airplane').css({
            'cursor': 'pointer'
        });
        $('.floor').hide();
        $('.bodyShadow').hide();
        $('.logo').show();
        $('#show').show();
        $('#info').show();
    }

    var cameraClass = 'angle0';
    $('.airplane').click(function() {
        if (click) {
            click = false;
            $('.airplane').css({
                'cursor': ''
            });
            $('#show').fadeOut('500');
            $('#info').fadeOut('500');
            $('.logo').fadeOut('500');
            $('.bodyShadow').fadeIn('500');
            $('.floor').fadeIn('500');

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
            }, 1000);

            $('.floor').delay('5000').fadeOut('500');
            $('.bodyShadow').delay('5000').fadeOut('500');
            $('.logo').delay('5500').fadeIn('500');
            $('#show').delay('5500').fadeIn('500');
            $('#info').delay('5500').fadeIn('500');

            setTimeout(function() {
                click = true;
                $('.airplane').css({
                    'cursor': 'pointer'
                });
            }, 6000);
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
