function validar() {
    var nombre, correo, ciudad, telefono, expresion, documento;
    nombre = document.getElementById("nombre").value;
    correos = document.getElementById("correo").value;
    ciudad = document.getElementById("ciudad").value;
    telefono = document.getElementById("telefono").value;
    documento = document.getElementById("documento").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || correo === "" || ciudad === "" || telefono === "" || documento === "") {
        alert("Todos los campos son obligatorios")
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo")
        return false;
    } else if (apellidos.length > 80) {
        alert("El apellido es muy largo")
        return false;
    } else if (correo.length > 100) {
        alert("El correo es muy largo")
        return false;
    } else if (!expresion.test(correo)) {
        alert("El correo no es valido")
        return false;
    } else if (usuarios.length > 20) {
        alert("El usuario es muy largo")
        return false;
    } else if (telefono.length > 10) {
        alert("El  es muy largo")
        return false;
    } else if (isNaN(telefono)) {
        alert("El telefono ingresado no es un numero")
        return false;
    }
}