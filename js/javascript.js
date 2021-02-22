function CalculoDNI()
{
    var dni = document.getElementById("dni").value;
    /*alert(dni.toUpperCase());*/
    var letra = document.getElementById("letra").value;
    var resto = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
                 "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    //Control de validación de las entradas del usuario
    if(dni == "" && letra == "")
    {
        alert("No puede haber campos vacíos");
    }

    else if(isNaN(dni))
    {
        alert("DNI tiene que ser una cadena de números");
        document.getElementById("dni").value = "";
    }

    else if(isNaN(letra) == false)
    {
        alert("Introduzca una letra.");
        document.getElementById("letra").value = "";
    }



}