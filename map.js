const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map(function(number){
    return number * 2
});

console.log(numbers);
console.log(newNumbers);

let letters = ["hola", "bienvenido", "adiós"];

const UpperLetters = letters.map(function(letter){
    return letter.toUpperCase()
});

console.log(letters);
console.log(UpperLetters);

let estudents = ['David G', 'Paola F', 'Stiven S', 'Laura p'];
let asistencia = estudents.map((nombre) => {
    return{
        nombre: nombre,
        asistencia: false
    }
});

console.log(estudents);
console.log(asistencia);


// map 2

let dogs = [
    {nombre: "Pinky", edad: 12},
    {nombre: "Kaiser", edad: 10},
    {nombre: "Niña", edad: 4}
];

let nombres = dogs.map(function(nombre){
    return nombre.nombre;
});

console.log(nombres);

//map 3
let celulares = [
    {marca: 'Xiaomi', precio: 1500},
    {marca: 'Redmi', precio: 2500},
    {marca: 'Samsung', precio: 3500}
];

let celular = celulares.map(function(precio){
    return precio.precio;
});

console.log(celular);

// map 4
let cats = [
    {nombre_gato: 'Candi', fina: 'Si'},
    {nombre_gato: 'Figaro', fina: 'No'},
    {nombre_gato: 'Manchula', fina: 'No'},
    {nombre_gato: 'Abu', fina: 'Si'}
];

let cat_name = cats.map(function(cat){
    return cat.nombre_gato;
});

console.log(cat_name)

// map 5
let another_numbers = [1,2,3,4,5,6,7,8,9,10];

function multiplicar(num) {
    return function(rta){
        return rta - num;
    }
}

let new_Numbers = another_numbers.map(multiplicar(5));

console.log(new_Numbers);


// map 6

let students_1 = ['David', 'Orlando', 'Gomez', 'Alarcon'];
let assintance = students_1.map((name_1) => `${name_1}.`)

console.log(students_1);
console.log(assintance);
console.log(students_1);

//map 7 Productos

let products = [
    {name_prduct: 'arroz', precio_product: 25},
    {name_prduct: 'frijol', precio_product: 35},
    {name_prduct: 'perrejil', precio_product: 420},
    {name_prduct: 'Maiz', precio_product: 60}
];

//Imprimir el nombre del prducto

//let new_array = products.map((name_product) => `${name_product.name_prduct}.`)
//console.log(new_array)


//Sumar o restar una cantidad a la propiedad de precio de cada obeto

// let sumar_products = products.map((sumar) =>{
//     sumar.precio_product += 10; // incrementa el valor del precio en 10
//     return sumar
// });
// console.log(sumar_products)

//Filtrar productos por cierta condición
// let expansive_products = products.filter((product) => product.precio_product > 110);
// let cheap_product_name = expansive_products.map((product) => product.name_prduct);

// console.log(cheap_product_name);
// console.log(expansive_products);

//Crear un nuevo objeto con una propiedad adicional a partir de los objetos originales

let new_objects = products.map((product) => {
    return {
        name: product.name_prduct,
        price: product.precio_product,
        category: 'FOOD'
    };
});

console.log(new_objects)