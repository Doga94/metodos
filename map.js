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

let students_1 = ['David', 'Orlando', 'Gomez', 'Alarcon']M