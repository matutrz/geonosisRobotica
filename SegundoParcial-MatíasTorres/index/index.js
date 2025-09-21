document.getElementById("inicioDeSesión").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById('usuario').value;
    var password = document.getElementById('contraseña').value;

    if (username=== 'Aria Medina' && password==='021') {
        var url = "../alumno/alumno.html?usuario=" + username;
        window.location.href = url;
    }
    else if (username=== 'Fausto Toledo' && password==='007'){
        var url = "../docente/docente.html?usuario=" + username;
        window.location.href = url;
    }
    else {
        alert("Usuario incorrecto");
    }
});

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

document.addEventListener('DOMContentLoaded', function () {
    if (username) {
        document.getElementById('saludo').textContent = '¡Saludos, ' + username + '!';
    } else {
        document.getElementById('saludo').textContent = 'Usuario desconocido';
    }
});

