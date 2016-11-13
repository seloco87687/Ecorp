function registrarAjax() {
    //alert("si entro a funcion registrarAjax");
    var nombre, correo, usuarios, ciudad, telefono, documento;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    ciudad = document.getElementById("ciudad").value;
    telefono = document.getElementById("telefono").value;
    documento = document.getElementById("documento").value;


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("txtHint").innerHTML = this.responseText;
            //this.resoponseText;
            alert("si ajax");
        }
    };
    xmlhttp.open("POST", "registrar.php?n=" + nombre + "&co=" + correo + "&cd" + ciudad + "&tel=" + telefono + "&doc" + documento, true);
    xmlhttp.send();
}