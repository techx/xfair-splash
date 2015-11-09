$(document).ready(function(){
    var cookie = getCookie('animate');
    if (cookie !== 'false') {
        document.cookie="animate=false"
        animate();
    } else {
        animate()
        // $('.camera').css({
        //     'animation': 'none',
        //     '-webkit-transform': 'translate3d(0px, 0px, -80px)',
        //     '-moz-transform': 'translate3d(0px, 0px, -80px)',
        //     'transform': 'translate3d(0px, 0px, -80px)'
        // });
        // $('.floor').hide();
        // $('.bodyShadow').hide();
        // $('.logo').show();
        // $('.splash').show();
    }
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

function animate() {
    $('.floor').show();
    $('.bodyShadow').show();
    $('.logo').hide();
    $('.splash').hide();

    $('.floor').delay('8500').fadeOut('2000');
    $('.bodyShadow').delay('8500').fadeOut('2000');
    $('.logo').delay('9000').fadeIn('1000');
    $('.splash').delay('10000').fadeIn('1000');
    // $('.airplane').delay('9000').css({'z-index': '1'});
}