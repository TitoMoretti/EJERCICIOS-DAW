//Verificar que el localStorage esté disponible.
window.onload = function() {
    var formData = localStorage.getItem('formData');
    if (formData) {
        formData = JSON.parse(formData);
        nameInput.value = formData.name;
        emailInput.value = formData.email;
        passwordInput.value = formData.password;
        ageInput.value = formData.age;
        phoneInput.value = formData.phone;
        addressInput.value = formData.address;
        cityInput.value = formData.city;
        postalCodeInput.value = formData.postalCode;
        dniInput.value = formData.dni;
    }
    else{
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        ageInput.value = '';
        phoneInput.value = '';
        addressInput.value = '';
        cityInput.value = '';
        postalCodeInput.value = '';
        dniInput.value = '';
    }
};

//Verificar Nombre Completo
var nameInput = document.getElementById('nameId');
nameInput.addEventListener('blur', function() {
    verificarNombreCompleto();
});

function verificarNombreCompleto () {
    var name = nameInput.value;
    if(name === ''){
        Error(nameInput, 'El campo del Nombre no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[a-zA-Z\s]{6,}$/;
        if (!regex.test(name)) {
            Error(nameInput, 'El campo del Nombre debe tener al menos 6 caracteres sin números.')
            return false;
        }
        else{
            var space = name.indexOf(' ');
            if (space === -1){
                Error(nameInput, 'El campo del Nombre debe tener al menos un espacio.')
                return false;
            }
            else{
                var subscriptionTitle = document.querySelector('.SubscriptionTitle');
                subscriptionTitle.textContent = ('Hola ' + name);
                return true;
            }
        }
    }
}

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
emailInput.addEventListener('blur', function() {
    verificarEmail();
});

function verificarEmail(){
    var email = emailInput.value;
    if(email === ''){
        Error(emailInput, 'El campo del Email no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(email)) {
            Error(emailInput, 'El campo del Email no tiene un formato válido.')
            return false;
        }
        else{
            return true;
        } 
    }
}

emailInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Contraseña
var passwordInput = document.getElementById('passwordId');
passwordInput.addEventListener('blur', function() {
    verificarContraseña();
});

function verificarContraseña(){
    var password = passwordInput.value;
    if(password === ''){
        Error(passwordInput, 'El campo de la Contraseña no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[a-zA-Z0-9]{8,}$/;
        if (!regex.test(password)) {
            Error(passwordInput, 'El campo de la Contraseña debe tener al menos 8 caracteres.')
            return false;
        }
        else{
            var numbers = password.match(/[0-9]/g);
            var letters = password.match(/[a-zA-Z]/g);
            if (numbers === null || letters === null){
                Error(passwordInput, 'El campo de la Contraseña debe tener al menos un número y una letra.')
                return false;
            }
            else{
                return true;
            }
        }
    }
}

passwordInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Edad
var ageInput = document.getElementById('ageId');
ageInput.addEventListener('blur', function() {
    verificarEdad();
});

function verificarEdad(){
    var age = ageInput.value;
    if(age === ''){
        Error(ageInput, 'El campo de la Edad no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[0-9]*$/;
        if (!regex.test(age)) {
            Error(ageInput, 'El campo de la Edad solo puede contener números.')
            return false;
        }
        else{
            if (age < 18) {
                Error(ageInput, 'El campo de la Edad debe ser mayor a 18.')
                return false;
            }
            else{
                return true;
            }
        }
    }
}

ageInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Teléfono
var phoneInput = document.getElementById('phonenumberId');
phoneInput.addEventListener('blur', function() {
    verificarTeléfono();
});

function verificarTeléfono(){
    var phone = phoneInput.value;
    if(phone === ''){
        Error(phoneInput, 'El campo del Teléfono no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[0-9]*$/;
        if (!regex.test(phone)) {
            Error(phoneInput, 'El campo del Teléfono solo puede contener números.')
            return false;
        }
        else{
            var space = phone.indexOf(' ');
            if (space !== -1){
                Error(phoneInput, 'El campo del Teléfono no puede tener espacios.')
                return false;
            }
            else{
                var guion = phone.indexOf('-');
                var parentesis = phone.indexOf('(');
                if (guion !== -1 || parentesis !== -1){
                    Error(phoneInput, 'El campo del Teléfono no puede tener guiones ni paréntesis.')
                    return false;
                }
                else{
                    if (phone.length < 7) {
                        Error(phoneInput, 'El campo del Teléfono debe tener al menos 7 caracteres.')
                        return false;
                    }
                    else{
                        return true;
                    }
                }
            }
        }
    }
}

phoneInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Direccion
var addressInput = document.getElementById('addressId');
addressInput.addEventListener('blur', function() {
    verificarDirección();
});

function verificarDirección(){
    var address = addressInput.value;
    if(address === ''){
        Error(addressInput, 'El campo de la Dirección no puede estar vacio.')
        return false;
    }
    else{
        if (address.length < 5) {
            Error(addressInput, 'El campo de la Dirección debe tener al menos 5 caracteres.')
            return false;
        }
        else{
            var space = address.indexOf(' ');
            if (space === -1){
                Error(addressInput, 'El campo Dirección debe tener al menos un espacio.')
                return false;
            }
            else{
                var numbers = address.match(/[0-9]/g);
                var letters = address.match(/[a-zA-Z]/g);
                if (numbers === null || letters === null){
                    Error(addressInput, 'El campo de la Dirección debe tener al menos un número y una letra.')
                    return false;
                }
                else{
                    return true;
                }
            }
        }
    }
}

addressInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Ciudad
var cityInput = document.getElementById('cityId');
cityInput.addEventListener('blur', function() {
    verificarCiudad();
});

function verificarCiudad(){
    var city = cityInput.value;
    if(city === ''){
        Error(cityInput, 'El campo de la Ciudad no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(city)) {
            Error(cityInput, 'El campo de la Ciudad solo puede contener letras y espacios.')
            return false;
        }
        else{
            if (city.length < 3) {
                Error(cityInput, 'El campo de la Ciudad debe tener al menos 3 caracteres.')
                return false;
            }
            else{
                return true;
            }
        }
    }
}

cityInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Código Postal
var postalCodeInput = document.getElementById('postalcodeId');
postalCodeInput.addEventListener('blur', function() {
    verificarCódigoPostal();
});

function verificarCódigoPostal(){
    var postalCode = postalCodeInput.value;
    if(postalCode === ''){
        Error(postalCodeInput, 'El campo del Código Postal no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[0-9]*$/;
        if (!regex.test(postalCode)) {
            Error(postalCodeInput, 'El campo del Código Postal solo puede contener números.')
            return false;
        }
        else{
            if (postalCode.length < 3) {
                Error(postalCodeInput, 'El campo del Código Postal debe tener al menos 3 caracteres.')
                return false;
            }
            else{
                return true;
            }
        }
    }
}

postalCodeInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar DNI
var dniInput = document.getElementById('nrodocumentId');
dniInput.addEventListener('blur', function() {
    verificarDNI();
});

function verificarDNI(){
    var dni = dniInput.value;
    if(dni === ''){
        Error(dniInput, 'El campo del DNI no puede estar vacio.')
        return false;
    }
    else{
        var regex = /^[0-9]*$/;
        if (!regex.test(dni)) {
            Error(dniInput, 'El campo del DNI solo puede contener números.')
            return false;
        }
        else{
            if (dni.length < 7 || dni.length > 8) {
                Error(dniInput, 'El campo del DNI debe tener entre 7 y 8 caracteres.')
                return false;
            }
            else{
                return true;
            }
        }
    }
}

dniInput.addEventListener('focus', function(event) {
    event.target.value = '';
    focusError(event.target);
});

//Verificar Submit
var submitButton = document.getElementById('submitId');
var éxito = false;
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
        event.preventDefault();
        localStorage.clear();
        contentModal('Error', 'Por favor complete todos los campos obligatorios.', '');
    }
    else{
        if(!verificarNombreCompleto()){
            event.preventDefault();
            errorValidación(nameInput);
        }
        else{
            if(!verificarEmail()){
                event.preventDefault();
                errorValidación(emailInput);
            }
            else{
                if(!verificarContraseña()){
                    event.preventDefault();
                    errorValidación(passwordInput);
                }
                else{
                    if(!verificarEdad()){
                        event.preventDefault();
                        errorValidación(ageInput);
                    }
                    else{
                        if(!verificarTeléfono()){
                            event.preventDefault();
                            errorValidación(phoneInput);
                        }
                        else{
                            if(!verificarDirección()){
                                event.preventDefault();
                                errorValidación(addressInput);
                            }
                            else{
                                if(!verificarCiudad()){
                                    event.preventDefault();
                                    errorValidación(cityInput);
                                }
                                else{
                                    if(!verificarCódigoPostal()){
                                        event.preventDefault();
                                        errorValidación(postalCodeInput);
                                    }
                                    else{
                                        if(!verificarDNI()){
                                            event.preventDefault();
                                            errorValidación(dniInput);
                                        }
                                        else{
                                            event.preventDefault();
                                            éxito = true;
                                            var formData = {
                                                name: name,
                                                email: email,
                                                password: password,
                                                age: age,
                                                phone: phone,
                                                address: address,
                                                city: city,
                                                postalCode: postalCode,
                                                dni: dni
                                            };
                                            localStorage.setItem('formData', JSON.stringify(formData));
                                            contentModal('Datos guardados', 'Los datos del formulario se han guardado exitosamente en el localStorage:', JSON.stringify(formData));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});

//Error de validación
function errorValidación(input){
    localStorage.clear();
    var errorElement = document.getElementById('error-' + input.id);
    var mensaje = errorElement.textContent + ' Por favor, verifique el campo correspondiente y vuelva a intentarlo.';
    contentModal('Error', mensaje, '');
}

//Mostrar el modal con el mensaje de error o éxito
function contentModal(título, mensaje, localStorage){
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';
    var modalTitle = document.querySelector('.modal h2');
    modalTitle.textContent = título;
    var modalMessage = document.querySelector('.modal p');
    modalMessage.textContent = mensaje;
    var modalLocalStorage = document.querySelector('.modal p.localStorage');
    modalLocalStorage.textContent = localStorage;
}

//Cerrar Modal
var closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', function() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
    if(éxito){
        submitButton.form.submit();
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