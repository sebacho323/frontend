var settings = {
  url: "http://localhost:8000/api/boletos/",
  method: "GET",
  timeout: 0,
};

$.ajax(settings).done(function (response) {
  crearTabla(response);
});

var client = [
  ["10001500", "Benito", "benito.com", "C/Falsa123"],
  ["10047500", "Dianita", "dianita.com", "C/Verdadera789"],
];

var tablaResultado = document.getElementById("tablaResultado");

function crearTabla(datosTabla) {
  var cuerpoTabla = document.getElementById("cuerpoTabla");

  for (const key in datosTabla) {
    var fila = document.createElement("tr");

    var descripcion = document.createElement("td");
    var precio = document.createElement("td");
    var stock = document.createElement("td");
    descripcion.appendChild(
      document.createTextNode(datosTabla[key]["descripcion"])
    );
    precio.appendChild(document.createTextNode(datosTabla[key]["precio"]));
    stock.appendChild(document.createTextNode(datosTabla[key]["stock"]));

    fila.appendChild(descripcion);
    fila.appendChild(precio);
    fila.appendChild(stock);

    cuerpoTabla.appendChild(fila);
  }

  document.body.appendChild(tabla);
}
