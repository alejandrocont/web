var nomb = document.getElementById("nom");
var correo = document.getElementById("correo");
var msj = document.getElementById("mensajes");

const form = document.getElementById("form1");
//Funciones de flecha e=>, que se hace de manera más sencilla y rápida, tiene el mismo uso de una función
//normal
form.addEventListener("submit", e=>{ 

    e.preventDefault();
    let mensajesAcotados ="";
    let entrar = false;

    if(nomb.value.length<4 || nomb.value.length>7){
        mensajesAcotados +="El nombre no tiene la longitud válida <br>";
        entrar = true;

    }

    var letra = nomb.value.charAt(0);
    if(!esMayuscula(letra)){
        mensajesAcotados+="La letra no es mayúscula <br>"
        entrar = true; //Cada vez que ocurre un error entrar se vuelve true
    }

    if (entrar){
        msj.innerHTML = mensajesAcotados;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

});

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}