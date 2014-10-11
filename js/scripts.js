// Обработчик переключения вкладки
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    var target = $(e.target).attr("href");
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
    if (target == "#tab1") {
        $(".ru").css("display", "block");
        $(".en").css("display", "none");
    } else {
        $(".ru").css("display", "none");
        $(".en").css("display", "block");
    }
});
// Переключение на английский язык для браузеров с не русским языком
var lang = navigator.language || navigator.userLanguage;
if (lang.toLowerCase().startsWith("ru")) {
    $('.jumbotron .nav-tabs a[href="#tab1"]').tab('show');
} else {
    $('.jumbotron .nav-tabs a[href="#tab2"]').tab('show');
}
