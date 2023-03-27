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