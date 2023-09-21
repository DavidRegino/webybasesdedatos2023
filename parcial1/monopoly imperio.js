$(document).ready(function(){
    var dinero1 = 1500;
    var dinero2 = 1500;
    var dado = 0;
    var torre1 = 0;
    var torre2 = 0;
    var j1 = 1;
    var j2 = 1;
    var turnoJugador1 = true; // Variable para controlar el turno del jugador
    var comprando = false;
    var carcel1 = false;
    var carcel2 = false;

    function mostrarMenuDeCompra(){
        var eleccion = confirm("¿Deseas comprar esta propiedad?\n\nElige 'Aceptar' para comprar o 'Cancelar' para no comprar.");
        if (eleccion) {
            if (turnoJugador1) {
                if(j1===2 || j1===4){
                    dinero1 -= 50;
                    console.log("cobro 50")
                    $("#dinero").html(dinero1);
                }
                if(j1===6 || j1===8 || j1===9){
                    dinero1 -= 100;
                    console.log("cobro 100")
                    $("#dinero").html(dinero1);
                }
            } else {
                if(j2===2 || j2===4){
                    dinero2 -= 50;
                    console.log("cobro 50")
                    $("#dinero2").html(dinero2);
                }
                if(j2===6 || j2===8 || j2===9){
                    dinero2 -= 100;
                    console.log("cobro 100")
                    $("#dinero2").html(dinero2);
                }
            }
        }
        comprando = false;
        console.log("hola")
    }

    function PagarCarcel(){
        var eleccion = confirm("¿Quieres pagar 50 y salir de prision");
        if(eleccion){
            if(turnoJugador1){
                if(j1===37){
                    for(var i=0; i<=3; i++){
                        dinero1 -= 50;
                        console.log("libre1")
                        carcel1 = false;
                        j1=10;
                    } 
                }
            }else{
                if(j2===37){
                    dinero2 -= 50;
                    console.log("libre2")
                    carcel2=false;
                    j2=10
                }
            }
        }
        console.log("salida")
    }

    $("#boton1").on("click", function(){
        dado = Math.floor(Math.random()*6+1);
        console.log("Un: " + dado);
        $("#dado").attr("src", "imagenes/dado" + dado + ".PNG");
        $("#numero").html(dado);

        if (turnoJugador1) {
            j1 += 27;
            if (j1 > 36) {
                j1 -= 36;
                dinero1+=200;
            }
            $("#j1").html(j1);
            $("#dinero").html(dinero1);
            if(j1===10 || j2===10){
                alert("andas de visita en la carcel cuidao")
            }
            if(j1===19 || j2===19){
                alert("No pasa nada")
            }
            if(j1===28 || j2===28){
                alert("Cometiste lavado de dinero pa la carcel puto")
                j1=37;
                carcel1 = true;
                if(dinero1 >= 50){
                    PagarCarcel();
                    if(!carcel1){
                        return;
                    }
                }else{
                    alert("No tienes pa la fianza ni familia que te pague tonto")
                }
            }
            if(j1===2 || j1===4 || j2===2 || j2===4){
                if(dinero1 >= 50){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
                
            }
            if(j1===6 || j1===8 || j1===9 || j2===6 || j2===8 || j2===9){
                if(dinero1 >= 100){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
        }else {
            j2 += dado;
            if (j2 > 36) {
                j2 -= 36;
                dinero2+=200;
            }
            $("#j2").html(j2);
            $("#dinero2").html(dinero2);
        }
        // Alternar el turno al otro jugador
        turnoJugador1 = !turnoJugador1;
    });
});
