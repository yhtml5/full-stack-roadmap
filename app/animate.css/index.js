$(document).ready(function () {
    oAnimate = {
        bouncings: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
        fadings: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp','fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig'],
        flippers: ['flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
        lightspeeds: ['lightSpeedIn', 'lightSpeedOut'],
        rotatings: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight'],
        slidings: ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
        specials: ['hinge', 'rollIn', 'rollOut'],
        zooms: ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp']
    }
    var animateDemo = $('[y-animate="demo"]')
    var animateInit = "hinge"

    function appendAnimateBtn(slector, array) {
        var i = 0
        var x = ""
        for (i = 0; i < array.length; i++) {
            x += ' <button type="button" class="btn btn-info" value="' + array[i] + '">' + array[i] + '</button>'
        }
        console.log('x2:', x)
        $(slector).append(x);
    }

    function doAnimate(x) {
        $('[y-animate="demo"]').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    appendAnimateBtn('[y-animate="btnGroupBouncings"]', oAnimate.bouncings)
    appendAnimateBtn('[y-animate="btnGroupFadings"]', oAnimate.fadings)
    appendAnimateBtn('[y-animate="btnGroupFlippers"]', oAnimate.flippers)
    appendAnimateBtn('[y-animate="btnGroupLightspeeds"]', oAnimate.lightspeeds)
    appendAnimateBtn('[y-animate="btnGroupRotatings"]', oAnimate.rotatings)
    appendAnimateBtn('[y-animate="btnGroupSlidings"]', oAnimate.slidings)
    appendAnimateBtn('[y-animate="btnGroupSpecials"]', oAnimate.specials)
    appendAnimateBtn('[y-animate="btnGroupZooms"]', oAnimate.zooms)

    $('[y-animate="btnGroup"] button').on('click', function () {
        var a = $(this).val();
        doAnimate(a);
        animateInit = a
        console.log('animateInit: ', a);
    });

    $('[y-btn="init"]').on('click', function () {
        animateDemo.removeClass()
    });
    $('[y-btn="infinite"]').on('click', function () {
        animateDemo.addClass('animated infinite ' + animateInit)
    })

});
