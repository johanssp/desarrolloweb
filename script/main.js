let ver = prompt(
  "Que pelicula deseas ver? \n 1.-evil dead \n 2.-rambo 1 \n 3.-bajo la misma estrella \n 4.-transformers \n 5.-madagascar  \n por favor ingresa un nombre de pelicula"
);
let mostrarPrompt = false;

switch (ver) {
  case "evil dead":
    console.log("La pelicula que quieres ver es de terror");
    break;
  case "rambo 1":
    console.log("La pelicula que quieres ver es de accion");
    break;
  case "bajo la misma estrella":
    console.log("La pelicula que quieres ver es de romance");
    break;
  case "transformers":
    console.log("La pelicula que quieres ver es de ciencia ficcion");
    break;
  case "madagascar":
    console.log("La pelicula que quieres ver es de animacion");
    break;

  default:
    console.log("Ingrese una pelicula valida");
    mostrarPrompt = true;
    break;
}

while (mostrarPrompt) {
  ver = prompt(
    "Ingrese una de estas peliculas correctamente \n 1.-evil dead \n 2.-rambo 1 \n 3.-bajo la misma estrella \n 4.-transformers \n 5.-madagascar \n"
  );
  switch (ver) {
    case "evil dead":
      console.log("La pelicula que quieres ver es de terror");
      mostrarPrompt = false;
      break;
    case "rambo 1":
      console.log("La pelicula que quieres ver es de accion");
      mostrarPrompt = false;
      break;
    case "bajo la misma estrella":
      console.log("La pelicula que quieres ver es de romance");
      mostrarPrompt = false;
      break;
    case "transformers":
      console.log("La pelicula que quieres ver es de ciencia ficcion");
      mostrarPrompt = false;
      break;
    case "madagascar":
      console.log("La pelicula que quieres ver es de animacion");
      mostrarPrompt = false;
      break;

    default:
      console.log("Ingrese una pelicula valida");
      mostrarPrompt = true;
      break;
  }
}
