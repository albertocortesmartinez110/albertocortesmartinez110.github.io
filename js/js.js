
function cambiar_tamaño_height() {
    var width_ventana= $(window).width();
    var height_sidebar = $(".sidebar").height();
    var height_ventana = $(window).height();
    console.log(height_sidebar);
    console.log(height_ventana);
    if(width_ventana>768) {
        if (height_sidebar < height_ventana) {
            $(".sidebar").height('100vh');
        }
    }
    $("#header").click(function (){

        $(".sidebar").css('visibility','visible');
    });
}