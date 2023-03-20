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