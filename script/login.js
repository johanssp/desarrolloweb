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
let arrayUsers;
const usuario2 = fetch("./script/usuarios.json")
  .then((res) => res.json())
  .then((data) => {
    arrayUsers = data;
  });

const usuarioValido = () => {
  const user = arrayUsers.find((user) => {
    return user.email === valorInputs().inputEmail.trim().toLowerCase();
    // devuelve al usuario que coincide con el correo ingresado o devuelve undefined
  });
  // validamos que exista el usuario
  if (user) {
    Swal.fire("Bienvenido/a " + user.nombre);
    // en este if se valida la contraseña
    if (user.clave === valorInputs().inputPassword.trim().toLowerCase()) {
      // si existe el usuario  se guarda en local storange
      const correo = localStorage.setItem("correo", valorInputs().inputEmail);
      const gg = JSON.stringify(user);
      const clav2 = localStorage.setItem("clave", valorInputs().inputPassword);
      const gt = JSON.stringify(user.clave);
      Swal.fire("Bienvenido/a " + user.nombre);
    } else {
      document.getElementById("mensaje").innerHTML = "Contraseña incorrecta";
      Swal.fire({
        icon: "error",
        title: "error",
        text: " ingrese un dato valido",
      });
    }
  } else {
    document.getElementById("mensaje").innerHTML = "Correo no existe";
    Swal.fire({
      icon: "error",
      title: "error",
      text: " ingrese un dato valido",
    });
  }
};
