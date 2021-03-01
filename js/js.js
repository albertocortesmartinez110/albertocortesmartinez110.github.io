
function cambiar_tamaño_height() {
    var height_sidebar = $(".sidebar").height();
    var height_ventana = $(window).height();
    console.log(height_sidebar);
    console.log(height_ventana);
    if (height_sidebar < height_ventana) {
        $(".sidebar").height('100vh');
    }
}