var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

document.addEventListener('DOMContentLoaded', function () {
    if (username) {
        document.getElementById('saludo').textContent = '¡Saludos, ' + username + '!';
        document.getElementById('textoBienvenidaDocente').textContent = 'Bienvenido/a ' + username + ', esta es tu página personal de docente.';
    } else {
        document.getElementById('saludo').textContent = 'Usuario desconocido';
    }
});