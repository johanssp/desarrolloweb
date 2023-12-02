/*registro*/
const op = document.getElementById("formulario");
op.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;

  const user1 = JSON.parse(localStorage.getItem("user2")) || [];
  const isUserRegister = user1.find((use) => {
    return use.correo === email;
  });
  if (isUserRegister) {
    return Swal.fire("usuario ya existe");
  }
  user1.push({
    nombre,
    apellido,
    correo: email,
    contraseña,
  });
  localStorage.setItem("user2", JSON.stringify(user1));
  Swal.fire("usuario registrado");
  location.href = "/index.html";
});
