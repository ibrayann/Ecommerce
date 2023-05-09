const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userLastName = document.getElementById("userLastName");
const userEmail = document.getElementById("userEmail");
const userDireccion = document.getElementById("userDireccion");
const userPassword = document.getElementById("userPassword");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertLastName = document.getElementById("alertLastName");
const alertEmail = document.getElementById("alertEmail");
const alertDireccion = document.getElementById("alertDireccion");
const alertPassword = document.getElementById("alertPassword");

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

  if (
    !regUserName.test(userName.value) ||
    !userName.value.trim() ||
    userName.value.length < 3
  ) {
    userName.classList.add("is-invalid");

    errores.push({
      tipo: alertName,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }

  if (
    !regUserName.test(userLastName.value) ||
    !userLastName.value.trim() ||
    userLastName.value.length < 3
  ) {
    userLastName.classList.add("is-invalid");

    errores.push({
      tipo: alertLastName,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    userLastName.classList.remove("is-invalid");
    userLastName.classList.add("is-valid");
    alertLastName.classList.add("d-none");
  }

  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    userEmail.classList.add("is-invalid");

    errores.push({
      tipo: alertEmail,
      msg: "Escriba un correo válido",
    });
  } else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
  }

  if (!userDireccion.value.trim() || userDireccion.value.length < 10) {
    userDireccion.classList.add("is-invalid");

    errores.push({
      tipo: alertDireccion,
      msg: "Formato no válido campo nombre, solo letras y minimo 3 caracteres",
    });
  } else {
    userDireccion.classList.remove("is-invalid");
    userDireccion.classList.add("is-valid");
    alertDireccion.classList.add("d-none");
  }

  if (!userPassword.value.trim() || userPassword.value.length < 10) {
    userPassword.classList.add("is-invalid");

    errores.push({
      tipo: alertPassword,
      msg: "Formato no válido campo nombre, solo letras y minimo 10 caracteres",
    });
  } else {
    userPassword.classList.remove("is-invalid");
    userPassword.classList.add("is-valid");
    alertPassword.classList.add("d-none");
  }

  if (errores.length !== 0) {
    pintarMensajeError(errores);
    return;
  }

  console.log(userName.value);
  console.log(userLastName.value);
  console.log(userEmail.value);
  console.log(userDireccion.value);
  console.log("Registrado con éxito");
  pintarMensajeExito();
});
