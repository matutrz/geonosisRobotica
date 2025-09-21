var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

document.addEventListener('DOMContentLoaded', function () {
    if (username) {
        document.getElementById('saludo').textContent = '¡Saludos, ' + username + '!';
        document.getElementById('textoBienvenidaAlumno').textContent = 'Bienvenido/a ' + username + ', esta es tu página personal de estudiante.';
    } else {
        document.getElementById('saludo').textContent = 'Usuario desconocido';
    }
});



document.getElementById("inscripciones").addEventListener("submit", function (event) {
    event.preventDefault();

    var actividades = document.getElementById("opcionesDeActividad");
    var horario = document.getElementById("opcionesDeHorario");
    var email = document.getElementById("inscripciónEmail");

    if (actividades.value && horario.value && email.value) {
        alert("Se ha reservado la asistencia correctamente")
    }
    else {
        alert("Verifique los datos del formulario")
    }
})