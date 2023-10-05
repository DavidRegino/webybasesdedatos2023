<?php
    $server = "localhost";
    $user = "root";
    $password = "12345678"; //si tienes contra

    //conexion
    $conexion = new mysqli($server, $user, $password);

    //revisar conexion
    if($conexion -> connect_error){
        die("fallo la conexion". $conexion -> connect_error)
    }
?>    
