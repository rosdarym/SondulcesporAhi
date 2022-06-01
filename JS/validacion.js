function valida_envia() {
    //valido el nombre
    if (validaLetras(document.fcontacto.tcontacto.nombre.value == false)) {
        alert("Tiene que escribir su nombre");
        document.fcontacto.tcontacto.nombre.focus();
        return 0;
    }

    if (validarEmail(document.fcontacto.tcontacto.email.value) == false) {
        alert("Formato de Mail Incorrecta");
        document.fcontacto.tcontacto.telefono.focus();
        return 0;
    }

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fcontacto.submit();
}

function validarEmail(valor) {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor);

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero)
        return false;
    } else {
        //En caso contrario (Si era un número)
        return true;
    }
}

function validaLetras(valor) {
    var letters = /^[A-Za-z]+$/;
    if (valor.value.match(letters)) {
        return true;
    } else {
        return false;
    }
}
