const formulario = document.getElementById("productEdit");

const nombreProduct = document.getElementById("nombreProduct");
const precioProduct = document.getElementById("precioProduct");
const marcaProduct = document.getElementById("marcaProduct");
const descripProduct = document.getElementById("descripProduct");

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
  alertSuccess.textContent = "Producto editado con éxito";
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

  if (
    !regUserName.test(nombreProduct.value) ||
    !nombreProduct.value.trim() ||
    nombreProduct.value.length < 3
  ) {
    nombreProduct.classList.add("is-invalid");

    errores.push({
      tipo: alertNombre,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    nombreProduct.classList.remove("is-invalid");
    nombreProduct.classList.add("is-valid");
    alertNombre.classList.add("d-none");
  }

  if (!precioProduct.value.trim() || precioProduct.value.length < 3) {
    precioProduct.classList.add("is-invalid");

    errores.push({
      tipo: alertPrecio,
      msg: "Valor debe ser mayor a 1000",
    });
  } else {
    precioProduct.classList.remove("is-invalid");
    precioProduct.classList.add("is-valid");
    alertPrecio.classList.add("d-none");
  }
  if (
    !regUserName.test(marcaProduct.value) ||
    !marcaProduct.value.trim() ||
    marcaProduct.value.length < 3
  ) {
    marcaProduct.classList.add("is-invalid");

    errores.push({
      tipo: alertMarca,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    marcaProduct.classList.remove("is-invalid");
    marcaProduct.classList.add("is-valid");
    alertMarca.classList.add("d-none");
  }

  if (!descripProduct.value.trim() || descripProduct.value.length < 20) {
    descripProduct.classList.add("is-invalid");

    errores.push({
      tipo: alertDescripcion,
      msg: "Formato no válido campo nombre, solo letras y minimo 20 caracteres",
    });
  } else {
    descripProduct.classList.remove("is-invalid");
    descripProduct.classList.add("is-valid");
    alertDescripcion.classList.add("d-none");
  }

  if (errores.length !== 0) {
    pintarMensajeError(errores);
    return;
  }
  console.log(nombreProduct.value);
  console.log(marcaProduct.value);
  console.log(precioProduct.value);
  console.log(descripProduct.value);
  console.log("Producto editado con exito");
  pintarMensajeExito();
});
