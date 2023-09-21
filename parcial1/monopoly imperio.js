$(document).ready(function(){
    var dinero1 = 1000;
    var dinero2 = 1000;
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
                    torre1 += 1;
                    dinero1 -= 50;
                    console.log("cobro 50")
                    $("#dinero").html(dinero1);
                }
                if(j1===6 || j1===8 || j1===9){
                    torre1 +=1;
                    dinero1 -= 100;
                    console.log("cobro 100")
                    $("#dinero").html(dinero1);
                }
                if(j1 === 11 || j1 === 12 || j1=== 14){
                    torre1 += 2;
                    dinero1 -= 150;
                    console.log("cobro 150")
                    $("#dinero").html(dinero1);
                }
                if(j1===15 || j1===17 || j1===18){
                    torre1 += 2;
                    dinero1 -=200;
                    console.log("cobro 200")
                    $("#dinero").html(dinero1);
                }
                if(j1===20 || j1===21 || j1===23){
                    torre1 += 3;
                    dinero1 -=350;
                    console.log("cobro 300")
                    $("#dinero").html(dinero1);
                }
                if(j1===24 || j1===26 || j1===27){
                    torre1 += 3;
                    dinero1 -=300;
                    console.log("cobro 300")
                    $("#dinero").html(dinero1);
                }
                if(j1===29 || j1===30 || j1===32){
                    torre1 += 4;
                    dinero1 -=350;
                    console.log("cobro 350")
                    $("#dinero").html(dinero1);
                }
                if(j1===34 || j1===36){
                    torre1 += 4;
                    dinero1 -=400;
                    console.log("cobro 400")
                    $("#dinero").html(dinero1);
                }

            } else {
                if(j2===2 || j2===4){
                    torre2 += 1;
                    dinero2 -= 50;
                    console.log("cobro 50")
                    $("#dinero2").html(dinero2);
                }
                if(j2===6 || j2===8 || j2===9){
                    torre2 += 1;
                    dinero2 -= 100;
                    console.log("cobro 100")
                    $("#dinero2").html(dinero2);
                }
                if(j2 === 11 || j2 === 12 || j2=== 14){
                    torre2 += 2;
                    dinero2 -= 150;
                    console.log("cobro 150")
                    $("#dinero2").html(dinero2);
                }
                if(j2===15 || j2===17 || j2===18){
                    torre2 += 2;
                    dinero2 -=200;
                    console.log("cobro 200")
                    $("#dinero2").html(dinero2);
                }
                if(j2===20 || j2===21 || j2===23){
                    torre2 += 3;
                    dinero2 -=350;
                    console.log("cobro 300")
                    $("#dinero2").html(dinero2);
                }
                if(j2===24 || j2===26 || j2===27){
                    torre2 += 3;
                    dinero2 -=300;
                    console.log("cobro 300")
                    $("#dinero2").html(dinero2);
                }
                if(j2===29 || j2===30 || j2===32){
                    torre2 += 4;
                    dinero2 -=350;
                    console.log("cobro 350")
                    $("#dinero2").html(dinero2);
                }
                if(j2===34 || j2===36){
                    torre2 += 4;
                    dinero2 -=400;
                    console.log("cobro 400")
                    $("#dinero2").html(dinero2);
                }
            }
        }
        
        comprando = false;
        console.log("hola")
        turnoJugador1 = !turnoJugador1;
    }

    function PagarCarcel(){
        var eleccion = confirm("¿Quieres pagar 50 y salir de prision");
        if(eleccion){
            if(turnoJugador1){
                if(j1===50){
                        dinero1 -= 100;
                        console.log("libre1")
                        carcel1 = false;
                        j1=10;
                        $("#dinero").html(dinero1);
                }
            }else{
                if(j2===50){
                    dinero2 -= 100;
                    console.log("libre2")
                    carcel2=false;
                    j2=10
                    $("#dinero2").html(dinero2);
                }
            }
        }
        console.log("menu carcel acabado")
        turnoJugador1 = !turnoJugador1;
    }

    $("#boton1").on("click", function(){
        dado = Math.floor(Math.random()*6+1);
        console.log("Un: " + dado);
        $("#dado").attr("src", "imagenes/dado" + dado + ".PNG");
        $("#numero").html(dado);

        if (turnoJugador1) {
            j1 += dado;
            if (j1 > 36) {
                j1 -= 36;
                dinero1+=200;
            }
            $("#j1").html(j1);
            $("#dinero").html(dinero1);
            if(j1===10){
                alert("andas de visita en la carcel cuidao")
            }
            if(j1===19){
                alert("No pasa nada")
            }
            if(j1===28){
                alert("Cometiste lavado de dinero pa la carcel puto")
                   j1=50;
                carcel1 = true;
                if(dinero1 >= 50){
                    PagarCarcel();
                    if(!carcel1){
                        return;
                    }
                }else{
                    alert("No tienes pa la fianza ni familia que te pague tonto")
                } 
                    j2=50;
                carcel2 = true;
                if(dinero1 >= 50){
                    PagarCarcel();
                    if(!carcel1){
                        return;
                    }
                }else{
                    alert("No tienes pa la fianza ni familia que te pague tonto")
                }
                
            }
            if(j1===2 || j1===4){
                if(dinero1 >= 50){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
                
            }
            if(j1===6 || j1===8 || j1===9){
                if(dinero1 >= 100){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
            if(j1 === 11 || j1 === 12 || j1=== 14){
                if(dinero1 >= 150){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
            if(j1 === 15 || j1 === 17 || j1=== 18){
                if(dinero1 >= 200){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
            if(j1 === 20 || j1 === 21 || j1=== 23){
                if(dinero1 >= 250){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
            if(j1 === 24 || j1 === 26 || j1=== 27){
                if(dinero1 >= 300){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
            if(j1 === 29 || j1 ===30 || j1=== 32){
                if(dinero1 >= 350){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
            }
            if(j1 === 34 || j1 ===36){
                if(dinero1 >= 400){
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
            if(j2===10){
                alert("andas de visita en la carcel cuidao")                
            }
            if(j2===19){
                alert("No pasa nada")
            }
            if(j2===28){
                alert("Cometiste lavado de dinero pa la carcel puto")
                j2=50;
                carcel2 = true;
                if(dinero2 >= 50){
                    PagarCarcel();
                    if(!carcel2){
                        return;
                    }
                }else{
                    alert("No tienes pa la fianza ni familia que te pague tonto")
                }
            }
            if(j2===2 || j2===4){
                if(dinero2 >=50){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
                }
            if(j2===6 || j2===2 || j2===9){
                if(dinero2 >=100){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("no tenes plata pendejo")
                }
                }
                if(j2 === 11 || j2 === 12 || j2=== 14){
                    if(dinero2 >= 150){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("no tenes plata pendejo")
                    }
                }
                if(j2 === 15 || j2 === 17 || j2=== 18){
                    if(dinero2 >= 200){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("no tenes plata pendejo")
                    }
                }
                if(j2 === 20 || j2 === 21 || j2=== 23){
                    if(dinero2 >= 250){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("no tenes plata pendejo")
                    }
                }
                if(j2 === 24 || j2 === 26 || j2=== 27){
                    if(dinero2 >= 300){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("no tenes plata pendejo")
                    }
                }
                if(j2 === 29 || j2 ===30 || j2=== 32){
                    if(dinero2 >= 350){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("no tenes plata pendejo")
                    }
                }
                if(j2 === 34 || j2 ===36){
                    if(dinero2 >= 400){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("no tenes plata pendejo")
                    }
                }
            }
        if(carcel1 || carcel2){
            PagarCarcel();
        }
        if(comprando){
            mostrarMenuDeCompra();
        }
        // Alternar el turno al otro jugador
        turnoJugador1 = !turnoJugador1;
    });
});
