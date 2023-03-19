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