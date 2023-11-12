//pre-entrega3

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  valorInputs();
  usuarioValido();
});

const valorInputs = () => {
  // tomamos valor de correo
  const inputEmail = document.getElementById("email").value;
  // tomamos valor de contraseña
  const inputPassword = document.getElementById("password").value;
  return {
    inputEmail,
    inputPassword,
  };
};

const usuarioValido = () => {
  fetch("/script/usuarios.json")
    .then((res) => res.json())
    .then((data) => {});
  const user = usuariosMock.find((user) => {
    return user.email === valorInputs().inputEmail.trim().toLowerCase();

    // devuelve al usuario que coincide con el correo ingresado o devuelve undefined
  });
  // validamos que exista el usuario
  if (user) {
    // en este if se valida la contraseña
    if (user.clave === valorInputs().inputPassword.trim().toLowerCase()) {
      // si existe el usuario se devuelve un alert con el nombre y apellido y por consola los datos y se guarda en local storange
      const correo = localStorage.setItem("correo", valorInputs().inputEmail);
      const gg = JSON.stringify(user);
      const clav2 = localStorage.setItem("clave", valorInputs().inputPassword);
      const gt = JSON.stringify(user.clave);
      console.log(gg + gt);
      alert("Bienvenido/a " + user.nombre);
      console.log(user);
    } else {
      document.getElementById("mensaje").innerHTML = "Contraseña incorrecta";
    }
  } else {
    document.getElementById("mensaje").innerHTML = "Correo no existe";
  }
};
