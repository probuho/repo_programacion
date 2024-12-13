// Enumeración para los géneros de películas
enum Genero {
  Accion = "Acción",
  Comedia = "Comedia",
  Drama = "Drama",
  CienciaFiccion = "Ciencia Ficción",
}

// Enumeración para los países de origen
enum Pais {
  USA = "Estados Unidos",
  Francia = "Francia",
  Japon = "Japón",
  Mexico = "México",
}

// Interfaz para una película
interface Pelicula {
  titulo: string;
  genero: Genero;
  pais: Pais;
}

// Lista de películas
const peliculas: Pelicula[] = [
  { titulo: "Matrix", genero: Genero.CienciaFiccion, pais: Pais.USA },
  { titulo: "Amélie", genero: Genero.Comedia, pais: Pais.Francia },
  { titulo: "Akira", genero: Genero.CienciaFiccion, pais: Pais.Japon },
  { titulo: "Amores Perros", genero: Genero.Drama, pais: Pais.Mexico },
];

// Mostrar información de las películas
peliculas.forEach((pelicula) => {
  console.log(`Título: ${pelicula.titulo}`);
  console.log(`Género: ${pelicula.genero}`);
  console.log(`País: ${pelicula.pais}`);
  console.log("-----------------------------");
});
