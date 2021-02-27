function CalculoDNI()
{
    //Recogida de datos
    var dni = document.getElementById("dni").value;
    var letra = document.getElementById("letra").value;

    var restoArray = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
                 "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    
    //Control de validación de las entradas del usuario
    if(dni == "" || letra == "")
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

    else
    {
        //Cálculo de la letra del DNI
        var calculo = restoArray[dni % 23];
        var mostrarLetra = document.getElementById("mostrarLetra");
        mostrarLetra.innerHTML = "La letra del DNI es " + "<strong style=\"color:blue;\">"+ calculo + "</strong>";
        var mostrarMensaje = document.getElementById("escribirMensaje");

        //Si no coincide letra DNI
        if(calculo != letra.toUpperCase()){
            mostrarMensaje.innerHTML = "La letra introducida no es correcta.";
            mostrarMensaje.style.color = "red";
        }
        //Si coincide letra DNI muestra mensaje
        else{
            mostrarMensaje.innerHTML = "La letra introducida es correcta.";
            mostrarMensaje.style.color = "green";
        }
    }
}

function pulsarEnter(){
    if(event.key == "Enter"){
        CalculoDNI();
    }
    
}
