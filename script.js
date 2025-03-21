$(document).ready(function () {
    $("#menu-toggle").click(function (event) {
        event.preventDefault();
        $("#sidebar").css("right", "0px");
    });

    $("#close-sidebar").click(function (event) {
        event.preventDefault();
        $("#sidebar").css("right", "-300px");
    });
});
