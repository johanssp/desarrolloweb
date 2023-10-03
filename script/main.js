// pre-entrega1
let ver = prompt(
  "Que pelicula deseas ver? \n 1.-evil dead \n 2.-rambo 1 \n 3.-bajo la misma estrella \n 4.-transformers \n 5.-madagascar  \n por favor ingresa un nombre de pelicula"
);
let mostrarPrompt = false;

switch (ver) {
  case "1":
    console.log("La pelicula que quieres ver es de terror/ evil dead");
    break;
  case "2":
    console.log("La pelicula que quieres ver es de accion/ rambo");
    break;
  case "3":
    console.log(
      "La pelicula que quieres ver es de romance/ bajo la misma estrella"
    );
    break;
  case "4":
    console.log(
      "La pelicula que quieres ver es de ciencia ficcion/ transformers"
    );
    break;
  case "5":
    console.log("La pelicula que quieres ver es de animacion/ madagascar");
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
    case "1":
      console.log("La pelicula que quieres ver es de terror/ evil dead");
      mostrarPrompt = false;
      break;
    case "2":
      console.log("La pelicula que quieres ver es de accion/ rambo 1");
      mostrarPrompt = false;
      break;
    case "3":
      console.log(
        "La pelicula que quieres ver es de romance/ bajo la misma estrella"
      );
      mostrarPrompt = false;
      break;
    case "4":
      console.log(
        "La pelicula que quieres ver es de ciencia ficcion/ transformers"
      );
      mostrarPrompt = false;
      break;
    case "5":
      console.log("La pelicula que quieres ver es de animacion/ madagascar");
      mostrarPrompt = false;
      break;

    default:
      console.log("Ingrese una pelicula valida");
      mostrarPrompt = true;
      break;
  }
}

let calidad = prompt(
  "¡En que calidad deseas ver tu pelicula ?\n 1.-1080 \n 2.-720 \n 3.-360 \n 4.-240 \n ingrese una calidad "
);

if (calidad == 1 || calidad == 2) {
  console.log("la calidad que escogiste es aceptable");
  alert("tu experiencia sera fantastica");
}
if (calidad == 3 || calidad == 4) {
  console.log("la calidad que escogiste es baja ");
  alert("tu experiencia no sera muy buena");
}
