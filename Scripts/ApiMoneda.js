$.getJSON("https://mindicador.cl/api", function (data) {
  //var dailyIndicators = data;
  $("#dolar").text("El valor del dolar hoy es de $" + data.uf.valor);
  $("#euro").text("El valor del euro hoy es de $" + data.dolar.valor);
  $("#bitcoin").text("El valor del bitcoin hoy es de $" + data.bitcoin.valor);
}).fail(function () {
  console.log("Error al consumir la API!");
});
