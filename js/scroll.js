function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();
        //console.log((elementTop + ' ' + pageBottom) + ' & ' + (elementBottom >= pageTop))

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop + 250 <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();

$(window).scroll(function () {
    // selectors
    var $window = $(window),
        $1 = $('#navLink1'),
        $2 = $('#navLink2'),
        $3 = $('#navLink3'),
        $A = $('#About'),
        $P = $('#Projects'),
        $C = $('#Contact'),
        $F = $('#Footer');

    var isElementInView1 = Utils.isElementInView($('#About'), false);
    var isElementInView2 = Utils.isElementInView($('#Projects'), false);
    var isElementInView3 = Utils.isElementInView($('#Contact'), false);
    var isElementInView4 = Utils.isElementInView($('#Footer'), false);

    if (isElementInView1 || isElementInView2 || isElementInView3 || isElementInView4) {
        // Change colors to normal so remove .edit class from these selectors:
        $A.addClass(' edit');
        $P.addClass(' edit');
        $C.addClass(' edit');
        $F.addClass(' edit');
        $1.addClass(' editNavDif');
        $2.addClass(' editNavDif');
        $3.addClass(' editNavDif');
        $1.removeClass(' editNavReg');
        $2.removeClass(' editNavReg');
        $3.removeClass(' editNavReg');
        document.querySelector("body > div.root > nav > a > img").src = "../img/M-2invert.png";
        //console.log('in view');
    } else {
        $1.addClass(' editNavReg');
        $2.addClass(' editNavReg');
        $3.addClass(' editNavReg');
        $1.removeClass(' editNavDif');
        $2.removeClass(' editNavDif');
        $3.removeClass(' editNavDif');
        $A.removeClass(' edit');
        $P.removeClass(' edit');
        $C.removeClass(' edit');
        $F.removeClass(' edit');
        document.querySelector("body > div.root > nav > a > img").src = "../img/M-2.png";
        //console.log('out of view');
    }

}).scroll();
