function CalculoDNI()
{
    var dni = document.getElementById("dni").value;
    var letra = document.getElementById("letra").value;

    var restoArray = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
                 "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    
    //Cálculo de la letra del DNI
    var calculo = restoArray[dni % 23];
    var calculoLetra = document.getElementById("resultadoLetra");

    //Si no coincide letra DNI
    if(calculo != letra.toUpperCase()){
        calculoLetra.innerHTML = "Error. La letra correcta es " + calculo;
        calculoLetra.style.color = "red";
    }

    else{
        calculoLetra.innerHTML = "Correcto. La letra es " + calculo;
        calculoLetra.style.color = "green";
    }

    //Control de validación de las entradas del usuario

    if(dni == "" || letra == "")
    {
        alert("No puede haber campos vacíos");
        break;
    }

    else if(isNaN(dni))
    {
        alert("DNI tiene que ser una cadena de números");
        document.getElementById("dni").value = "";
        break;
    }

    else if(isNaN(letra) == false)
    {
        alert("Introduzca una letra.");
        document.getElementById("letra").value = "";
        break;
    }

}