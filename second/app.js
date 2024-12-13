// Enumeración para los géneros de películas
var Genero;
(function (Genero) {
    Genero["Accion"] = "Acci\u00F3n";
    Genero["Comedia"] = "Comedia";
    Genero["Drama"] = "Drama";
    Genero["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
})(Genero || (Genero = {}));
// Enumeración para los países de origen
var Pais;
(function (Pais) {
    Pais["USA"] = "Estados Unidos";
    Pais["Francia"] = "Francia";
    Pais["Japon"] = "Jap\u00F3n";
    Pais["Mexico"] = "M\u00E9xico";
})(Pais || (Pais = {}));
// Lista de películas
var peliculas = [
    { titulo: "Matrix", genero: Genero.CienciaFiccion, pais: Pais.USA },
    { titulo: "Amélie", genero: Genero.Comedia, pais: Pais.Francia },
    { titulo: "Akira", genero: Genero.CienciaFiccion, pais: Pais.Japon },
    { titulo: "Amores Perros", genero: Genero.Drama, pais: Pais.Mexico },
];
// Mostrar información de las películas
peliculas.forEach(function (pelicula) {
    console.log("T\u00EDtulo: ".concat(pelicula.titulo));
    console.log("G\u00E9nero: ".concat(pelicula.genero));
    console.log("Pa\u00EDs: ".concat(pelicula.pais));
    console.log("-----------------------------");
});
