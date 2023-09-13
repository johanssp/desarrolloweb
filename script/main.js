let ver = prompt(
  "Que pelicula deseas ver? \n 1.-evil dead \n 2.-buscando a nemo \n 3.-dragon ball \n 4.-transformers \n por favor ingresa nombre de pelicula"
);
let mostrarPrompt = false;

switch (ver) {
  case "evil dead":
    console.log("LA PELICULA QUE QUIERES VER ES DE TERROR");
    break;
  case "buscando a nemo":
    console.log("la pelicula es de fantasia");
    break;
  case "dragon ball":
    console.log("la pelicula es de anime");
    break;
  case "transformers":
    console.log("la pelicula es de ciencia ficcion");
    break;

  default:
    console.log("Ingrese una pelicula valida");
    mostrarPrompt = true;
    break;
}

while (mostrarPrompt) {
  ver = prompt(
    "Ingresa una de estas peliculas \n 1.-evil dead \n 2.-buscando a nemo \n 3.-dragon ball \n 4.-transformers \n"
  );
  switch (ver) {
    case "evil dead":
      console.log("LA PELICULA QUE QUIERES VER ES DE TERROR");
      mostrarPrompt = false;
      break;
    case "buscando a nemo":
      console.log("la pelicula es de fantasia");
      mostrarPrompt = false;
      break;
    case "dragon ball":
      console.log("la pelicula es de anime");
      mostrarPrompt = false;
      break;
    case "transformers":
      console.log("la pelicula es de ciencia ficcion");
      mostrarPrompt = false;
      break;

    default:
      console.log("Ingrese una pelicula valida");
      mostrarPrompt = true;
      break;
  }
}
