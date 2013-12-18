$(function () {
    // accordion
    $('.tab-head').click(function () {
        var target = $(this).next(".tab-body"); // find section which should be expanded
        target.stop().animate({ minHeight: "220px" }, 200, function () {});    // expand current section
        $('.tab-body').not(target).stop().animate({ minHeight: "0" }, 200, function () {});    // collapse other sections
    });

    // chameleon
    var chameleon = $('.chameleon');
    chameleon.hover( function() {
        $(this).stop().animate({ backgroundColor: "rgb(115, 134, 120)" }, 500, function () {});
    }, function() {
        $(this).stop().animate({ backgroundColor: "rgb(0, 255, 71)" }, 500, function () {});
    });

    chameleon.mousedown( function() {
        $(this).stop().animate({ backgroundColor: "rgb(160, 255, 186)" }, 500, function () {});
    });
    chameleon.mouseup( function() {
        $(this).stop().animate({ backgroundColor: "rgb(115, 134, 120)" }, 500, function () {});
    });

    //range
    var position = $('.range').position();
    var bounds = [position.left, position.top - 3, 200, position.top - 3];
    var thumb = $('.range .thumb');

    thumb.draggable({ containment: bounds });

    thumb.mousedown( function() {
        $(this).stop().animate({ backgroundColor: "red" }, 800, function () {});
        $('.shutter').show();
    });
    $('body').mouseup( function() {
        thumb.stop().animate({ backgroundColor: "#666" }, 800, function () {});
        $('.shutter').hide();
    });
});
