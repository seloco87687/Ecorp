<?php

$conexion = mysqli_connect("localhost", "root", "", "bd_prueba") or die (mysqli_error());

if (!$conexion) {
    echo 'Error al conectar a la base de datos';
}
else {
    echo 'Conectado a la base de datos';
}

//Ingresar datos en base de datos
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$ciudad = $_POST["ciudad"];
$telefono = $_POST["telefono"];
$documento = $_POST["documento"];
// Consulta para insertar
$insertar = "INSERT INTO usuarios(nombre, , correo, , ciudad, telefono, documento) VALUES ('$nombre', '$correo', '$ciudad', '$telefono', '$documento' )";


//Ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
    echo '<script>
          alert("Error al registrarse");
          window.history.go(-1);
          </script>';
} else {
    echo '<script>
          alert("Registrado con exito");
          window.history.go(-1);
          </script>';
}
//Cerrar conexion
mysqli_close($conexion);

?>