$(document).ready(function(){
    $("#form1").submit(function(e){
        e.preventDefault();
        var letra = nomb.value.charAt(0);
        var nombre = $("#nom").val();
        let msj = "";
        let entrar = false;

        if(nombre.trim().length <4 || nombre.trim().length >7){
            msj+="El nombre no tiene la longitud válida <br>";
            entrar = true;
        }

        if (entrar){
            $("mensajes").html(msj);
        }
        else{
            $("mensajes").html("Formulario Enviado")
        }
        
        if(!esMayuscula(letra)){
            mensajesAcotados+="La letra no es mayúscula <br>"
            entrar = true; //Cada vez que ocurre un error entrar se vuelve true
        }
        function esMayuscula(letra){
            return letra == letra.toUpperCase();
        }

    })



})


