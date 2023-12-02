let data;

const container = document.getElementById("peliculas");

const render = (data) => {
  const cine = document.createElement("div");
  const movieName = document.createElement("h2");
  movieName.setAttribute("id", "movieName");
  movieName.innerHTML = data.pelicula;
  const img = document.createElement("img");
  img.setAttribute("id", "movieImg");
  img.src = data.imagen;
  container.appendChild(cine);
  cine.appendChild(img);
  cine.appendChild(movieName);
};

const getMovies = async () => {
  const res = await fetch("../script/movies.json");
  data = await res.json();

  const input = document.getElementById("buscador");
  input.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value.toLowerCase();
    container.innerHTML = "";
    const filtro = data.filter((e) => e.pelicula.toLowerCase().includes(value));
    filtro.map((element) => {
      render(element);
    });
  });

  data.map((element) => {
    render(element);
  });
};

getMovies();
