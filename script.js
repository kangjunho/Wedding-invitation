$(document).ready(function () {
    $("#menu-toggle").click(function (event) {
        event.preventDefault();
        $("#sidebar").css("right", "0px");
    });

    $("#close-sidebar").click(function (event) {
        event.preventDefault();
        $("#sidebar").css("right", "-300px");
    });

    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 800);
    }
});

function openTab(tabName) {
    $(".info-section").hide();
    $("#" + tabName).show();
    $(".tab-button").removeClass("active");
    $("button[onclick='openTab(\"" + tabName + "\")']").addClass("active");
}
