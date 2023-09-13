$(document).ready(function(){
    var carta1 = ""; var carta2 = "";
    var par= false;
    var total_pares = 0; 
    var pares_restantes = 8;
    var total_fallas =0;

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
                    total_fallas++
                }else{
                    console.log("Es par")
                    carta1.attr('data-estado', '1')
                    carta2.attr('data-estado', '1')
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
            $("#total_pares").html(total_pares)
            carta1 = ""
            carta2 = "" 
        }  
    }

    if(total_pares >=8){
        alert("ganaste")
        //reiniciando la pagina setInterval("location.reload()");
        $('img').each(function (){
            $(this).attr('src','imagenes/carta volteada.jpg')
            $(this).attr('data-estado', '0')
        })

        total_pares=0
        total_fallas=0
        par=false
        carta1=""
        carta2=""
        return;
    }
    if(total_fallas >=5){
        alert("has alcansado el limite de intentos")
        alert("perdiste")
        //reiniciando la pagina setInterval("location.reload()");
        $('img').each(function (){
            $(this).attr('src','imagenes/carta volteada.jpg')
            $(this).attr('data-estado', '0')
        })

        total_pares=0
        total_fallas=0
        par=false
        carta1=""
        carta2=""
        return;
    }
    
    });
});