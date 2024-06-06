//Verificar Nombre Completo
var nameInput = document.getElementById('nameId');
nameInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo del nombre no puede estar vacio.');
        alert('El campo del nombre no puede estar vacio.');
    }
    else{
        var name = event.target.value;
        var regex = /^[a-zA-Z\s]{6,}$/;
        if (!regex.test(name)) {
            Error(event.target, 'El campo nombre debe tener al menos 6 caracteres y un espacio.')
            alert('El campo nombre debe tener al menos 6 caracteres y un espacio.');
        }
        else{
            var space = name.indexOf(' ');
            if (space === -1){
                Error(event.target, 'El campo nombre debe tener al menos un espacio.')
                alert('El campo nombre debe tener al menos un espacio.');
            }
        }
    }
});

nameInput.addEventListener('focus', function(event) {
    //BONUS
    var subscriptionTitle = document.querySelector('.SubscriptionTitle');
    subscriptionTitle.textContent = ('Formulario de Suscripción');
    //
    event.target.value = '';
    focusError(event.target);
});

//Verificar Email
var emailInput = document.getElementById('emailId');
emailInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo del email no puede estar vacio.');
        alert('El campo del email no puede estar vacio.');
    }
    else{
        var email = event.target.value;
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(email)) {
            Error(event.target, 'El campo email no tiene un formato valido.')
            alert('El campo email no tiene un formato valido.');
        }
    }
});

emailInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Contraseña
var passwordInput = document.getElementById('passwordId');
passwordInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo de la contraseña no puede estar vacio.');
        alert('El campo de la contraseña no puede estar vacio.');
    }
    else{
        var password = event.target.value;
        var regex = /^[a-zA-Z0-9]{8,}$/;
        if (!regex.test(password)) {
            Error(event.target, 'El campo contraseña debe tener al menos 8 caracteres.')
            alert('El campo contraseña debe tener al menos 8 caracteres.');
        }
        else{
            var numbers = password.match(/[0-9]/g);
            var letters = password.match(/[a-zA-Z]/g);
            if (numbers === null || letters === null){
                Error(event.target, 'El campo contraseña debe tener al menos un numero y una letra.')
                alert('El campo contraseña debe tener al menos un numero y una letra.');
            }
        }
    }
});

passwordInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Edad
var ageInput = document.getElementById('ageId');
ageInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo de la edad no puede estar vacio.');
        alert('El campo de la edad no puede estar vacio.');
    }
    else{
        var age = event.target.value;
        var regex = /^[0-9]*$/;
        if (!regex.test(age)) {
            Error(event.target, 'El campo edad solo puede contener numeros.')
            alert('El campo edad solo puede contener numeros.');
        }
        else{
            if (age < 18) {
                Error(event.target, 'El campo edad debe ser mayor a 18.')
                alert('El campo edad debe ser mayor a 18.');
            }
        }
    }
});

ageInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Telefono
var phoneInput = document.getElementById('phonenumberId');
phoneInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo del telefono no puede estar vacio.');
        alert('El campo del telefono no puede estar vacio.');
    }
    else{
        var phone = event.target.value;
        var regex = /^[0-9]*$/;
        if (!regex.test(phone)) {
            Error(event.target, 'El campo telefono solo puede contener numeros.')
            alert('El campo telefono solo puede contener numeros.');
        }
        else{
            var space = phone.indexOf(' ');
            if (space !== -1){
                Error(event.target, 'El campo telefono no puede tener espacios.')
                alert('El campo telefono no puede tener espacios.');
            }
            else{
                var guion = phone.indexOf('-');
                var parentesis = phone.indexOf('(');
                if (guion !== -1 || parentesis !== -1){
                    Error(event.target, 'El campo telefono no puede tener guiones ni paréntesis.')
                    alert('El campo telefono no puede tener guiones ni paréntesis.');
                }
                else{
                    if (phone.length < 7) {
                        Error(event.target, 'El campo telefono debe tener al menos 7 caracteres.')
                        alert('El campo telefono debe tener al menos 7 caracteres.');
                    }
                }
            }
        }
    }
});

phoneInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Direccion
var addressInput = document.getElementById('addressId');
addressInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo de la direccion no puede estar vacio.');
        alert('El campo de la direccion no puede estar vacio.');
    }
    else{
        //Verificar que la direccion tenga al menos 5 caracteres
        var address = event.target.value;
        if (address.length < 5) {
            Error(event.target, 'El campo direccion debe tener al menos 5 caracteres.')
            alert('El campo direccion debe tener al menos 5 caracteres.');
        }
        else{
            var space = address.indexOf(' ');
            if (space === -1){
                Error(event.target, 'El campo direccion debe tener al menos un espacio.')
                alert('El campo direccion debe tener al menos un espacio.');
            }
            else{
                var numbers = address.match(/[0-9]/g);
                var letters = address.match(/[a-zA-Z]/g);
                if (numbers === null || letters === null){
                    Error(event.target, 'El campo direccion debe tener al menos un numero y una letra.')
                    alert('El campo direccion debe tener al menos un numero y una letra.');
                }
            }
        }
    }
});

addressInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Ciudad
var cityInput = document.getElementById('cityId');
cityInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo de la ciudad no puede estar vacio.');
        alert('El campo de la ciudad no puede estar vacio.');
    }
    else{
        var city = event.target.value;
        var regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(city)) {
            Error(event.target, 'El campo ciudad solo puede contener letras y espacios.')
            alert('El campo ciudad solo puede contener letras y espacios.');
        }
        else{
            if (city.length < 3) {
                Error(event.target, 'El campo ciudad debe tener al menos 3 caracteres.')
                alert('El campo ciudad debe tener al menos 3 caracteres.');
            }
        }
    }
});

cityInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Código Postal
var postalCodeInput = document.getElementById('postalcodeId');
postalCodeInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo del codigo postal no puede estar vacio.');
        alert('El campo del codigo postal no puede estar vacio.');
    }
    else{
        var postalCode = event.target.value;
        var regex = /^[0-9]*$/;
        if (!regex.test(postalCode)) {
            Error(event.target, 'El campo codigo postal solo puede contener numeros.')
            alert('El campo codigo postal solo puede contener numeros.');
        }
        else{
            if (postalCode.length < 3) {
                Error(event.target, 'El campo codigo postal debe tener al menos 3 caracteres.')
                alert('El campo codigo postal debe tener al menos 3 caracteres.');
            }
        }
    }
});

postalCodeInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar DNI
var dniInput = document.getElementById('nrodocumentId');
dniInput.addEventListener('blur', function(event) {
    if (event.target.value === '') {
        Error(event.target, 'El campo del DNI no puede estar vacio.');
        alert('El campo del DNI no puede estar vacio.');
    }
    else{
        var dni = event.target.value;
        var regex = /^[0-9]*$/;
        if (!regex.test(dni)) {
            Error(event.target, 'El campo DNI solo puede contener numeros.')
            alert('El campo DNI solo puede contener numeros.');
        }
        else{
            if (dni.length < 7 || dni.length > 8) {
                Error(event.target, 'El campo DNI debe tener entre 7 y 8 caracteres.')
                alert('El campo DNI debe tener entre 7 y 8 caracteres.');
            }
        }
    }
});

dniInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Submit
var submitButton = document.getElementById('submitId');
submitButton.addEventListener('click', function(event) {
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var age = ageInput.value;
    var phone = phoneInput.value;
    var address = addressInput.value;
    var city = cityInput.value;
    var postalCode = postalCodeInput.value;
    var dni = dniInput.value;

    if (name === '' || email === '' || password === '' || age === '' || phone === '' || address === '' || city === '' || postalCode === '' || dni === '') {
        alert('Todos los campos son obligatorios.');
    }
    else{
        alert('Formulario enviado con exito.');
    }
});

//Errores
function focusError(input){
    Error(input, '');
}

function Error (input, message){
    var errorElement = document.getElementById('error-' + input.id);
    if (message){
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
}

//BONUS
var nameInput = document.getElementById('nameId');
var subscriptionTitle = document.querySelector('.SubscriptionTitle');
nameInput.addEventListener('keydown', function(event) {
    subscriptionTitle.textContent = ('Hola ' + event.target.value);
});