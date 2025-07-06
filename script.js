const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const confirmar_contraseña = document.getElementById("confirmar_contraseña");
const edad = document.getElementById("edad");
const recepcion = document.getElementById("recepcion");
const formulario = document.getElementById("formulario");


function validarNombre() {
    const valido = nombre.value.trim().length >= 3;
    document.getElementById("errorNombre").textContent = valido ? "" : "El nombre debe tener al menos 3 caracteres.";
    return valido;
}


function validarCorreo() {
    const valido = correo.value.includes("@") && correo.value.includes(".");
    document.getElementById("errorCorreo").textContent = valido ? "" : "Ingrese un correo electrónico válido.";
    return valido;
}


function validarContraseña() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/; // al menos un número y un caracter especial
    const valido = contraseña.value.length >= 8 && regex.test(contraseña.value);
    document.getElementById("errorContraseña").textContent = valido ? "" : "La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.";
    return valido;
}


function validarConfirmarContraseña() {
    const valido = confirmar_contraseña.value === contraseña.value && contraseña.value !== "";
    document.getElementById("errorConfirmarContraseña").textContent = valido ? "" : "Las contraseñas no coinciden.";
    return valido;
}


function validarEdad() {
    const edadNum = parseInt(edad.value);
    const valido = !isNaN(edadNum) && edadNum >= 18;
    document.getElementById("errorEdad").textContent = valido ? "" : "Debes tener al menos 18 años.";
    return valido;
}


function validarRecepcion() {
    const valido = recepcion.value.trim().length >= 2;
    document.getElementById("errorRecepcion").textContent = valido ? "" : "Este campo es obligatorio.";
    return valido;
}


function validarFormulario() {
    const nombreVal = validarNombre();
    const correoVal = validarCorreo();
    const passVal = validarContraseña();
    const confirmarVal = validarConfirmarContraseña();
    const edadVal = validarEdad();
    const recepcionVal = validarRecepcion();

    return nombreVal && correoVal && passVal && confirmarVal && edadVal && recepcionVal;
}


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validarFormulario()) {
        alert("Formulario enviado con éxito.");
        formulario.reset();
    }
});
