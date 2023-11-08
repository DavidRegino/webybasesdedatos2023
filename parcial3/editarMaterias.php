<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Alumno</title>
    <link rel="stylesheet" href="css/bootstrap.css"> 
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>
    <?php 
        include 'menu.php'; 
        include 'conexion.php';

        $id = $_GET["id"];

        $sql = "SELECT * FROM materias WHERE id=".$id;

        $datos = $conexion->query($sql);
        
        $materias = $datos->fetch_assoc();

    ?>
    <div class="container">
        <div class="row">
            <div class="col-12 card m-4 p-4">
                <h2>Registrar Alumno</h2><hr>
                <form action="ActualizarAlumno.php" method="POST">
                    <input type="hidden" name="id" value="<?php echo $materias["id"]; ?>">
                    <div class="form-group">
                        <label for="">Nombre:</label>
                        <input value="<?php echo $materias["nombre"]; ?>" name="nombre" type="text" class="form-control" placeholder="Teclea el nombre del materias" required>
                    </div>
                    <div class="form-group">
                        <label for="">Semestre:</label>
                        <input value="<?php echo $materias["semestre"]; ?>" name="semestre" type="number" class="form-control" placeholder="Teclea el semestre" required>
                    </div>
                    <div class="form-group">
                        <label for="">Especialidad:</label>
                        <select name="especialidad" class="form-control" required>
                            <option value="">Selecciona el especialidad</option>
                            <option selected value="<?php echo $materias["especialidad"]; ?>"><?php echo $materias["especialidad"]; ?></option>
                            <option value="0">FEMENINO</option>
                            <option value="1">MASCULINO</option>
                            <option value="2">Prefiero no responder</option>
                        </select>
                    </div><br>
                    <div>
                        <input type="submit" value="Actualizar" class="btn btn-primary">
                        <a href="consultarMaterias.php" class="btn btn-danger">Cancelar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <footer class="text-center">
        <hr>
        CETIS 107 &copy; 2023
    </footer>

    <script src="js/bootstrap.js"></script>
</body>
</html>