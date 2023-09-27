$(document).ready(function(){
    var dinero1 = 1000;
    var dinero2 = 1000;
    var dado = 0;
    var torre1 = 0;
    var torre2 = 0;
    var j1 = 1;
    var j2 = 1;
    var turnoJugador1 = true; // Variable para controlar el turno del jugador
    var comprando = false; //variable para activar menu de compra
    var carcel1 = false; //variable para saber si j1 esta en la carcel
    var carcel2 = false; //lo mismo que el anterior pero para j2

    var Carta_Chance = [
        "Pagas A Hacienda",
        "Ve A La Carcel Por Evadir El Sat",
        "Avanza 5 Casillas",
        "Loteria, Ganaste $300"
      ];

      var Carta_Empire = [
        "Sal Gratis De La Carcel",
        "Compra Lo Que Quieras Por $100",
        "Cobra $400 Al Oponente",
        "Roba La Ultima Propiedad Del Oponente"
      ];

      //propiedades insanas como no puedo poner espacios se ve culero pero asi funciona "propiedad" "precio" "numero de propiedad"
      var propiedades={
        propiedad501:{comprada: null, precio: 50},
        propiedad502:{comprada: null, precio: 50},
        propiedad1001:{comprada: null, precio: 100},
        propiedad1002:{comprada: null, precio: 100},
        propiedad1003:{comprada: null, precio: 100},
        propiedad1501:{comprada: null, precio: 150},
        propiedad1502:{comprada: null, precio: 150},
        propiedad1503:{comprada: null, precio: 150},
        propiedad2001:{comprada: null, precio: 200},
        propiedad2002:{comprada: null, precio: 200},
        propiedad2003:{comprada: null, precio: 200},
        propiedad2501:{comprada: null, precio: 250},
        propiedad2502:{comprada: null, precio: 250},
        propiedad2503:{comprada: null, precio: 250},
        propiedad3001:{comprada: null, precio: 300},
        propiedad3002:{comprada: null, precio: 300},
        propiedad3003:{comprada: null, precio: 300},
        propiedad3501:{comprada: null, precio: 350},
        propiedad3502:{comprada: null, precio: 350},
        propiedad3503:{comprada: null, precio: 350},
        propiedad4001:{comprada: null, precio: 400},
        propiedad4002:{comprada: null, precio: 400},
      }

      
      var Mezclar_Chance = Math.floor(Math.random() * Carta_Chance.length);
      var Chance = Carta_Chance[Mezclar_Chance];

      var Mezclar_Empire = Math.floor(Math.random() * Carta_Empire.length);
      var Empire = Carta_Empire[Mezclar_Empire];

     // Define la función para mezclar la lista de archivos
    function mezclarListaArchivos() {
        // Define la lista de archivos .png
        var archivos = [
            'imperio test.png',
        ];

        // Crea una copia de la lista original para no modificarla directamente
        var listaMezclada = [...archivos];

        // Aplica el algoritmo de Fisher-Yates para mezclar aleatoriamente la lista
        for (let i = listaMezclada.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [listaMezclada[i], listaMezclada[j]] = [listaMezclada[j], listaMezclada[i]];
        }

        return listaMezclada;
    }

    function mostrarMenuDeCompra(){ //logica de la compra de las propiedades
        var eleccion = confirm("¿Deseas comprar esta propiedad?\n\nElige 'Aceptar' para comprar o 'Cancelar' para no comprar.");
        if (eleccion) {
            if (turnoJugador1){
                if(j1===13){
                    var l=4;
                    if(l>0){
                        torre1 += 1;
                        dinero1 -= 150;
                        console.log("j1 cobro luz")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);
                    }else{
                        alert("ya no hay rotulos de luz")
                    }
                }
                if(j1===31){
                    var a=4;
                    if(a>0){
                        torre1 += 1;
                        dinero1 -= 150;
                        console.log("j1 cobro agua")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);
                    }else{
                        alert("ya no hay rotulos de agua")
                    }
                }
                if(j1===2 || j1===4){
                    if(j1===2){
                        if (propiedades.propiedad501.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad501.comprada);
                            console.log("j1 es dueno de 50 1")
                        }else{
                        propiedades.propiedad501.comprada = "Jugador 1";
                        torre1 +=1;
                        dinero1 -= 50;
                        console.log("j1 cobro 50")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);
                        }   
                    }else{
                        if (propiedades.propiedad502.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad502.comprada);
                            console.log("j1 es dueno de 50 2")
                        }else{
                          propiedades.propiedad502.comprada = "Jugador 1";
                        torre1 +=1;
                        dinero1 -= 50;
                        console.log("j1 cobro 50")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);  
                        }
                        
                    }
                    
                }
                if(j1===6 || j1===8 || j1===9){
                    if(j1===6){
                        if (propiedades.propiedad1001.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad1001.comprada);
                            console.log("j1 es dueno de 100 1")
                        }else{
                        propiedades.propiedad1001.comprada = "Jugador 1";
                        torre1 +=1;
                        dinero1 -= 100;
                        console.log("j1 cobro 100")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);
                        }   
                    }else if(j1===8){
                        if (propiedades.propiedad1002.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad1002.comprada);
                            console.log("j1 es dueno de 100 2")
                        }else{
                        propiedades.propiedad1002.comprada = "Jugador 1";
                        torre1 +=1;
                        dinero1 -= 100;
                        console.log("j1 cobro 100")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);
                        }
                    }else{
                        if (propiedades.propiedad1003.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad1003.comprada);
                            console.log("j1 es dueno de 100 3")
                        }else{
                        propiedades.propiedad1003.comprada = "Jugador 1";
                        torre1 +=1;
                        dinero1 -= 100;
                        console.log("j1 cobro 100")
                        $("#dinero").html(dinero1);
                        $("#torre1").html(torre1);
                        }
                    }
                }
                if(j1 === 11 || j1 === 12 || j1=== 14){
                    torre1 += 2;
                    dinero1 -= 150;
                    console.log("j1 cobro 150")
                    $("#dinero").html(dinero1);
                    $("#torre1").html(torre1);
                }
                if(j1===15 || j1===17 || j1===18){
                    torre1 += 2;
                    dinero1 -=200;
                    console.log("j1 cobro 200")
                    $("#dinero").html(dinero1);
                    $("#torre1").html(torre1);
                }
                if(j1===20 || j1===21 || j1===23){
                    torre1 += 3;
                    dinero1 -=250;
                    console.log("j1 cobro 250")
                    $("#dinero").html(dinero1);
                    $("#torre1").html(torre1);
                }
                if(j1===24 || j1===26 || j1===27){
                    torre1 += 3;
                    dinero1 -=300;
                    console.log("j1 cobro 300")
                    $("#dinero").html(dinero1);
                    $("#torre1").html(torre1);
                }
                if(j1===29 || j1===30 || j1===32){
                    torre1 += 4;
                    dinero1 -=350;
                    console.log("j1 cobro 350")
                    $("#dinero").html(dinero1);
                    $("#torre1").html(torre1);
                }
                if(j1===34 || j1===36){
                    torre1 += 4;
                    dinero1 -=400;
                    console.log("j1 cobro 400")
                    $("#dinero").html(dinero1);
                    $("#torre1").html(torre1);
                }

            } else {
                if(j2===2 || j2===4){
                    if(j2===2){
                        if (propiedades.propiedad501.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad501.comprada);
                            console.log("j2 es dueno de 50 1")
                        }else{
                        propiedades.propiedad501.comprada = "Jugador 2";
                        torre2 +=1;
                        dinero2 -= 50;
                        console.log("j2 cobro 50")
                        $("#dinero2").html(dinero2);
                        $("#torre2").html(torre2);
                        }   
                    }else{
                        if (propiedades.propiedad502.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad502.comprada);
                            console.log("j2 es dueno de 50 2")
                        }else{
                          propiedades.propiedad502.comprada = "Jugador 2";
                        torre2 +=1;
                        dinero2 -= 50;
                        console.log("j2 cobro 50")
                        $("#dinero2").html(dinero2);
                        $("#torre2").html(torre2);  
                        }
                        
                    }
                    
                }
                if(j2===6 || j2===8 || j2===9){
                    if(j2===6){
                        if (propiedades.propiedad1001.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad1001.comprada);
                            console.log("j2 es dueno de 100 1")
                        }else{
                        propiedades.propiedad1001.comprada = "Jugador 2";
                        torre2 +=1;
                        dinero2 -= 100;
                        console.log("j2 cobro 100")
                        $("#dinero2").html(dinero2);
                        $("#torre2").html(torre2);
                        }   
                    }else if(j2===8){
                        if (propiedades.propiedad1002.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad1002.comprada);
                            console.log("j2 es dueno de 100 2")
                        }else{
                        propiedades.propiedad1002.comprada = "Jugador 2";
                        torre2 +=1;
                        dinero2 -= 100;
                        console.log("j2 cobro 100")
                        $("#dinero2").html(dinero2);
                        $("#torre2").html(torre2);
                        }
                    }else{
                        if (propiedades.propiedad1003.comprada !== null) {
                            alert("Esta propiedad pertenece a " + propiedades.propiedad1003.comprada);
                            console.log("j2 es dueno de 100 3")
                        }else{
                        propiedades.propiedad1003.comprada = "Jugador 2";
                        torre2 +=1;
                        dinero2 -= 100;
                        console.log("j2 cobro 100")
                        $("#dinero2").html(dinero2);
                        $("#torre2").html(torre2);
                        }
                    }
                }
                if(j2 === 11 || j2 === 12 || j2=== 14){
                    torre2 += 2;
                    dinero2 -= 150;
                    console.log("j2 cobro 150")
                    $("#dinero2").html(dinero2);
                    $("#torre2").html(torre2);
                }
                if(j2===15 || j2===17 || j2===18){
                    torre2 += 2;
                    dinero2 -=200;
                    console.log("j2 cobro 200")
                    $("#dinero2").html(dinero2);
                    $("#torre2").html(torre2);
                }
                if(j2===20 || j2===21 || j2===23){
                    torre2 += 3;
                    dinero2 -=250;
                    console.log("j2 cobro 250")
                    $("#dinero2").html(dinero2);
                    $("#torre2").html(torre2);
                }
                if(j2===24 || j2===26 || j2===27){
                    torre2 += 3;
                    dinero2 -=300;
                    console.log("j2 cobro 300")
                    $("#dinero2").html(dinero2);
                    $("#torre2").html(torre2);
                }
                if(j2===29 || j2===30 || j2===32){
                    torre2 += 4;
                    dinero2 -=350;
                    console.log("j2 cobro 350")
                    $("#dinero2").html(dinero2);
                    $("#torre2").html(torre2);
                }
                if(j2===34 || j2===36){
                    torre2 += 4;
                    dinero2 -=400;
                    console.log("j2 cobro 400")
                    $("#dinero2").html(dinero2);
                    $("#torre2").html(torre2);
                }
            }
        }
        comprando = false;
        console.log("aun no gana nadie")
        turnoJugador1 = !turnoJugador1;
    } //Fin de logica de compra de propiedades

    function PagarCarcel(){ //logica de pagar carcel
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
    } //Fin de logica de pagar carcel

    $("#boton1").on("click", function(){ //Dado
        dado = Math.floor(Math.random()*6+1);
        console.log("Un: " + dado);
        $("#dado").attr("src", "imagenes/dado" + dado + ".PNG");
        $("#numero").html(dado);

        if (turnoJugador1) { //Logica del j1 para las casillas especiales y comprobacion de dinero
            j1 += dado;
            if (j1 > 36) {
                j1 -= 36;
                dinero1+=200;
            }
            $("#j1").html(j1);
            $("#dinero").html(dinero1);
            if(j1===13 || j1===31){
                if(dinero1 >= 150){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1===7 || j1===16 || j1===22 || j1===33){
                alert("prueba carta fortune j1")
                  alert(Chance);
            }
            if(j1===3){
                alert("quitaremos una ficha de la torre de tu rival que es j2")
            }
            if(j1===35){
                alert("quitaremos una ficha de tu torre j1")
            }
            if(j1===5 || j1===25){
                alert(Empire)
            }
            if(j1===10){
                alert("j1 andas de visita en la carcel cuidao")
            }
            if(j1===19){
                alert("No pasa nada")
            }
            if(j1===28){
                alert("j1 Cometiste lavado de dinero pa la carcel puto")
                   j1=50;
                carcel1 = true;
                if(dinero1 >= 100){
                    PagarCarcel();
                    if(!carcel1){
                        return;
                    }
                }
            }
            if(j1===2 || j1===4){
                if(dinero1 >= 50){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
                
            }
            if(j1===6 || j1===8 || j1===9){
                if(dinero1 >= 100){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1 === 11 || j1 === 12 || j1=== 14){
                if(dinero1 >= 150){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1 === 15 || j1 === 17 || j1=== 18){
                if(dinero1 >= 200){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1 === 20 || j1 === 21 || j1=== 23){
                if(dinero1 >= 250){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1 === 24 || j1 === 26 || j1=== 27){
                if(dinero1 >= 300){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1 === 29 || j1 ===30 || j1=== 32){
                if(dinero1 >= 350){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            }
            if(j1 === 34 || j1 ===36){
                if(dinero1 >= 400){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j1 no tenes plata pendejo")
                }
            } //Fin logica de comprobacion de dinero y casillas especiales


        }else { //Logica del j2 para casillas especiales y comprobacion de dinero
            j2 += dado;
            if (j2 > 36) {
                j2 -= 36;
                dinero2+=200;
            }
            $("#j2").html(j2);
            $("#dinero2").html(dinero2);
            if(j2===13 || j2===31){
                if(dinero1 >= 150){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j2 no tenes plata pendejo")
                }
            }
            if(j2===7 || j2===16 || j2===22 || j2===33){
                alert(Chance)
            }
            if(j2===3){
                alert("quitaremos una ficha de la torre de tu rival que es j1")
            }
            if(j2===35){
                alert("quitaremos una ficha de tu torre j2")
            }
            if(j2===5 || j2===25){
                alert(Empire)
            }
            if(j2===10){
                alert("j2 andas de visita en la carcel cuidao")                
            }
            if(j2===19){
                alert("No pasa nada")
            }
            if(j2===28){
                alert("j2 Cometiste lavado de dinero pa la carcel puto")
                j2=50;
                carcel2 = true;
                if(dinero2 >= 100){
                    PagarCarcel();
                    if(!carcel2){
                        return;
                    }
                }else{
                    alert("j2 No tienes pa la fianza ni familia que te pague tonto")
                }
            }
            if(j2===2 || j2===4){
                if(dinero2 >=50){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j2 no tenes plata pendejo")
                }
                }
            if(j2===6 || j2===2 || j2===9){
                if(dinero2 >=100){
                    mostrarMenuDeCompra();
                    if(!comprando){
                        return;
                    }
                }else{
                    alert("j2 no tenes plata pendejo")
                }
                }
                if(j2 === 11 || j2 === 12 || j2=== 14){
                    if(dinero2 >= 150){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("j2 no tenes plata pendejo")
                    }
                }
                if(j2 === 15 || j2 === 17 || j2=== 18){
                    if(dinero2 >= 200){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("j2 no tenes plata pendejo")
                    }
                }
                if(j2 === 20 || j2 === 21 || j2=== 23){
                    if(dinero2 >= 250){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("j2 no tenes plata pendejo")
                    }
                }
                if(j2 === 24 || j2 === 26 || j2=== 27){
                    if(dinero2 >= 300){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("j2 no tenes plata pendejo")
                    }
                }
                if(j2 === 29 || j2 ===30 || j2=== 32){
                    if(dinero2 >= 350){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("j2 no tenes plata pendejo")
                    }
                }
                if(j2 === 34 || j2 ===36){
                    if(dinero2 >= 400){
                        mostrarMenuDeCompra();
                        if(!comprando){
                            return;
                        }
                    }else{
                        alert("j2 no tenes plata pendejo")
                    }
                }
            } //Fin de logica del j2 para casillas especiales y comprobacion de dinero

         //Cambio de turno correcto en caso de activar la carcel   
        if(carcel1 || carcel2){
            PagarCarcel();
        }
        if(torre1===17){
            alert("j1 Ganaste")
            console.log("ganador j1")
        }else if(torre2===17){
            alert("j2 Ganaste")
            console.log("j2 ganador")
        }
        //Cambio de turno correcto en caso de activar menu de compra
        if(comprando){
            mostrarMenuDeCompra();
        }
        // Alternar el turno al otro jugador
        turnoJugador1 = !turnoJugador1;
    });
});
