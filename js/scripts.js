var activeTab = "#"+$(".active[id^='tab']").attr("id");
setNavsColor(activeTab);

function setNavsColor(target) {
    $(".jumbotron .nav-tabs a").each(function(indx, element) {
        if ($(element).attr("href") == target) {
            $(element).off("mouseenter mouseleave focusin focusout").css("color", "#000");
        } else {
            $(element).css("color", "#fff").hover(function() {
                $(this).css("color", "#000");
            }, function() {
                $(this).css("color", "#fff");
            }).focusin(function() {
                $(this).css("color", "#000");
            }).focusout(function() {
                $(this).css("color", "#fff");
            });
        }
    });
}
// Обработчик переключения вкладки
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    var target = $(e.target).attr("href");
    setNavsColor(target);
    if (target == "#tab1") {
        $(".jumbotron .name").text("Алексей Звягин");
        $(".jumbotron .profession").text("Разработчик программного обеспечения");
        if (("#tab1" != activeTab) && ($("#tab1 div.row").size() === 0)) {
            $('<p class="text-center"><span class="text-center fa fa-spinner fa-pulse fa-3x fa-fw"></span></p>').appendTo(target);
            $("#tab1").load("/ru/index.html #tab1 div.row", function() {
                $("#tab1 p.text-center").remove();
            });
        }
    } else {
        $(".jumbotron .name").text("Aleksey Zvyagin");
        $(".jumbotron .profession").text("Software Engineer");
        if (("#tab2" != activeTab) && ($("#tab2 div.row").size() === 0)) {
            $('<p class="text-center"><span class="text-center fa fa-spinner fa-pulse fa-3x fa-fw"></span></p>').appendTo(target);
            $("#tab2").load("/index.html #tab2 div.row", function() {
                $("#tab2 p.text-center").remove();
            });
        }
    }
});
