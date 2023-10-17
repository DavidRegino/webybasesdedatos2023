<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include 'home.php';
          include 'conexion.php';
          $sql ="SELECT + FROM alumnos";
          $datos = $conexion->query($sql);   
    ?>
</body>
</html>