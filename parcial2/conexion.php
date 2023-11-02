<?php
    $server = "localhost";
    $user = "root";
    $password = ""; //si tienes contra
    $baseDatos = "cetis107";

    //conexion
    $conexion = new mysqli($server, $user, $password, $baseDatos);

    //revisar conexion
    if($conexion -> connect_error){
        die("fallo la conexion". $conexion -> connect_error);
    }
?>    
