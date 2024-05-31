document.addEventListener('DOMContentLoaded', () => {
    let loggedUser
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
                title: 'Registro exitoso!',
                text: 'Gracias por anotarte ' + loggedUser + ' te avisaremos cuando el servicio esté disponible.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
        }
    });

    // Función para validar todo el formulario
    const validateForm = () => {
        let isValid = true;
        
        isValid = validateFirstNameField() && isValid;
        isValid = validateLastNameField() && isValid;
        isValid = validateUserField() && isValid;

        isValid = validatePassField('La contraseña es obligatoria') && isValid;
        isValid = validateConfirmPassField('Confirmar debería ser igual que tu contraseña') && isValid;
        
        isValid = validateAcceptTerms() && isValid;

        return isValid;
    };

    const validateFirstNameField = () => {
        const field = document.getElementById("fname");
        const valor = field.value.trim();
        const errorField = document.getElementById('errortext-nombre');
        // Si el campo de correo electrónico está vacío
        if (valor === '') {
            errorField.innerText = "El nombre es obligatorio";
            field.focus();
            return false;
        } else {
            errorField.innerText = "";
            loggedUser = valor;
            return true;
        }
    };
    const validateLastNameField = () => {
        const field = document.getElementById("lname");
        const valor = field.value.trim();
        const errorField = document.getElementById('errortext-apellido');
        if (valor === '') {
            errorField.innerText = "El apellido es obligatorio";
            field.focus();
            return false;
        } else {
            errorField.innerText = "";
            return true;
        }
    };
    const validateUserField = () => {
        const field = document.getElementById("user");
        const valor = field.value.trim();
        const errorField = document.getElementById('errortext-user');
        // Si el campo de correo electrónico está vacío
        if (valor === '') {
            errorField.innerText = "El correo electrónico es obligatorio";
            field.focus();
            return false;
        } else if (!isEmail(valor)) {
            errorField.innerText = "El email no es válido";
            field.focus();
            return false;
        } else {
            errorField.innerText = "";
            return true;
        }
    };
    const validatePassField = (errorMessage) => {
        const field = document.getElementById("pass");
        const errorField = document.getElementById('errortext-pass');
        const value = field.value.trim();

        if (value === '') {
            errorField.innerText = errorMessage;
            return false;
        } else {
            errorField.innerText = "";
            return true;
        }
    };
    const validateConfirmPassField = (errorMessage) => {
        const inputPassField = document.getElementById("pass");
        const passFieldValue = inputPassField.value.trim();

        const field = document.getElementById("confirm_pass");
        const value = field.value.trim();
        const errorField = document.getElementById('errortext-confirmarpass');


        if (value === '') {
            errorField.innerText = "";
            return true
        } else if (!(value === passFieldValue)) {
            errorField.innerText = errorMessage;
            return false;
        } else {
            errorField.innerText = "";
            return true;
        }
    };
    const validateAcceptTerms = () => {
        const field = document.getElementById("accept");
        const valor = field.checked;
        const errorField = document.getElementById('errortext-aceptar');
        // Si el campo de correo electrónico está vacío
        if (!valor) {
            errorField.innerText = "Tenés que aceptar los terminos";
            field.focus();
            return false;
        } else {
            errorField.innerText = "";
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