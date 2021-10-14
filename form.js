console.log("Por favor digite el campo usuario");

/*
function checkUsername(valor){
    console.log("Por favor digite el campo usuario");
    var valor= document.frmLogin.txtusuario.value;
    if(valor==""){
        alert("Por favor digite el campo usuario");
        document.frmLogin.txtusuario.focus(); //parpadea el cursor
        console.log("Por favor digite el campo usuario");
        return false;
    }

    if(valor.length > 3){
        alert("El usuario es invalido por favor rectifique");
        document.frmLogin.txtusuario.focus();
        return false;
    }
    
}
*


/*
function checkCorreo(valor){
    var valor = document.frmLogin.correo.value;
    var exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(valor==""){
        alert("Por favor digite el mail");
        document.frmLogin.correo.focus();
        return false;
    }

    if (!(exp.test(valor))== false) {
        alert("el mail tiene caracteres ilegales");
        return false;

    }
}

function checkContrasena(valor){
    var valor = document.frmLogin.txtpass.value;
    var exp = /[\W_]/;

    if (valor == ""){
        alert("Por favor digite la contraseña")
        document.frmLogin.txtpass.focus();
        return false;
    }else if(valor.length >3){
        alert("La contraseña debe ser de 3 caracteres");
        document.frmLogin.txtpass.focus();
        return false;
    }else if (exp.test(valor)){
        alert("la constraseña tiene caracteres ilegales")
        document.frmLogin.txtpass.focus();
        return false;
    }else{
        alert("bienvenido al sistema")
        return true
    }
}
    /*    if(validar_usuario(user,pws)){
        return true;
        }else{
            return false;
        }

        


function checkConfirmContrasena(valor1, valor2){

}
*/








