const formulario = document.getElementById("registroProducto");

const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const marca = document.getElementById("marca");
const descripcion = document.getElementById("descripcion");

const alertSuccess = document.getElementById("alertSuccess");
const alertNombre = document.getElementById("alertNombre");
const alertPrecio = document.getElementById("alertPrecio");
const alertMarca = document.getElementById("alertMarca");
const alertDescripcion = document.getElementById("alertDescripcion");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  alertSuccess.classList.add("d-none");
  const errores = [];

  // validar nombre de usuario
  if (
    !regUserName.test(nombre.value) ||
    !nombre.value.trim() ||
    nombre.value.length < 3
  ) {
    nombre.classList.add("is-invalid");

    errores.push({
      tipo: alertNombre,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    nombre.classList.remove("is-invalid");
    nombre.classList.add("is-valid");
    alertNombre.classList.add("d-none");
  }

  if (!precio.value.trim() || precio.value.length < 3) {
    precio.classList.add("is-invalid");

    errores.push({
      tipo: alertPrecio,
      msg: "Valor debe ser mayor a 1000",
    });
  } else {
    precio.classList.remove("is-invalid");
    precio.classList.add("is-valid");
    alertPrecio.classList.add("d-none");
  }
  if (
    !regUserName.test(marca.value) ||
    !marca.value.trim() ||
    marca.value.length < 3
  ) {
    marca.classList.add("is-invalid");

    errores.push({
      tipo: alertMarca,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    marca.classList.remove("is-invalid");
    marca.classList.add("is-valid");
    alertMarca.classList.add("d-none");
  }

  if (
    !regUserName.test(descripcion.value) ||
    !descripcion.value.trim() ||
    descripcion.value.length < 20
  ) {
    descripcion.classList.add("is-invalid");

    errores.push({
      tipo: alertDescripcion,
      msg: "Formato no válido campo nombre, solo letras y minimo 20 caracteres",
    });
  } else {
    descripcion.classList.remove("is-invalid");
    descripcion.classList.add("is-valid");
    alertDescripcion.classList.add("d-none");
  }

  if (errores.length !== 0) {
    pintarMensajeError(errores);
    return;
  }
  console.log(nombre.value);
  console.log(precio.value);
  console.log(marca.value);
  console.log(descripcion.value);
  console.log("Producto creado con exito");
  pintarMensajeExito();
});
