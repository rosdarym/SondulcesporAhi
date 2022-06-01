function valida_envia() {
    //valido el nombres

    if (!validaLetras(document.fcontacto.nombre.value)) {
        alert("Tiene que escribir su nombre");
        document.fcontacto.nombre.focus();
        return false;
    }

    if (validarEmail(document.fcontacto.email.value) == false) {
        alert("Formato de Mail Incorrecta");
        document.fcontacto.email.focus();
        return false;
    }

    //el formulario se envia
    alert("Muchas gracias por contactarnos");
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
    if (valor.match(letters)) {
        return true;
    } else {
        return false;
    }
}
