//pre-entrega2

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
  const user = usuariosMock.find((user) => {
    return user.email === valorInputs().inputEmail.trim().toLowerCase();
    // devuelve al usuario que coincide con el correo ingresado o devuelve undefined
  });
  // validamos que exista el usuario
  if (user) {
    // en este if se valida la contraseña
    if (user.clave === valorInputs().inputPassword.trim().toLowerCase()) {
      // si existe el usuario se devuelve un alert con el nombre y apellido y por consola los datos
      alert("Bienvenido/a " + user.nombre);
      console.log(user);
    } else {
      document.getElementById("mensaje").innerHTML = "Contraseña incorrecta";
    }
  } else {
    document.getElementById("mensaje").innerHTML = "Correo no existe";
  }
};
