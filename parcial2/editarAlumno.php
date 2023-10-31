<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <?php include 'home.php';
           include 'conexion.php';
           $id = $_GET ['id'];
           $sql = "SELECT * FROM alumnos id=".$id;

           $datos=$conexion->query($sql);
           $alumno = $datos->fetch_assoc()[0];
    ?>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <form action="" method="POST">
                    <input type="hidden" name="id" value="<?php echo $alumno["id"];?>">
                    <div class="form-group">
                        <label for="">nombre</label>
                        <input value="<?php echo $alumno["nombre"];?>" name="nombre" type="text" class="form-control" placeholder="pon tu nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="">Numero de Control</label> 
                        <input value="<?php echo $alumno["numero_control"];?>" name="nc" type="text" class="form-control" placeholder="Pon tu numero de control" required>
                    </div>
                    <div class="form-group">
                        <label for="">Semestre</label>
                        <input value="<?php echo $alumno["semestre"];?>" name="semestre" type="number" class="form-control" placeholder="pon tu semestre" required>
                    </div>
                    <div class="form-group">
                        <label for="">Edad</label>
                        <input value="<?php echo $alumno["edad"];?>" name="edad" type="number" class="form-control" placeholder="Pon tun edad" required>
                    </div>
                    <div class="form-group">
                        <label for="">Turno</label>
                        <select name="turno" id="" class="form-control">
                            <option value="">selecciona el Turno</option>
                            <option selected value="<?php echo $alumno["turno"];?>"></option>
                            <option value="MATUTINO"></option>
                            <option value="VESPERTINO"></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Sexo</label>
                        <select name="sexo" id="" class="form-control" required>
                            <option value="">Selecciona el sexo</option>
                            <option selected value="<?php echo $alumno["sexo"];?>"></option>
                            <option value="0">Femenino</option>
                            <option value="1">Masculino</option>
                            <option value="2">Otro</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="registrar" class="btn btn-primary">
                        <a href="ConsultarAlumnos.php" class="btn btn-primary">cancelar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <footer class="text-center">
        <hr>
        CETIS107
    </footer>
</body>
</html>