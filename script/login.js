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
// este fetch ya no se utiliza, porque pregunto por el usuario directamente desde el localstorage, dejo esta fraccion de codigo
// para que se vea que en el proyecto se utilizaron promesas
let arrayUsers;
const usuario2 = fetch("./script/usuarios.json")
  .then((res) => res.json())
  .then((data) => {
    arrayUsers = data;
  });

const usuariosLocal = JSON.parse(localStorage.getItem("user2") || []);
const usuarioValido = () => {
  const user = usuariosLocal.find((user) => {
    return user.correo === valorInputs().inputEmail.trim().toLowerCase();
    // devuelve al usuario que coincide con el correo ingresado o devuelve undefined
  });
  // validamos que exista el usuario
  if (user) {
    Swal.fire("Bienvenido/a " + user.nombre);
    // en este if se valida la contraseña
    if (user.contraseña === valorInputs().inputPassword.trim().toLowerCase()) {
      // si existe el usuario  se guarda en local storange
      sessionStorage.setItem("correo", valorInputs().inputEmail);
      JSON.stringify(user);
      sessionStorage.setItem("clave", valorInputs().inputPassword);
      JSON.stringify(user.clave);
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
