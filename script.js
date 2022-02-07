
var registrar = document.getElementById("registrar");

registrar.addEventListener("click", function () {
  var nombre = document.getElementById("nombre");
  var correo = document.getElementById("correo");
  var telefono = document.getElementById("telefono");

  var settings = {
    url: "http://localhost:8000/api/usuarios/",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      nombre: nombre.value,
      correo: correo.value,
      telefono: telefono.value,
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    var respuesta = document.getElementById("respuesta");
    var p = document.createElement("p");
    var texto = document.createTextNode("Usuario registrado correctamente");
    p.append(texto);
    respuesta.append(p);
  });

  nombre.value = "";
  correo.value = "";
  telefono.value = "";
});
