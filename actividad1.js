// Ejercicio 1

// Definir variables que almacenen los siguientes datos:

// Un nombre: "Pepe"
// Una edad: 25
// Un precio: $99.90
// Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.


let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];

let peliculasFavoritas = [
  {
    nombre: "El Origen",
    año: 2010,
    protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    nombre: "Matrix",
    año: 1999,
    protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    nombre: "El Señor de los Anillos: El Retorno del Rey",
    año: 2003,
    protagonistas: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"]
  }
];

// Segundo paso
// Mostrar todos esos valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series favoritas:", seriesFavoritas);
console.log("Películas favoritas:", peliculasFavoritas);

// Tercer paso
// Incrementamos la edad en 1 y la volvemos a mostrar
edad++;
console.log("Nueva edad:", edad);

// Cuarto paso
// Agregamos una serie a la lista de series favoritas y la volvemos a mostrar
seriesFavoritas.push("Game of Thrones");
console.log("Nuevas series favoritas:", seriesFavoritas);
