$(document).ready(function(){
    var carta1 = ""; var carta2 = "";
    var par= false;
    var total_pares = 0; 
    var intentos = 0;
    var pares_restantes = 8;
    var timer = 5;

    $('img').click(function(e){
        var estado = $(this).attr('data-estado')
        var nombre_imagen = $(this).attr('data-id')

        if(estado == "0"){
            //si las cartas son erroneas
            if(carta1 != "" && carta2 != ""){
                console.log("No es par")
                if(carta1.attr('data-id') != carta2.attr('data-id')){
                    console.log("Ocultar de nuevo")
                    carta1.attr('src','imagenes/carta volteada.jpg');
                    carta2.attr('src','imagenes/carta volteada.jpg');
                    carta1.attr('data-estado', '0')
                    carta2.attr('data-estado', '0')
                    intentos++
                    $("#intentos").html(intentos)
                }else{
                    console.log("Es par")
                    carta1.attr('data-estado', '1')
                    carta2.attr('data-estado', '1')
                    intentos++
                    $("#intentos").html(intentos)
                    par=false
                }
                carta1=""
                carta2=""
            }
            console.log("estado de la carta:" + estado)
            if(carta1 == ""){
                carta1 = $(this);
                carta1.attr('data-estado', '1')
                carta1.attr('src','imagenes/' + nombre_imagen);
                console.log("seasigno carta #1")
            } else{
                    carta2 = $(this);
                    carta2.attr('data-estado', '1')
                    carta2.attr('src','imagenes/' + nombre_imagen);
                    console.log("seasigno carta #2")
        }
    }

    if(carta1 != "" && carta2 != ""){
        if(carta1.attr('data-id') == carta2.attr('data-id')){
            par = true
            total_pares++
            intentos++
            pares_restantes--
            $("#intentos").html(intentos)
            $("#total_pares").html(total_pares)
            carta1 = ""
            carta2 = "" 
        }
        if(pares_restantes == 0){
                alert("GANASTE WAOS ERES UN CRACK COMO FERNANFLOO, la pagina se reiniciara en 5 segundos al cerrar esta alerta")
                setInterval("location.reload()",5000);
            }  
    }
    
    });
});