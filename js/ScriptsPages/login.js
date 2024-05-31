document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    let loggedUser = "";

    document.getElementById("submitLogin").addEventListener("click", function () {
        if (!validateForm()) {
            Swal.fire({
                title: 'Error!',
                text: 'El formulario no es valido',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            event.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
        } else {
            Swal.fire({
                title: 'Hola!',
                text: 'Bienvenido de vuelta, ' + loggedUser,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            console.log('El formulario es válido. Enviar datos...');
        }
    });

    // Función para validar todo el formulario
    const validateForm = () => {
        let isValid = true;
        isValid = validateEmailField('user', 'El correo electrónico no es válido') && isValid;
        isValid = validatePassField('pass', 'La contraseña es obligatoria') && isValid;
        return isValid;
    };

    const validatePassField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);
        const errorField = document.getElementById('errortext-pass');
        const value = field.value.trim();

        if (value === '') {
            errorField.innerText = "La contraseña es obligatoria";
            return false;
        } else {
            errorField.innerText = "";
            return true;
        }
    };

    const validateEmailField = (fieldId, errorMessage) => {
        // Obtiene el elemento del campo de correo electrónico mediante su ID
        const field = document.getElementById(fieldId);
        // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
        const email = field.value.trim();
        const errorField = document.getElementById('errortext-user');
        // Si el campo de correo electrónico está vacío
        if (email === '') {
            errorField.innerText = "El correo electrónico es obligatorio";
            field.focus();
            return false;
        } else if (!isEmail(email)) {
            errorField.innerText = "El email no es válido";
            field.focus();
            return false;
        } else {
            errorField.innerText = "";
            loggedUser = value;
            return true;
        }
    };

    // Función para validar si una cadena es una dirección de correo electrónico válida
    const isEmail = (email) => {
        // Expresión regular para validar el formato de correo electrónico
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Verifica si el correo electrónico cumple con el formato
        return re.test(email);
    };
});