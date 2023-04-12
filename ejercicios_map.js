/*

// Dado un array de números, crea un nuevo array donde cada número sea multiplicado por 2.

let number = [1,2,3,4,5,6,7,8,9,10];

let number_2 = number.map((num) => {
    return num * 2
});

console.log(number)
console.log(number_2)

// Dado un array de palabras, crea un nuevo array donde cada palabra tenga la primera letra en mayúscula.

// Se define un array llamado "palabra" con algunas palabras en minúsculas.
let palabra = ['hola', 'como', 'esta', 'que'];

// Se utiliza el método "map" para recorrer cada palabra del array "palabra".
// Para cada palabra, se aplica una función que convierte la primera letra en mayúscula
// y concatena el resto de la palabra en minúscula.
let palabra_mayuscula = palabra.map(palabra_1 => palabra_1.charAt(0).toUpperCase() + palabra_1.slice(1));

// Se muestra el resultado del nuevo array "palabra_mayuscula".
console.log(palabra_mayuscula)


// Dado un array de objetos que contienen información de productos (nombre, precio, cantidad), crea un nuevo array donde cada objeto tenga una propiedad adicional "subtotal", que sea el resultado de multiplicar el precio por la cantidad.

let productos = [
    {nombre_product: 'Arroz', precio: 25, cantidad: 2500},
    {nombre_product: 'Frijol', precio: 35, cantidad: 3250},
    {nombre_product: 'Lentejas', precio: 120, cantidad: 500}
];

let product_subtotal = productos.map((subtotal) => {
    return {
        name: subtotal.nombre_product,
        price: subtotal.precio,
        subtotal: subtotal.precio * subtotal.cantidad
    };
});

console.log(product_subtotal)

// Dado un array de fechas, crea un nuevo array donde cada fecha tenga un formato personalizado (por ejemplo, "DD/MM/AAAA").



// Dado un array de strings que contienen números, crea un nuevo array donde cada string sea convertido a número.


let numbers_string = ['1','2','3','4'];
console.log('Antes se veria asi: ' + numbers_string);

let numbers = numbers_string.map((number_1) => parseInt(number_1))

console.log('\nAora que se cambio ya quedo asi: ' + numbers);


// Ejercicio de map() - Transformación de datos

// Datos de entrada: Array de números
const numbers_1 = [2, 4, 6, 8, 10];

// TODO: Usa el método map() para crear un nuevo array que contenga el cuadrado de cada número en el array "numbers"
const number_1_2 = numbers_1.map((num_1) => {
    return num_1 ** 2;
});
// Output esperado: [4, 16, 36, 64, 100]
console.log(number_1_2);
*/

/*****************************************************************************************************/

// Ejercicio de map() - Transformación de datos

// Datos de entrada: Array de objetos con información de productos
const products = [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 25 },
    { id: 3, name: "Producto 3", price: 15 },
    { id: 4, name: "Producto 4", price: 30 },
];

// TODO: Usa el método map() para crear un nuevo array que contenga los nombres de los productos en mayúsculas

const product_name = products.map((produ) => {
    return produ.name.toUpperCase();
});
// Output esperado: ["PRODUCTO 1", "PRODUCTO 2", "PRODUCTO 3", "PRODUCTO 4"]

console.log(product_name);

/*******************************************************************************************/

// Ejercicio de map() - Transformación de datos

// Datos de entrada: Array de objetos con información de empleados
const employees = [
    { id: 1, name: "Juan", salary: 40000 },
    { id: 2, name: "María", salary: 60000 },
    { id: 3, name: "Carlos", salary: 35000 },
    { id: 4, name: "Sofía", salary: 80000 },
];

// TODO: Usa el método map() para crear un nuevo array que contenga objetos con la información de los empleados,
// pero con un nuevo campo "bonus" que sea igual al 10% del salario de cada empleado
const employees_bonus = employees.map((bonus) => {
    return {
        id: bonus.id,
        name: bonus.name,
        salary: bonus.salary,
        bonus: bonus.salary * 0.10
    }
});
console.log(employees_bonus);

// Output esperado: [
//   { id: 1, name: "Juan", salary: 40000, bonus: 4000 },
//   { id: 2, name: "María", salary: 60000, bonus: 6000 },
//   { id: 3, name: "Carlos", salary: 35000, bonus: 3500 },
//   { id: 4, name: "Sofía", salary: 80000, bonus: 8000 }
// ]

/************************************************************************************************/
// Ejercicio de map() - Transformación de datos

// Datos de entrada: Array de objetos con información de estudiantes
const students = [
    { id: 1, name: "Juan", age: 18 },
    { id: 2, name: "María", age: 20 },
    { id: 3, name: "Carlos", age: 19 },
    { id: 4, name: "Sofía", age: 21 },
];

  // TODO: Usa el método map() para crear un nuevo array que contenga solo los nombres de los estudiantes que sean mayores de edad
const estudents_olds = students.filter(olds => olds.age > 18).map(olds => olds.name);
  // Output esperado: ["María", "Carlos", "Sofía"]
console.log(estudents_olds);

/******************************************************************************************/
// Datos de entrada: Array de objetos con información de libros
const books = [
    { id: 1, title: "El Gran Gatsby", author: "F. Scott Fitzgerald", genre: "Novela", price: 12.99 },
    { id: 2, title: "Orgullo y Prejuicio", author: "Jane Austen", genre: "Novela", price: 9.99 },
    { id: 3, title: "Cien Años de Soledad", author: "Gabriel García Márquez", genre: "Novela", price: 14.99 },
    { id: 4, title: "El Código Da Vinci", author: "Dan Brown", genre: "Misterio", price: 11.99 },
    { id: 5, title: "La Odisea", author: "Homero", genre: "Epopeya", price: 8.99 },
];
// TODO: Usa los métodos filter() y map() para crear un nuevo array que contenga solo los títulos de los libros de género "Novela" y con un precio mayor a 10.00
const title = books.filter(book => book.genre === "Novela" && book.price > 10.00).map(book => book.title);
// Output esperado: ["El Gran Gatsby", "Cien Años de Soledad"]
console.log(title);