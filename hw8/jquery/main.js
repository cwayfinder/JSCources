$(function () {
    $('.tab-head').click(function () {
        var target = $(this).next(".tab-body");
        target.animate({ minHeight: "220px" }, 200, function () {});
        $('.tab-body').not(target).animate({ minHeight: "0" }, 200, function () {});
    });
});
