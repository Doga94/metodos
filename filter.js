//Basico

const numbers = [1,2,3,45,6,7,8,432,432,56,67,3];

const filter_numbers = numbers.filter(number => number > 5);
console.log(filter_numbers);

//intermedio
const users = [
    {name: 'jhon', age: 25},
    {name: 'David', age:29},
    {name: 'Orlando', age: 30},
    {name: 'Angela', age: 25},
    {name: 'Marcela', age: 25},
    {name: 'Gemelas', age: 30}
];

const filteed_Users = users.filter(user => user.age > 29);
console.log(filteed_Users);

//Avanzado
const words = ['Apple', 'banana', 'date', 'cherry'];
const filteed_words = words.filter(word => word.length > 5 && word.includes('r'));

console.log(filteed_words);

//Ejerccios

// Filtrar números pares de un array:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
const numbers_1 = [1, 2, 3, 4, 5, 6];

const filtered_par = numbers_1.filter(num_par => (num_par % 2) == 0);
console.log(filtered_par)

// Filtrar nombres que empiecen por una letra determinada:
// Input: ['David', 'Orlando', 'Gomez', 'Alarcon'], letra = 'O'
// Output: ['Orlando']
const nombres = ['David', 'Orlando', 'Gomez', 'Alarcon'];
const filteres_nombres = nombres.filter(names => names.includes('O'));
console.log(filteres_nombres);

// Filtrar objetos con una propiedad específica mayor que un valor dado:
// Input: [{name: 'David', age: 28}, {name: 'Orlando', age: 21}, {name: 'Gomez', age: 30}], minAge = 25
// Output: [{name: 'David', age: 28}, {name: 'Gomez', age: 30}]
const usuarios = [
    {name: 'David', age: 28}, 
    {name: 'Orlando', age: 21}, 
    {name: 'Gomez', age: 30}
];

const filteed_usuarios = usuarios.filter(usuario => usuario.age > 25);
console.log(filteed_usuarios);

// Filtrar elementos en un array de objetos que cumplan múltiples condiciones:
// Input: [{name: 'David', age: 28, gender: 'M'}, {name: 'Orlando', age: 21, gender: 'M'}, 
//{name: 'Maria', age: 35, gender: 'F'}, {name: 'Ana', age: 32, gender: 'F'}], minAge = 25, gender = 'F'
// Output: [{name: 'Maria', age: 35, gender: 'F'}, {name: 'Ana', age: 32, gender: 'F'}]
const objetos_1 = [
    {name: 'David', age: 28, gender: 'M'}, 
    {name: 'Orlando', age: 21, gender: 'M'}, 
    {name: 'Maria', age: 35, gender: 'F'}, 
    {name: 'Ana', age: 32, gender: 'F'}
];

const filteres_mul_condicion = objetos_1.filter(age_gender => age_gender.age > 25 && age_gender.gender.includes('F'));
console.log(filteres_mul_condicion);


// Filtrar elementos en un array de objetos que cumplan una condición con una expresión regular:
// Input: [{name: 'David', email: 'david@example.com'}, {name: 'Orlando', email: 'orlando@example.com'}, 
//{name: 'Maria', email: 'maria@example.com'}, {name: 'Ana', email: 'ana@example.com'}], regex = /example.com$/
// Output: [{name: 'David', email: 'david@example.com'}, {name: 'Orlando', email: 'orlando@example.com'}, 
//{name: 'Maria', email: 'maria@example.com'}, {name: 'Ana', email: 'ana@example.com'}]
const my_array = [
    {name: 'David', email: 'david@example.com'}, 
    {name: 'Orlando', email: 'orlando@example.com'}, 
    {name: 'Maria', email: 'maria@example.com'}, 
    {name: 'Ana', email: 'ana@example.com'}
];
const filtrar_correo = my_array.filter(array_2 => array_2.email.includes('example.com'));
console.log(filtrar_correo);