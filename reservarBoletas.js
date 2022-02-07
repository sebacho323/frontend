var resultado_reservas;
var resultado_usuarios;
var resultado_boletas;

var registrar = document.getElementById('Reservar');

function consultaReserva() {
  var settings = {
    async: false,
    url: "http://localhost:8000/api/reservas/",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    resultado_reservas = response;
  });
}

function consultaUsuarios() {
  var settings = {
    async: false,
    url: "http://localhost:8000/api/usuarios/",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    resultado_usuarios = response;
  });
}

function consultaBoletas() {
  var settings = {
    async: false,
    url: "http://localhost:8000/api/boletos/",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    resultado_boletas = response;
  });
}

function AgregarSelect(valor, texto, id) {
  const $selectUsuario = document.getElementById(id);
  const option = document.createElement("option");
  option.value = valor;
  option.text = texto;
  $selectUsuario.appendChild(option);
}

consultaReserva();
consultaUsuarios();
consultaBoletas();

for (const key in resultado_usuarios) {
  AgregarSelect(
    resultado_usuarios[key]["id"],
    resultado_usuarios[key]["nombre"],
    "usuario"
  );
}

for (const key in resultado_boletas) {
  AgregarSelect(
    resultado_boletas[key]["id"],
    resultado_boletas[key]["descripcion"],
    "boletas"
  );
}

registrar.addEventListener('click', function () {
    
    var usuario = document.getElementById('usuario');
    var boleta = document.getElementById('boletas');
    var cantidad = document.getElementById('cantidad');

    var settings = {
        "url": "http://localhost:8000/api/reservas",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "id_usuario": usuario.value,
          "id_boleta": boleta.value,
          "cantidad": cantidad.value
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

})
