<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrar Materia</title>
    <link rel="stylesheet" href="css/bootstrap.css"> 
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>
    <?php include 'menu.php'; ?>
    
    <div class="container">
        <div class="row">
            <div class="col-12 card m-4 p-4">
                <h2>Registrar Materia</h2><hr>
                <form action="GuardarRegistro.php" method="POST">
                    <div class="form-group">
                        <label for="">Nombre:</label>
                        <input name="nombre" type="text" class="form-control" placeholder="Teclea el nombre del materia" required>
                    </div>
                    <div class="form-group">
                        <label for="">Semestre:</label>
                        <input name="nc" type="number" class="form-control" placeholder="Teclea el número de semestre" required>
                    </div>
                    <div class="form-group">
                        <label for="">Especialidad:</label>
                        <select name="turno" class="form-control" required>
                            <option value="">Selecciona la especialidad</option>
                            <option value="PROGRAMACIÓN">PROGRAMACIÓN</option>
                            <option value="OFIMÁTICA">OFIMÁTICA</option>
                            <option value="CONSTRUCCIÓN">CONSTRUCCIÓN</option>
                            <option value="CONTABILIDAD">CONTABILIDAD</option>
                            <option value="ELECTRÓNICA">ELECTRÓNICA</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Registrar" class="btn btn-primary">
                        <a href="consultarAlumnos.php" class="btn btn-danger">Cancelar</a>
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