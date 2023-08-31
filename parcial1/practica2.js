$(document).ready(function(){
    $("#boton1").on("click", function(){
        alert("cosas");
        
    });

    $("#div1").on("dblclick",function(){
        alert("nomames hiciste doble click waos");
    });

    $("#input1").focus(function(){
        console.log("waos pasaste el mouse simplemente waos");
    });

    $("#texto1").hover(function(){
        $(this).css("background-color", "red");
    });

    $("#input2").keydown(function(){
        $(this).css("background-color","brown")
    })
});