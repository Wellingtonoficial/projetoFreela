$(document).ready(function (){
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menuActiv").toggleClass("active")
    });
});
