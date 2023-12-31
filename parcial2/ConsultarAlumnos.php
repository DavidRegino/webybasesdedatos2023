<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <?php include 'home.php';
          include 'conexion.php';
          $sql ="SELECT * FROM alumnos";
          $datos = $conexion->query($sql);   
    ?>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php if($datos->num_row==0){?>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <tr>id</tr>
                                <tr>Nombre</tr>
                                <tr>Numero de Control</tr>
                                <tr>Semestre</tr>
                                <tr>Edad</tr>
                                <tr>Turno</tr>
                                <tr>Sexo</tr>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while($registro = $datos->fetch_assoc()){?>
                                <tr>
                                    <td><?php echo $registro["id"];?></td>
                                    <td><?php echo $registro["nombre"];?></td>
                                    <td><?php echo $registro["numero_control"];?></td>
                                    <td><?php echo $registro["semestre"];?></td>
                                    <td><?php echo $registro["edad"];?></td>
                                    <td><?php echo $registro["turno"];?></td>
                                    <td><?php echo $registro["sexo"];?></td>
                                    <td>
                                    <a href="editarAlumnos.php" class="btn btn-sm btn-primary">Editar</a>
                                <a href="eliminarAlumons.php" class="btn btn-sm btn-danger">Eliminar</a>
                                    </td>
                                </tr>
                                <?php } ?>
                        </tbody>
                    </table>
                <?php }else{ ?>
                    <h3>No existen alumnos en la base de datos</h3>
                <?php }?>        
            </div>
        </div>
    </div>
</body>
</html>