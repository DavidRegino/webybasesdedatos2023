$(document).ready(function(){
    var dinero1 = 1500;
    var dinero2 = 1500;
    var dado = 0;
    var torre1 = 0;
    var torre2 = 0;
    
    var j1 = 1;
    var j2 = 1;
    var turnoJugador1 = true; // Variable para controlar el turno del jugador

    $("#boton1").on("click", function(){
        dado = Math.floor(Math.random()*6+1);
        console.log("Un: " + dado);
        $("#dado").attr("src", "imagenes/dado" + dado + ".PNG");
        $("#numero").html(dado);

        if (turnoJugador1) {
            j1 += dado;
            if (j1 >= 36) {
                j1 = 1 + dado;
            }
            $("#j1").html(j1);
            if(j1===10){
                alert("andas de visita mu ben")
            }
            if(j1===19){
                alert("No pasa nada")
            }
            if(j1===28){
                alert("Cometiste lavado de dinero pa la carcel puto")
            }
            if(j1===1){
                dinero1+200;
            }
        } else {
            j2 += dado;
            if (j2 >= 36) {
                j2 = 1 + dado;
            }
            $("#j2").html(j2); 
            if(j2===10){
                alert("andas de visita mu ben")
            }
            if(j2===19){
                alert("No pasa nada")
            }
            if(j2===28){
                alert("Cometiste lavado de dinero pa la carcel puto")
            }
            if(j2===1){
                dinero2+200
            }
        }
        // Alternar el turno al otro jugador
        turnoJugador1 = !turnoJugador1;
    });
});
