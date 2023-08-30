$(document).ready(function(){
    $("#boton1").on("click",function(){
        $("#texto1").html("texto agregado");
    });

    $("#texto1").hover(function(){
        $(this).css("background-color", "blue");
        $(this).css("fonz-size", "50px");
    },function(){
        $(this).css("background-color", "red");
        $(this).css("fonz-size", "20px");
    });

    $("#boton2").click(function(){
        $("#imagen1").fadeToggle();
    });
});