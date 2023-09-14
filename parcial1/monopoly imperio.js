$(document).ready(function(){
    var dinero1 = 1500;
    var dinero2 = 1500;
    var dado = 0;
    var torre1 = 0;
    var torre2 = 0;
    var j1 = 1;
    var j2 = 1;
    $("#boton1").on("click", function(){
        dado = Math.floor(Math.random()*6+1)
        console.log("Un: " + dado)
        $("#dado").attr("src", "imagenes/dado" + dado + ".PNG");
        $("#numero").html(dado);
        j1=(j1+dado);
        if(j1>=36){
            j1=1;
        }
        $("#j1").html(j1);
    })

});