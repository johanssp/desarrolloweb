//pre-entrega2
const correo = prompt("ingrese su correo");

const user = usuariosMock.find((unlogin) => {
  return unlogin.email === correo.trim().toLowerCase();
  // devuelve al usuario que coincide con el correo ingresado o devuelve undefined
});

// validamos que exista el usuario
if (user) {
  // se pide la contraseña despues de validar que el correo exista en la data mockeada
  const password = prompt("ingrese su contraseña");
  // en este if se valida la contraseña
  if (user.clave === password.trim().toLowerCase()) {
    // si existe el usuario se devuelve un alert con el nombre y apellido y por consola los datos
    alert("bienvenido/a " + user.nombre + " " + user.apellidos);
    console.log(user);
  } else {
    alert("contraseña no valida");
  }
} else {
  alert("correo " + correo + " no existe");
}
